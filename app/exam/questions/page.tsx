"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthenticatedRoute from "@/components/AuthenticatedRoute";

import { tryParsePattern } from "next/dist/build/webpack/plugins/jsconfig-paths-plugin";
import { startExam, submitExam } from "@/services/exam.service";
import { SubmissionResponse } from "@/api/exam.api";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { useAuth } from "@/context/AuthContext";
import toastUtil from "@/lib/ToastUtil";
import TestUnavailable from "@/components/TestUnavailable";


const ExamQuestion = () => {
	const totalQuestions = 25;
	const [currentQuestion, setCurrentQuestion] = useState(5);
	const [answers, setAnswers] = useState<Record<number, string | null>>({});
	const [timeLeft, setTimeLeft] = useState(999); // 30 minutes in seconds CHANGE THE COUNTDOWN TIME
	const [tabSwitchCount, setTabSwitchCount] = useState<number>(0);
	const [warningMessage, setWarningMessage] = useState("");
	const [isReady, setIsReady] = useState(false); // Modal state
	const [timeUp, setTimeUp] = useState(false); // Time-up state
	const router = useRouter();
	const [examData, setExamData] = useState<SubmissionResponse | null>(null); // State to hold exam data
	const {user} = useAuth();
	const { isTakenExam } = useAuth();

	// Reset tab switch count at start of exam
	useEffect(() => {
		setTabSwitchCount(0);
		localStorage.setItem("tabSwitchCount", "0");
	}, []);


	// Timer countdown logic
	useEffect(() => {
		if (timeLeft > 0) {
			const timer = setInterval(() => {
				setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
			}, 1000);
			return () => clearInterval(timer);
		} else {
			// When time is up
			setTimeUp(true);
			setTimeout(() => {
				// router.push("/exam/result"); // Redirect to home page after 10 seconds
			}, 5000);
		}
	}, [timeLeft, router]);

	useEffect(() => {
		const remain = remainingTime();
		if (remain <= 0) {
			setTimeUp(true);
			setTimeout(() => {
				router.push("/exam/result");
			}, 5000);
		} else {
			setTimeLeft(remain);
		}
	}, [examData]);

	// Detect tab or window switching (anti-cheating)
	useEffect(() => {
		const warnUser = () => {
			// const newCount = tabSwitchCount + 1;
			setTabSwitchCount(prev => prev + 1);
			localStorage.setItem("tabSwitchCount", tabSwitchCount.toString());
			toastUtil.warning(`Bạn đã rời khỏi môi trường làm bài thi (${tabSwitchCount} ${tabSwitchCount === 1 ? "lần" : "lần"})`)
			setTimeout(() => setWarningMessage(""), 30000);
		};

		const handleVisibilityChange = () => {
			if (document.hidden) warnUser();
		};

		const handleBlur = () => {
			warnUser();
		};

		window.addEventListener("blur", handleBlur);
		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			window.removeEventListener("blur", handleBlur);
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, [tabSwitchCount]);

	// Track answer changes
	const handleAnswerChange = (answer: string) => {
		setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }));
	};

	// Select different question
	const handleQuestionSelect = (num: number) => {
		setCurrentQuestion(num);
	};

	// Submit all answers
	const handleSubmit = async () => {
		const formattedAnswers = {
			answers: Object.entries(answers)
				.filter(([_, value]) => value !== null) // Loại bỏ các câu chưa trả lời
				.map(([key, value]) => ({
					questionOrder: parseInt(key),
					selectedOption: value,
				})),
		};

		const response = await submitExam(examData?.examId as string, {answers: formattedAnswers.answers, screenOut: tabSwitchCount});

		console.log("Submitted answers:", response);
		alert("Answers submitted!");
	};


	const remainingTime = (): number => {
		if (!examData || !examData.startedAt || !examData.duration) {
			return 10;
		}

		const now = new Date();
		const startedAt = new Date(examData.startedAt); // Chuyển chuỗi thành Date
		const startedAtMs = startedAt.getTime(); // Lấy mili-giây
		const durationMs = examData.duration * 60 * 1000; // Chuyển duration từ phút sang mili-giây
		const endTimeMs = startedAtMs + durationMs; // Thời gian kết thúc (mili-giây)

		const diff = endTimeMs - now.getTime(); // Thời gian còn lại (mili-giây)

		console.log('diff:', diff); // Thay alert bằng console.log để tránh blocking
		return diff <= 0 ? 0 : Math.floor(diff / 1000); // Chuyển sang giây
	};

	// Handle modal confirmation
	const handleReady = async () => {
		setIsReady(true);
		const response = await startExam();
		setExamData(prev => response);
	};

	// Kiểm tra đã phải thời gian làm bài chưa
	const isTimeToDoTest = () => {
		const currentDate = Date.now(); // Lấy thời gian hiện tại
		const testStartDate = new Date("2025-04-09T00:00:00").getTime(); // Thời gian bắt đầu bài thi
		const testEndDate = new Date("2025-04-30T23:59:59").getTime(); // Thời gian kết thúc bài thi
		return currentDate >= testStartDate && currentDate <= testEndDate;
	};

	if (!isTimeToDoTest()){
		return (
			<AuthenticatedRoute>
				<TestUnavailable/>
			</AuthenticatedRoute>
		);
	}

	return (
		<AuthenticatedRoute>
			{!isReady ? (
				// Modal for readiness confirmation
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="bg-white p-6 rounded-lg shadow-lg text-center">
						<h2 className="text-xl font-semibold text-black mb-4">Are you ready to start the exam?</h2>
						<button
							onClick={handleReady}
							className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
						>
							Yes, I'm Ready
						</button>
					</div>
				</div>
			) : (
				<div className="relative min-h-screen bg-gray-50 flex items-center justify-center px-2 py-8">
					{/* Disable screen when time is up */}
					{timeUp && (
						<div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
							<div className="bg-white p-6 rounded-lg shadow-lg text-center">
								<h2 className="text-xl font-semibold mb-4 text-red-600">Đã kết thúc thời gian làm bài thi!</h2>
								<p className="text-gray-700"> Đang điều hướng về trang chủ...</p>
							</div>
						</div>
					)}

					<div className="w-full max-w-10xl bg-white shadow-sm rounded-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-200">
						{/* PDF Viewer Section */}
						<div className="w-full lg:w-15/16 p-4 bg-gray-50 mt-16">
							<iframe
								src={examData?.content}
								title="Exam"
								className="w-full h-[400px] md:h-[500px] lg:h-[90vh] rounded-xl border border-gray-300"
							></iframe>
						</div>

						{/* Answer Panel Section */}
						<div className="w-full lg:w-1/3 p-6 flex flex-col justify-between mt-16">
							{/* Refined Timer */}
							<div className="text-right mb-6">
								<div className="inline-flex items-center px-6 py-3 rounded-2xl bg-[#f2f2f2] text-gray-900 border border-gray-300 text-xl font-semibold tracking-wide shadow-inner">
									{String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
									{String(timeLeft % 60).padStart(2, "0")}
								</div>
							</div>

							{/* Tab switch warning */}
							{warningMessage && (
								<div className="mb-4 flex items-start gap-3 p-4 rounded-xl border border-red-200 bg-red-50 text-sm text-red-800 shadow-sm transition-opacity duration-300">
									<svg
										className="w-5 h-5 mt-0.5 shrink-0 text-red-500"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 9v2m0 4h.01m-.01-12a9 9 0 110 18 9 9 0 010-18z"
										/>
									</svg>
									<span>{warningMessage}</span>
								</div>
							)}

							{/* Question number buttons */}
							<div className="grid grid-cols-5 sm:grid-cols-6 gap-2 mb-6">
								{Array.from({ length: totalQuestions }, (_, i) => i + 1).map((num) => (
									<button
										key={num}
										onClick={() => handleQuestionSelect(num)}
										className={`py-1 rounded-lg text-sm font-medium transition border ${
											currentQuestion === num
												? "bg-blue-600 text-white border-blue-600"
												: answers[num]
													? "bg-green-100 text-green-800 border-green-200"
													: "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
										}`}
									>
										{num}
									</button>
								))}
							</div>

							{/* Question header */}
							<h2 className="text-lg font-semibold text-gray-800 mb-4">
								Question {currentQuestion} of {totalQuestions}
							</h2>

							{/* Multiple choice answer options */}
							<form className="space-y-3 mb-6">
								{["A", "B", "C", "D"].map((option) => (
									<label
										key={option}
										className="flex items-center space-x-3 text-gray-700 hover:text-blue-700"
									>
										<input
											type="radio"
											name={`question-${currentQuestion}`}
											value={option}
											checked={answers[currentQuestion] === option}
											onChange={() => handleAnswerChange(option)}
											className="accent-blue-600"
										/>
										<span className="text-base">{option}</span>
									</label>
								))}
							</form>

							{/* Submit answers button */}
							<button
								onClick={handleSubmit}
								className="mt-auto w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			)}
		</AuthenticatedRoute>
	);
};

export default ExamQuestion;