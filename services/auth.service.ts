// services/auth.service.ts
import { signIn, signUp, sendVerification, verifyCode, fetchUserData } from "@/api/auth.api";

export const signInUser = async (userInput: { email: string; password: string }) => {
	const response = await signIn(userInput);
	if (!response.data.success) {
		throw new Error("Đăng nhập thất bại");
	}
	return response.data;
};

export const signUpUser = async (userData: any) => {
	const response = await signUp(userData);
	if (!response.data.success) {
		throw new Error(response.data.message || "Đăng ký thất bại");
	}
	return response.data;
};

export const sendVerificationCode = async (email: string, candidateData: any) => {
	const response = await sendVerification(email, candidateData);
	if (!response.data.success) {
		throw new Error(response.data.message || "Không thể gửi mã xác nhận");
	}
	return response.data;
};

export const verifyCodeUser = async (email: string, code: string, token: string, candidateData: any) => {
	const response = await verifyCode(email, code, token, candidateData);
	if (!response.data.success) {
		throw new Error(response.data.message || "Xác nhận thất bại");
	}
	return response.data;
};

export const fetchUserProfile = async () => {
	const response = await fetchUserData();
	if (!response.data.success) {
		throw new Error(response.data.message || "Không thể lấy thông tin người dùng");
	}
	return response.data.data;
};