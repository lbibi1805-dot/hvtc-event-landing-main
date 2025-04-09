// api/auth.api.ts
import API_INSTANCE from "@/services/api_instance";

interface ApiResponse<T> {
	success: boolean;
	data: T;
	message?: string;
}

export const signIn = (userInput: { email: string; password: string }) =>
	API_INSTANCE.post<ApiResponse<{ token: string }>>("/api/v1/auth/sign-in", userInput);

export const signUp = (userData: any) =>
	API_INSTANCE.post<ApiResponse<any>>("/api/v1/auth/sign-up", userData);

export const sendVerification = (email: string, candidateData: any) =>
	API_INSTANCE.post<ApiResponse<{ token: string }>>("/api/v1/auth/send-verification", { email, candidateData });

export const verifyCode = (email: string, code: string, token: string, candidateData: any) =>
	API_INSTANCE.post<ApiResponse<any>>("/api/v1/auth/verify-code", { email, code, token, candidateData });

export const fetchUserData = () =>
	API_INSTANCE.get<ApiResponse<{
        _id: string; id: string; name: string; email: string
	}>>("/api/v1/user/me");