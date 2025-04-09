import React from "react";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("react-modal"), { ssr: false });

interface VerificationModalProps {
	isModalOpen: boolean;
	setIsModalOpen: (value: boolean) => void;
	form: any;
	code: string;
	setCode: (value: string) => void;
	token: string;
	isResending: boolean;
	handleResendCode: () => Promise<void>;
	handleVerifyCode: () => Promise<void>;
}

export const VerificationModal = ({
									  isModalOpen,
									  setIsModalOpen,
									  form,
									  code,
									  setCode,
									  token,
									  isResending,
									  handleResendCode,
									  handleVerifyCode,
								  }: VerificationModalProps) => (
	<Modal
		isOpen={isModalOpen}
		onRequestClose={() => setIsModalOpen(false)}
		className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
		overlayClassName="fixed inset-0"
	>
		<div className="bg-white rounded-lg p-6 max-w-sm w-full">
			<h2 className="text-xl font-bold mb-4 text-gray-800">Xác Nhận Email</h2>
			<p className="text-black mb-4">
				Vui lòng nhập mã xác nhận đã được gửi đến email {form.getValues("email")}
			</p>
			<input
				type="text"
				value={code}
				onChange={e => setCode(e.target.value)}
				className="w-full p-2 border rounded mb-4 text-gray-800"
				placeholder="Nhập mã xác nhận"
				required
			/>
			<button
				type="button"
				onClick={handleResendCode}
				disabled={isResending}
				className="mb-4 text-blue-500 hover:underline disabled:opacity-50"
			>
				Gửi lại mã
			</button>
			<div className="flex justify-end gap-2">
				<button onClick={() => setIsModalOpen(false)} className="p-2 text-white bg-red-700 rounded hover:bg-red-800">
					Hủy
				</button>
				<button onClick={handleVerifyCode} className="p-2 bg-[#203355] text-white rounded hover:bg-purple-700">
					Xác Nhận
				</button>
			</div>
		</div>
	</Modal>
);