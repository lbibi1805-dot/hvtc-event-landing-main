// api/auth.api.ts
import API_INSTANCE from "@/services/api_instance";

interface ApiResponse<T> {
	success: boolean;
	data: T;
	message?: string;
}

interface SubmissionStatusResponse {
	message: string;
	isTaken: boolean;
}

export const getSubmissionStatus = (userId: string) =>
	API_INSTANCE.get<ApiResponse<SubmissionStatusResponse>>(`/api/v1/exam/${userId}`);
