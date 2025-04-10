// api/auth.api.ts
import API_INSTANCE from "@/services/api_instance";

interface ApiResponse<T> {
    isTaken: any;
	success: boolean;
	data: T;
	message?: string;
}

export interface SubmissionResponse {
	examId: string;
	content: string;
	maxQuestions: number;
	questions: {
		questionOrder: number;
		options: string[];
		correctOption: string;
		score: number;
	}[];
	duration: number;
	startedAt: string;
}

interface SubmissionStatusResponse {
	message: string;
	isTaken: boolean;
}

export const getSubmissionStatus = (userId: string) =>
	API_INSTANCE.get<ApiResponse<SubmissionStatusResponse>>(`/api/v1/exam/${userId}`);

export const fetchExam = () =>
	API_INSTANCE.get<ApiResponse<SubmissionResponse>>(`/api/v1/exam/start`);

export const postSubmitExam = (userId: string, data: {answers: any, screenOut: number}) =>
	API_INSTANCE.post<ApiResponse<SubmissionResponse>>(`/api/v1/exam/${userId}/submit`, data);
