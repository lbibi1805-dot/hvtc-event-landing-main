import { fetchExam, getSubmissionStatus, postSubmitExam } from "@/api/exam.api";
import toastUtil from "@/lib/ToastUtil";

export const fetchSubmissionStatus = async (userId: string) => {
	const response = await getSubmissionStatus(userId);
	if (response.status !== 200) {
		throw new Error(response.data.message || "Failed to fetch submission status");
	}

	console.log("Respone data", response.data);
	return response.data.isTaken; // Trả về isTaken trực tiếp từ data
};

export const startExam =  async () => {
	const response = await fetchExam();
	if (response.status === 404) {
		throw new Error(response.data.message || "Failed to fetch exam");
	}
	return response.data.data;
}

export const submitExam =  async (examId: string, data: {answers: any, screenOut: number}) => {
	if(!examId) {
		throw new Error("User ID is required");
	}
	console.log(data)
	if(!data || !data.answers || !data.screenOut) {
		throw new Error("Data is required");
	}

	const response = await postSubmitExam(examId, data);
	if (response.status !== 200) {
		throw new Error(response.data.message || "Failed to submit exam");
	}

	toastUtil.success("Submission Successfully submitted successfully");
	return response.data.data;
}