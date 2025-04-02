// import React from "react";
// import Link from "next/link";
//
// const Form = () => {
// 	return (
// 		<div className="max-w-screen-xl relative flex flex-col p-5 md:p-10 lg:p-18 rounded-xl text-black bg-white shadow-lg">
// 			<div className="text-md md:text-lg lg:text-xl font-bold mb-7 text-[#1e0e4b] text-center">
// 				Đăng nhập vào Race of Finance
// 			</div>
// 			{/*<div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>*/}
// 			<form className="flex flex-col gap-3">
// 				<div className="block relative">
// 					<label
// 						htmlFor="email"
// 						className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
// 					>
// 						Email hoặc username
// 					</label>
// 					<input
// 						type="text"
// 						id="email"
// 						className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
// 					/>
// 				</div>
// 				<div className="block relative">
// 					<label
// 						htmlFor="password"
// 						className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
// 					>
// 						Password
// 					</label>
// 					<input
// 						type="text"
// 						id="password"
// 						className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
// 					/>
// 				</div>
// 				<div className="text-sm text-[#27548A] font-semibold">
// 					<a href="/reset-password">Bạn quên mật khẩu?</a>
// 				</div>
// 				<button
// 					type="submit"
// 					className="bg-[#27548A] font-semibold w-max m-auto px-6 py-2 text-white text-sm rounded-xl"
// 				>
// 					Submit
// 				</button>
// 			</form>
// 			<div className="text-sm text-center mt-[1.6rem]">
// 				Chưa có tài khoản?{" "}
// 				<a className="text-sm text-[#27548A]" href="/sign-up">
// 					Đăng ký để tham gia!
// 				</a>
// 			</div>
// 		</div>
// 	);
// };
//
// export default Form;

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
const ProfileForm = () => {
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
				alert("Đăng nhập thành công!");
				form.reset();
			} else {
				alert("Đăng nhập thất bại!");
			}
		} catch (err) {
			alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
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

export default ProfileForm;
