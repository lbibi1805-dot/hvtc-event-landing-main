// api/auth.api.ts
import API_INSTANCE from "@/services/api_instance";

interface ApiResponse<T> {
    screenOut: number;
    isTaken: any;
	success: boolean;
	data: T;
	message?: string;
}
export interface QuestionInterface {
	questionOrder: number;
	questionContent: string;
	options: Array<{
		optionA: string;
		optionB: string;
		optionC: string;
		optionD: string;
	}>;
	score: number;
}

export interface SubmissionResponse {
	examId: string;
	maxQuestions: number;
	questions: QuestionInterface[];
	duration?: number;
	startedAt: string;
}

interface SubmissionStatusResponse {
	message: string;
	isTaken: boolean;
}

interface ScreenOutResponse {
	message: string;
	screenOut: number;
}

export const getSubmissionStatus = (userId: string) =>
	API_INSTANCE.get<ApiResponse<SubmissionStatusResponse>>(`/api/v1/exam/${userId}`);

export const fetchExam = () =>
	API_INSTANCE.get<ApiResponse<SubmissionResponse>>(`/api/v1/exam/start`);

export const postSubmitExam = (userId: string, data: {answers: any, screenOut: number}) =>
	API_INSTANCE.post<ApiResponse<SubmissionResponse>>(`/api/v1/exam/${userId}/submit`, data);

export const getScreenOut = () =>
	API_INSTANCE.get<ApiResponse<ScreenOutResponse>>(`/api/v1/exam/screenOut`);

export const saveScreenOut = () =>
	API_INSTANCE.put<ApiResponse<ScreenOutResponse>>(`/api/v1/exam/screenOut`);
