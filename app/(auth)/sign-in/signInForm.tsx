"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import ToastUtil from "@/lib/ToastUtil";

// Define the form schema using Zod
const formSchema = z.object({
	email: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	password: z.string().min(6, {
		message: "Password must be at least 6 characters.",
	})
});

// Initialize the form with react-hook-form and Zod resolver
const SignInForm = () => {


	// @ts-ignore
	const { login } = useAuth();
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: ""
		},
	});

	// Define the submit handler
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/sign-in`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});


			const data = await response.json();
			if (response.ok) {
				setSuccess("Đăng nhập thành công!");
				setError(null);
				ToastUtil.success('Đăng nhập thành công!', 'Chào mừng bạn quay lại.', {
					duration: 3000,
					position: 'top-right',
				});
				form.reset();

				if (data.data.token) {
					login(data.data.token); // Lưu token và cập nhật trạng thái xác thực
				}
			} else {
				setError(data.message || "Đăng nhập thất bại. Vui lòng thử lại.");
				setSuccess(null);
				ToastUtil.error('Đăng nhập thất bại', 'Vui lòng kiểm tra email và mật khẩu.');
			}
		} catch (err) {
			setError("Đã xảy ra lỗi. Vui lòng thử lại sau.");
			setSuccess(null);
			ToastUtil.error('Lỗi hệ thống', 'Vui lòng thử lại sau.');
		}
	};

	return (
		<div className="max-w-screen-xl relative flex flex-col p-5 md:p-10 lg:p-18 rounded-xl text-black bg-white shadow-lg">
			<div className="text-md md:text-lg lg:text-xl font-bold mb-7 text-[#1e0e4b] text-center">
				Đăng nhập vào Race of Finance
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="Nhập email của bạn"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Mật khẩu</FormLabel>
								<FormControl>
									<Input
										placeholder="Nhập mật khẩu của bạn"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Đăng nhập</Button>
				</form>
			</Form>
		</div>
	);
};

export default SignInForm;
