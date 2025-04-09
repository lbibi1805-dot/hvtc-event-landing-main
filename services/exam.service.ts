import { getSubmissionStatus } from "@/api/exam.api";

export const fetchSubmissionStatus = async (userId: string) => {
	const response = await getSubmissionStatus(userId);
	if (response.status !== 200) {
		throw new Error(response.data.message || "Failed to fetch submission status");
	}

	console.log("Respone data", response.data);
	return response.data.isTaken; // Trả về isTaken trực tiếp từ data
};