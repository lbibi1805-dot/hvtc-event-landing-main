"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Major } from "@/enums/enums/major.enums";
import { University } from "@/enums/enums/university.enums";

// Define the form schema using Zod
const formSchema = z
	.object({
		name: z
			.string()
			.min(2, { message: "Họ và tên phải có ít nhất 2 ký tự" })
			.trim(),
		dob: z.date({ required_error: "Ngày sinh là bắt buộc" }),
		email: z
			.string()
			.min(1, { message: "Email không được để trống" })
			.email({ message: "Email không hợp lệ" })
			.trim()
			.toLowerCase(),
		phone: z
			.string()
			.optional()
			.refine(val => !val || /^(\+84|0)[0-9]{9,10}$/.test(val), {
				message: "Số điện thoại không hợp lệ",
			})
			.transform(val => val?.trim() || ""),
		cccd: z
			.string()
			.optional()
			.refine(val => !val || /^[0-9]{9,12}$/.test(val), {
				message: "Số CCCD không hợp lệ",
			})
			.transform(val => val?.trim() || ""),
		university: z.enum(Object.values(University) as [string, ...string[]], {
			required_error: "Trường đại học là bắt buộc",
			invalid_type_error: "Trường đại học không hợp lệ",
		}),
		major: z.enum(Object.values(Major) as [string, ...string[]], {
			required_error: "Ngành học là bắt buộc",
			invalid_type_error: "Ngành học không hợp lệ",
		}),
		sid: z
			.string()
			.optional()
			.refine(val => !val || /^[A-Za-z0-9-]+$/.test(val), {
				message: "Mã sinh viên không hợp lệ",
			})
			.transform(val => val?.trim() || ""),
		password: z
			.string()
			.min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
		confirmPassword: z
			.string()
			.min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
		linkFacebook: z
			.string()
			.optional()
			.refine(
				val =>
					!val ||
					/^(https?:\/\/)?(www\.)?facebook\.com\/.+$/.test(val),
				{ message: "Đường dẫn Facebook không hợp lệ" }
			),
		terms: z.boolean().refine(val => val, {
			message: "Bạn phải đồng ý với các điều khoản",
		}),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: "Mật khẩu không khớp",
		path: ["confirmPassword"],
	});

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

	// const onSubmit = (values: z.infer<typeof formSchema>) => {
	// 	console.log(
	// 		`Đăng ký thành công với thông tin: ${JSON.stringify(values)}`
	// 	)
	// };

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/sign-up`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			const data = await response.json();
			if (response.ok) {
				alert("Đăng ký thành công!");
				setSuccess("Đăng ký thành công!");
				setError(null);
				form.reset();
			} else {
				alert("Đăng ký thất bại!");
				setError(data.message || "Đăng ký thất bại. Vui lòng thử lại.");
				setSuccess(null);
			}
		} catch (err) {
			alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
			setError("Đã xảy ra lỗi. Vui lòng thử lại sau.");
			setSuccess(null);
		}
	};

	return (
		<div>
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
				<div className="w-full bg-white rounded-xl shadow border md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<p className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
							Tham gia <span>Race of Finance</span>
						</p>
						{error && (
							<p className="text-red-500 text-sm">{error}</p>
						)}
						{success && (
							<p className="text-green-500 text-sm">{success}</p>
						)}
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-8"
							>
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black">
												Họ và Tên
											</FormLabel>
											<FormControl>
												<Input
													className={"text-black"}
													placeholder="Nhập họ tên trên CCCD của bạn"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="dob"
									render={({ field }) => (
										<FormItem className="flex flex-col">
											<FormLabel className="text-black">
												Ngày sinh
											</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={"outline"}
															className={cn(
																"text-black",
																"w-full pl-3 text-left font-normal",
																!field.value &&
																	"text-muted-foreground"
															)}
														>
															{field.value ? (
																format(
																	field.value,
																	"PPP"
																)
															) : (
																<span>
																	Chọn ngày
																	sinh
																</span>
															)}
															<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent
													className="w-auto p-0"
													align="start"
												>
													<Calendar
														mode="single"
														selected={field.value}
														onSelect={
															field.onChange
														}
														disabled={date =>
															date > new Date() ||
															date <
																new Date(
																	"1900-01-01"
																)
														}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black">
												Email
											</FormLabel>
											<FormControl>
												<Input
													className={"text-black"}
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
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black">
												Số điện thoại
											</FormLabel>
											<FormControl>
												<Input
													className={"text-black"}
													placeholder="Số điện thoại của bạn"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="cccd"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black">
												Số Căn Cước Công Dân
											</FormLabel>
											<FormControl>
												<Input
													className={"text-black"}
													placeholder="Số CCCD ghi trong CCCD"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="university"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black">
												Trường đang theo học
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Chọn trường đại học" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{Object.values(
														University
													).map((uni, index) => (
														<SelectItem
															key={`university-${index}`}
															value={String(uni)}
														>
															{uni}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="major"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black">
												Ngành học
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Chọn ngành học" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{Object.values(Major).map(
														major => (
															<SelectItem
																key={major}
																value={major}
															>
																{major}
															</SelectItem>
														)
													)}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="sid"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black">
												Mã sinh viên
											</FormLabel>
											<FormControl>
												<Input
													className={"text-black"}
													placeholder="Mã sinh viên của bạn"
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
											<FormLabel className="text-black">
												Mật khẩu
											</FormLabel>
											<FormControl>
												<Input
													className={"text-black"}
													type="password"
													placeholder="Nhập mật khẩu"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="confirmPassword"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black">
												Xác nhận mật khẩu
											</FormLabel>
											<FormControl>
												<Input
													className={"text-black"}
													type="password"
													placeholder="Xác nhận mật khẩu"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="linkFacebook"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-black">
												Link Facebook
											</FormLabel>
											<FormControl>
												<Input
													className={"text-black"}
													placeholder="Đường dẫn đến Facebook cá nhân"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="terms"
									render={({ field }) => (
										<FormItem className="flex items-start">
											<FormControl>
												<input
													type="checkbox"
													className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
													checked={field.value}
													onChange={field.onChange}
												/>
											</FormControl>
											<div className="ml-3 text-sm">
												<FormLabel className="font-light text-gray-500">
													Tôi đồng ý với{" "}
													<a
														href="#"
														className="text-[#27548A] font-medium hover:underline"
													>
														Các quy định của ban tổ
														chức và cuộc thi
													</a>
												</FormLabel>
											</div>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="flex items-center justify-center">
									<Button type="submit">Tham gia</Button>
								</div>
							</form>
						</Form>
					</div>
					<div className="text-sm text-center my-3 text-gray-900">
						Đã có tài khoản?{" "}
						<a className="text-sm text-[#27548A]" href="/sign-in">
							Đăng nhập ngay
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
