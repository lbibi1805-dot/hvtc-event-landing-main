"use client";

import AuthenticatedRoute from "@/components/AuthenticatedRoute";
import TestUnavailable from "@/components/TestUnavailable";
import ExamResultDisplay from "@/components/ExamResultDisplay";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

// Định nghĩa kiểu dữ liệu cho examResult
interface ExamResult {
	candidateId: string;
	examId: string;
	answers: { questionOrder: number; selectedOption: string }[];
	totalScore: number;
	correctAnswers: number;
	wrongAnswers: number;
	notAnswered: number;
	timeSpent: number;
	screenOut: number;
	status: string;
	startedAt: string;
	submittedAt: string;
}

const ExamResultPage = () => {
	// Lấy các trạng thái từ AuthContext
	const { isTakenExam } = useAuth();

	// State để lưu trữ kết quả bài thi, trạng thái tải dữ liệu và lỗi
	const [examResult, setExamResult] = useState<ExamResult | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);


	// Fetch kết quả bài thi
	// useEffect(() => {
	// 	const fetchExamResult = async () => {
	// 	try {
	// 		setLoading(true);
	// 		const response = await fetch(`/api/exam/result`);
	// 		if (!response.ok) {
	// 		throw new Error("Failed to fetch exam results.");
	// 		}
	// 		const data = await response.json();
	// 		setExamResult(data);
	// 	} catch (err: any) {
	// 		setError(err.message || "An error occurred while fetching results.");
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// 	};

	// 	if (isTakenExam) {
	// 		fetchExamResult();
	// 	}
	// }, [isTakenExam]);


	// Fetch dữ liệu mẫu
	useEffect(() => {
		const fetchExamResult = async () => {
		try {
			setLoading(true);
			// Giả lập fetch dữ liệu từ API
			const mockData: ExamResult = {
			candidateId: "663c960b4e372b2d88e1e9a3",
			examId: "EX123456",
			answers: [
				{ questionOrder: 1, selectedOption: "B" },
				{ questionOrder: 2, selectedOption: "D" },
				{ questionOrder: 3, selectedOption: "A" },
				{ questionOrder: 4, selectedOption: "" }, // Not answered
				{ questionOrder: 5, selectedOption: "C" },
			],
			totalScore: 3.5,
			correctAnswers: 3,
			wrongAnswers: 1,
			notAnswered: 1,
			timeSpent: 820,
			screenOut: 0,
			status: "SUBMITTED",
			startedAt: "2025-04-10T10:00:00Z",
			submittedAt: "2025-04-10T10:13:40Z",
			};

			// Giả lập độ trễ API
			await new Promise((resolve) => setTimeout(resolve, 1000));

			setExamResult(mockData);
		} catch (err: any) {
			setError(err.message || "An error occurred while fetching results.");
		} finally {
			setLoading(false);
		}
		};

		if (isTakenExam) {
		fetchExamResult();
		}
	}, [isTakenExam]);



	// Nếu trong thời gian làm bài thi
	return (
		<AuthenticatedRoute>
		<div className="w-full h-screen flex items-center justify-center bg-gray-100">
			{(isTakenExam) ? (
				<ExamResultDisplay examResult={examResult} />
			) : (
			// Nếu chưa làm bài, hiển thị thông báo
			<div className="bg-white p-6 rounded-lg shadow-md">
				<h1 className="text-3xl font-bold text-black mb-4">
				You have not taken the test yet
				</h1>
				<p className="text-lg text-black">
				Please proceed to take the test.
				</p>
			</div>
			)}
		</div>
		</AuthenticatedRoute>
	);
};

export default ExamResultPage;