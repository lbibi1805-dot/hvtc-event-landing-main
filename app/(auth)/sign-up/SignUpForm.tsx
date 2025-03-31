import React from "react";

const Form = () => {
	return (
		<div>
			<form>
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
					<div className="w-full bg-white rounded-xl shadow border md:mt-0 sm:max-w-md xl:p-0">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<p className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
								Tham gia <span>Race of Finance</span>
							</p>
							<div>
								<label className="block mb-2 text-sm font-medium text-gray-900">
									Email
								</label>
								<input
									placeholder="Sử dụng email tham gia cuộc thi"
									type="text"
									id="email"
									className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
								/>
							</div>
							<div>
								<label className="block mb-2 text-sm font-medium text-gray-900">
									Số CCCD
								</label>
								<input
									placeholder=""
									type="text"
									id="email"
									className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
								/>
							</div>
							<div>
								<label className="block mb-2 text-sm font-medium text-gray-900">
									Mật khẩu
								</label>
								<input
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
									placeholder="••••••••"
									id="password"
									type="password"
								/>
							</div>
							<div>
								<label className="block mb-2 text-sm font-medium text-gray-900">
									Xác nhận mật khẩu
								</label>
								<input
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
									placeholder="••••••••"
									id="confirmPassword"
									type="password"
								/>
							</div>
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
										type="checkbox"
										aria-describedby="terms"
										id="terms"
									/>
								</div>
								<div className="ml-3 text-sm">
									<label className="font-light text-gray-500 text-gray-300">
										Tôi đồng ý với{" "}
										<a
											href="#"
											className=" text-[#27548A] font-medium text-primary-600 hover:underline text-primary-500"
										>
											Các quy định của ban tổ chức và cuộc thi
										</a>
									</label>
								</div>
							</div>
							<button
								className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
								type="submit"
							>
								Tham gia ngay
							</button>
						</div>
						<div className="text-sm text-center my-3 text-gray-900">
							Đã có tài khoản?{" "}
							<a className="text-sm text-[#27548A]" href="/sign-in">
								Đăng nhập ngay
							</a>
						</div>
					</div>

				</div>

			</form>

		</div>
	);
};

export default Form;
