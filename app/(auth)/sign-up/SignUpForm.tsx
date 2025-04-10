"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Major } from "@/enums/major.enums";
import { University } from "@/enums/university.enums";
import ToastUtil, { ToastType } from "@/lib/ToastUtil";
import { FormFields } from "./components/FormFields";
import { VerificationModal } from "./components/VerificationModal";

const formSchema = z
	.object({
		name: z.string().min(2, { message: "Họ và tên phải có ít nhất 2 ký tự" }).trim(),
		dob: z.date({ required_error: "Ngày sinh là bắt buộc" }),
		email: z.string().min(1, { message: "Email không được để trống" }).email({ message: "Email không hợp lệ" }).trim().toLowerCase(),
		phone: z.string().optional().refine(val => !val || /^(\+84|0)[0-9]{9,10}$/.test(val), { message: "Số điện thoại không hợp lệ" }).transform(val => val?.trim() || ""),
		cccd: z.string().optional().refine(val => !val || /^[0-9]{9,12}$/.test(val), { message: "Số CCCD không hợp lệ" }).transform(val => val?.trim() || ""),
		university: z.enum(Object.values(University) as [string, ...string[]], { required_error: "Trường đại học là bắt buộc", invalid_type_error: "Trường đại học không hợp lệ" }),
		major: z.enum(Object.values(Major) as [string, ...string[]], { required_error: "Ngành học là bắt buộc", invalid_type_error: "Ngành học không hợp lệ" }),
		sid: z.string().optional().refine(val => !val || /^[A-Za-z0-9-]+$/.test(val), { message: "Mã sinh viên không hợp lệ" }).transform(val => val?.trim() || ""),
		password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
		confirmPassword: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
		linkFacebook: z.string().optional().refine(val => !val || /^(https?:\/\/)?(www\.)?facebook\.com\/.+$/.test(val), { message: "Đường dẫn Facebook không hợp lệ" }),
		terms: z.boolean().refine(val => val, { message: "Bạn phải đồng ý với các điều khoản" }),
	})
	.refine(data => data.password === data.confirmPassword, { message: "Mật khẩu không khớp", path: ["confirmPassword"] });

const SignUpForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema) as any,
		defaultValues: {
			name: "",
			dob: undefined as unknown as Date,
			email: "",
			phone: "",
			cccd: "",
			university: undefined as unknown as University,
			major: undefined as unknown as Major,
			sid: "",
			password: "",
			confirmPassword: "",
			linkFacebook: "",
			terms: false,
		},
	});

	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [code, setCode] = useState("");
	const [token, setToken] = useState("");
	const [isResending, setIsResending] = useState(false);

	//i want to refactor this
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const toastId = ToastUtil.show(ToastType.LOADING, "Đang đăng ký...");
		try {
			const response = await fetch(`http://localhost:5001/api/v1/auth/sign-up`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});

			const data = await response.json();
			if (response.ok) {
				const verificationResponse = await fetch(`http://localhost:5001/api/v1/auth/send-verification`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: values.email, candidateData: values }),
				});

				const verificationData = await verificationResponse.json();
				if (verificationResponse.ok) {
					setToken(verificationData.token);
					ToastUtil.success("Thành công", verificationData.message, { duration: 3000, position: "top-right" });
					setIsModalOpen(true);
					setError(null);
				} else {
					ToastUtil.error("Thất bại", verificationData.message || "Không thể gửi mã xác nhận.");
					setError(verificationData.message || "Không thể gửi mã xác nhận.");
					setSuccess(null);
				}
			} else {
				ToastUtil.error("Đăng ký thất bại", data.message || "Vui lòng thử lại.");
				setError(data.message || "Đăng ký thất bại. Vui lòng thử lại.");
				setSuccess(null);
			}
		} catch (err) {
			ToastUtil.error("Lỗi hệ thống", "Vui lòng thử lại sau.");
			setError("Đã xảy ra lỗi. Vui lòng thử lại sau.");
			setSuccess(null);
		}
		finally {
			ToastUtil.dismiss(toastId)
		}
	};

	const handleResendCode = async () => {
		setIsResending(true);
		const toastId = ToastUtil.show(ToastType.LOADING, "Đang gửi lại mã xác nhận...");
		try {
			const response = await fetch(`http://localhost:5001/api/v1/auth/send-verification`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: form.getValues("email"), candidateData: form.getValues() }),
			});
			const data = await response.json();
			if (response.ok) {
				setToken(data.token);
				ToastUtil.success("Thành công", data.message, { duration: 3000, position: "top-right" });
			} else {
				ToastUtil.error("Thất bại", data.message || "Không thể gửi lại mã xác nhận.");
			}
		} catch (error) {
			ToastUtil.error("Lỗi hệ thống", "Vui lòng thử lại sau.");
		} finally {
			ToastUtil.dismiss(toastId);
			setIsResending(false);
		}
	};

	const handleVerifyCode = async () => {
		const toastId = ToastUtil.show(ToastType.LOADING, "Đang xác nhận...");
		try {
			const response = await fetch(`http://localhost:5001/api/v1/auth/verify-code`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: form.getValues("email"), code, token, candidateData: form.getValues() }),
			});
			const data = await response.json();
			if (response.ok) {
				ToastUtil.success("Đăng ký thành công!", "Bạn có thể đăng nhập ngay bây giờ.", { duration: 3000, position: "top-right" });
				setSuccess("Đăng ký thành công!");
				setError(null);
				setIsModalOpen(false);
				form.reset();
			} else {
				ToastUtil.error("Xác nhận thất bại", data.message || "Vui lòng thử lại.");
				setError(data.message || "Xác nhận thất bại. Vui lòng thử lại.");
				setSuccess(null);
			}
		} catch (error) {
			ToastUtil.error("Lỗi hệ thống", "Vui lòng thử lại sau.");
			setError("Đã xảy ra lỗi. Vui lòng thử lại sau.");
			setSuccess(null);
		} finally {
			ToastUtil.dismiss(toastId);
		}
	};

	return (
		<div>
			<div className="flex flex-col items-center justify-center py-8 mx-auto lg:py-0 md:-ml-10 md:-mr-20">
				<div className=" w-full bg-white rounded-xl shadow border md:mt-0 max-w-7xl xl:p-0">
					<div className="p-8 space-y-6 md:space-y-8 sm:p-10">
						<div className="flex flex-col items-center justify-center text-center">
							<p className="text-2xl font-semibold leading-tight tracking-tight text-gray-900 md:text-3xl">
								Tham gia <span>Race of Finance</span>
							</p>
						</div>
						{error && <p className="text-red-500 text-sm">{error}</p>}
						{success && <p className="text-green-500 text-sm">{success}</p>}
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
								<FormFields form={form} />
								<div className="flex items-center justify-center -mb-20">
									<Button type="submit">Tham gia</Button>
								</div>
							</form>
						</Form>
					</div>
					<div className="text-sm text-center my-3 text-gray-900 -mt-5">
						Đã có tài khoản?{" "}
						<a className="text-sm text-[#27548A]" href="/sign-in">
							Đăng nhập ngay
						</a>
					</div>
				</div>
			</div>
			<VerificationModal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				form={form}
				code={code}
				setCode={setCode}
				token={token}
				isResending={isResending}
				handleResendCode={handleResendCode}
				handleVerifyCode={handleVerifyCode}
			/>
		</div>
	);
};

export default SignUpForm;