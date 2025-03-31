import React from "react";
import Link from "next/link";

const Form = () => {
	return (
		<div className="max-w-screen-xl relative flex flex-col p-5 md:p-10 lg:p-18 rounded-xl text-black bg-white shadow-lg">
			<div className="text-md md:text-lg lg:text-xl font-bold mb-7 text-[#1e0e4b] text-center">
				Đăng nhập vào Race of Finance
			</div>
			{/*<div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>*/}
			<form className="flex flex-col gap-3">
				<div className="block relative">
					<label
						htmlFor="email"
						className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
					>
						Email hoặc username
					</label>
					<input
						type="text"
						id="email"
						className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
					/>
				</div>
				<div className="block relative">
					<label
						htmlFor="password"
						className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
					>
						Password
					</label>
					<input
						type="text"
						id="password"
						className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
					/>
				</div>
				<div className="text-sm text-[#27548A] font-semibold">
					<a href="/reset-password">Bạn quên mật khẩu?</a>
				</div>
				<button
					type="submit"
					className="bg-[#27548A] font-semibold w-max m-auto px-6 py-2 text-white text-sm rounded-xl"
				>
					Submit
				</button>
			</form>
			<div className="text-sm text-center mt-[1.6rem]">
				Chưa có tài khoản?{" "}
				<a className="text-sm text-[#27548A]" href="/sign-up">
					Đăng ký để tham gia!
				</a>
			</div>
		</div>
	);
};

export default Form;
