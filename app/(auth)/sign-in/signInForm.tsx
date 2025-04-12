"use client";

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
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import ToastUtil from "@/lib/ToastUtil";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { signInUser } from "@/services/auth.service";

// Define the form schema using Zod
const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email không được để trống" })
		.email({ message: "Email không hợp lệ" })
		.trim()
		.toLowerCase(),
	password: z.string().min(6, {
		message: "Mật khẩu phải tối thiểu 6 ký tự.",
	}),
});

const SignInForm = () => {
	// @ts-ignore
	const { login } = useAuth();
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const [showPassword, setShowPassword] = useState(false); // Toggle password

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// Define the submit handler
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const data = await signInUser(values);
			setSuccess("Đăng nhập thành công!");
			setError(null);
			ToastUtil.success(
				"Đăng nhập thành công!",
				"Chào mừng bạn quay lại.",
				{ duration: 3000, position: "top-right" }
			);
			form.reset();
			if (data.data.token) {
				await login(data.data.token);
			}
		} catch (err: any) {
			setError(err.message || "Đăng nhập thất bại. Vui lòng thử lại.");
			setSuccess(null);
			ToastUtil.error(
				"Đăng nhập thất bại",
				"Vui lòng kiểm tra email và mật khẩu."
			);
		}
	};

	return (
		<div className="max-w-md w-full mx-auto mt-16 bg-white border border-gray-200 shadow-xl rounded-xl px-6 py-10">
			<h2 className="text-2xl font-extrabold text-center text-gray-800 mb-2">
				Chào mừng bạn quay trở lại!
			</h2>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					{/* Email */}
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-gray-700 font-bold">
									Email
								</FormLabel>
								<FormControl>
									<Input
										placeholder="Nhập email của bạn"
										className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
										{...field}
									/>
								</FormControl>
								<FormMessage className="text-sm text-red-500" />
							</FormItem>
						)}
					/>

					{/* Password with eye icon */}
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-gray-700 font-bold">
									Mật khẩu
								</FormLabel>
								<FormControl>
									<div className="relative">
										<Input
											type={
												showPassword
													? "text"
													: "password"
											}
											placeholder="Nhập mật khẩu của bạn"
											className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10 transition text-black"
											{...field}
										/>
										<button
											type="button"
											onClick={() =>
												setShowPassword(!showPassword)
											}
											className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
										>
											{showPassword ? (
												<EyeOffIcon className="h-5 w-5" />
											) : (
												<EyeIcon className="h-5 w-5" />
											)}
										</button>
									</div>
								</FormControl>
								<FormMessage className="text-sm text-red-500" />
							</FormItem>
						)}
					/>

					{/* Submit */}
					<Button
						type="submit"
						className="bg-[#27548A] w-full hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
					>
						Đăng nhập
					</Button>
				</form>
				{/* Link to Sign-Up Page */}
                <div className="text-sm text-center mt-4 text-black">
                        Chưa có tài khoản?{" "}
                    <a className="text-[#27548A] font-medium hover:underline" href="/sign-up">
                        Đăng ký ngay
                    </a>
                </div>
			</Form>
		</div>
	);
};

export default SignInForm;
