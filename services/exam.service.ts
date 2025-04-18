import { fetchExam,
	getSubmissionStatus,
	postSubmitExam,
	getScreenOut as getScreenOutAPI,
	saveScreenOut as saveScreenOutAPI,
} from "@/api/exam.api";
import toastUtil from "@/lib/ToastUtil";

export const fetchSubmissionStatus = async (userId: string) => {
	const response = await getSubmissionStatus(userId);
	if (response.status !== 200) {
		throw new Error(response.data.message || "Lỗi khi lấy trạng thái bài thi");
	}

	// console.log("Respone data", response.data);
	return response.data.isTaken; // Trả về isTaken trực tiếp từ data
};

export const startExam =  async () => {
	const response = await fetchExam();
	if (response.status === 404) {
		throw new Error(response.data.message || "Lỗi khi lấy thông tin bài thi");
	}
	return response.data.data;
}

export const submitExam =  async (examId: string, data: {answers: any, screenOut: number}) => {
	if(!examId) {
		throw new Error("User ID is required");
	}
	// console.log(data)
	if(!data.screenOut) data.screenOut = 0;
	if(!data || !data.answers) {
		throw new Error("Data is required");
	}

	const response = await postSubmitExam(examId, data);
	return response;
}

export const getScreenOut = async () => {
	const response = await getScreenOutAPI();
	if (response.status !== 200) {
		throw new Error(response.data.message || "Lỗi khi lấy thông tin bài thi");
	}
	// console.log(response);
	return response.data;
}

export const saveScreenOut = async () => {
	const response = await saveScreenOutAPI();
	if (response.status !== 200) {
		throw new Error(response.data.message || "Lỗi khi lấy thông tin bài thi");
	}
	// console.log(response);
	return response.data;
}