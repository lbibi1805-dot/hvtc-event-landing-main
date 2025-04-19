// app/exam/questions/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthenticatedRoute from "@/components/AuthenticatedRoute";
import ReadyModal from "@/components/ReadyModal";
import {
	startExam,
	submitExam,
	getScreenOut,
	saveScreenOut,
} from "@/services/exam.service";
import { SubmissionResponse } from "@/api/exam.api";
import { useAuth } from "@/context/AuthContext";
import toastUtil from "@/lib/ToastUtil";
import TestUnavailable from "@/components/TestUnavailable";
import { AlertDialogUtils } from "@/lib/AlertDialog";
import { QuestionCard } from "@/app/exam/questions/QuestionCard";
import TestClose from "@/components/TestClose";

const ExamQuestion = () => {
	const [totalQuestions, setTotalQuestions] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [answers, setAnswers] = useState<Record<number, string | null>>({});
	const [timeLeft, setTimeLeft] = useState(999);
	const [tabSwitchCount, setTabSwitchCount] = useState<number>(0);
	const [warningMessage, setWarningMessage] = useState("");
	const [isReady, setIsReady] = useState(false);
	const [timeUp, setTimeUp] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [isLeaving, setIsLeaving] = useState(false);
	const router = useRouter();
	const [examData, setExamData] = useState<SubmissionResponse | null>(null);
	const { isTakenExam, updateExamStatus } = useAuth();

	const isTimeToDoTest = () => {
		const currentDate = Date.now();
		const testStartDate = new Date(
			`${process.env.NEXT_PUBLIC_START_ROUND_1}`
		).getTime();
		const testEndDate = new Date(
			`${process.env.NEXT_PUBLIC_END_ROUND_1}`
		).getTime();
		return currentDate >= testStartDate && currentDate <= testEndDate;
	};

	const isClosing = true;
	if (isClosing) {
		return (
			<AuthenticatedRoute>
				<TestClose />
			</AuthenticatedRoute>
		);
	}

	if (!isTimeToDoTest()) {
		return (
			<AuthenticatedRoute>
				<TestUnavailable />
			</AuthenticatedRoute>
		);
	}

	// Fetch initial screenOut count from database
	useEffect(() => {
		const fetchScreenOut = async () => {
			const response = await getScreenOut();
			setTabSwitchCount(response.screenOut || 0);
		};

		if (isReady && examData?.examId) {
			fetchScreenOut();
		}
	}, [isReady, examData?.examId]);

	// Timer countdown logic, warnings, and auto-submit
	useEffect(() => {
		if (!isReady || hasSubmitted) return;

		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				const newTime = prev > 0 ? prev - 1 : 0;

				if (newTime <= 20 && newTime > 5) {
					setWarningMessage(
						"Thời gian làm bài thi còn lại dưới 20 giây! Vui lòng nộp bài thi hoặc hệ thống sẽ tự động nộp bài thi khi còn 3 giây"
					);
				} else if (newTime <= 5 && newTime > 3) {
					setWarningMessage(
						"Thời gian làm bài thi còn lại dưới 5 giây! Vui lòng nộp bài thi hoặc hệ thống sẽ tự động nộp bài thi khi còn 3 giây"
					);
				} else if (newTime <= 3 && newTime > 0) {
					setWarningMessage("Thời gian làm bài thi đã hết! Đang tự động nộp bài...");
				}

				if (newTime <= 3 && newTime > 0 && !hasSubmitted) {
					handleSubmit();
				}

				if (newTime <= 0) {
					setTimeUp(true);
					setWarningMessage("Thời gian làm bài thi đã hết!");
					toastUtil.info("Đang điều hướng về trang chủ...");
					setTimeout(async () => {
						await updateExamStatus();
						window.location.href = "/";
					}, 3000);
				}

				return newTime;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft, isReady, hasSubmitted, router]);

	useEffect(() => {
		const remain = remainingTime();
		setTimeLeft(remain);
		if (examData?.maxQuestions) {
			setTotalQuestions(examData.maxQuestions);
		}
	}, [examData]);

	// Detect tab or window switching (anti-cheating)
	useEffect(() => {
		if (!isReady) return;

		const warnUser = async () => {
			try {
				const response = await saveScreenOut();
				setTabSwitchCount((prev) => {
					const newCount = prev + 1;
					toastUtil.warning(
						`Bạn đã rời khỏi môi trường làm bài thi (${newCount} ${newCount === 1 ? "lần" : "lần"})`, "", { duration: 5000, position: "top-center" }
					);
					setWarningMessage(
						`Bạn đã rời khỏi môi trường làm bài thi (${newCount} ${newCount === 1 ? "lần" : "lần"})`
					);
					setTimeout(() => setWarningMessage(""), 5000);
					return newCount;
				});
			} catch (error) {
				toastUtil.error("Lỗi khi ghi nhận hành vi rời môi trường thi!");
			}
		};

		const handleVisibilityChange = () => {
			if (document.hidden) {
				if (!isLeaving) {
					setIsLeaving(true);
					warnUser();
				}
			} else {
				setIsLeaving(false);
			}
		};

		const handleBlur = () => {
			if (!isLeaving) {
				setIsLeaving(true);
				warnUser();
			}
		};

		const handleFocus = () => {
			setIsLeaving(false);
		};

		window.addEventListener("blur", handleBlur);
		window.addEventListener("focus", handleFocus);
		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			window.removeEventListener("blur", handleBlur);
			window.removeEventListener("focus", handleFocus);
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, [tabSwitchCount, isReady, isLeaving, examData?.examId]);

	// Track answer changes
	const handleAnswerChange = (answer: string | null) => {
		setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }));
	};

	// Select different question
	const handleQuestionSelect = (num: number) => {
		setCurrentQuestion(num);
	};

	// Submit exam
	const handleSubmit = async () => {
		if (hasSubmitted) return;

		if (timeLeft > 5) {
			const confirm = await AlertDialogUtils.warning({
				title: "Xác nhận nộp bài thi",
				description:
					"Vui lòng kiểm tra lại các câu trả lời trước khi nộp bài thi. Sau khi nộp, bạn sẽ không thể thay đổi câu trả lời.",
				cancelText: "Hủy bỏ",
				confirmText: "Xác nhận",
			});

			if (!confirm) return;
		}

		const formattedAnswers = {
			answers: Object.entries(answers)
				.filter(([_, value]) => value !== null)
				.map(([key, value]) => ({
					questionOrder: parseInt(key),
					selectedOption: value,
				})),
		};

		const response = await submitExam(examData?.examId as string, {
			answers: formattedAnswers.answers,
			screenOut: tabSwitchCount,
		});

		if (response.status !== 200) {
			toastUtil.error(
				"Nộp bài thi thất bại! Đã hết giờ làm bài hoặc thông tin không hợp lệ. Vui lòng liên hệ ban tổ chức"
			);
		} else {
			setHasSubmitted(true);
			toastUtil.success("Nộp bài thi thành công!", "", { duration: 500, position: "top-center" });
			setTimeout(async () => {
				toastUtil.info("Đang điều hướng về trang chủ...", "", { duration: 500, position: "top-center" });
				await updateExamStatus();
				window.location.href = "/";
			}, 3000);
		}
	};

	const remainingTime = (): number => {
		if (!examData || !examData?.startedAt || !examData?.duration) {
			return 10;
		}

		const now = new Date();
		const startedAt = new Date(examData.startedAt);
		const startedAtMs = startedAt.getTime();
		const durationMs = examData.duration * 60 * 1000;
		const endTimeMs = startedAtMs + durationMs;
		const diff = endTimeMs - now.getTime();

		return diff <= 0 ? 0 : Math.floor(diff / 1000);
	};

	// Handle modal confirmation
	const handleReady = async () => {
		setIsReady(true);
		const response = await startExam();
		setExamData(response);
	};

	return (
		<AuthenticatedRoute>
			{!isReady ? (
				<ReadyModal onConfirm={handleReady} />
			) : (
				<div className="relative min-h-screen bg-gray-50 flex items-center justify-center px-2 py-8">
					{/* Disable screen when time is up */}
					{timeUp && isTakenExam && (
						<div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
							<div className="bg-white p-6 rounded-lg shadow-lg text-center">
								<h2 className="text-xl font-semibold mb-4 text-red-600">
									Đã kết thúc thời gian làm bài thi!
								</h2>
								<p className="text-gray-700">Đang điều hướng về trang chủ...</p>
							</div>
						</div>
					)}

					<div className="w-full max-w-5xl bg-white shadow-sm rounded-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-200">
						{/* Question Section */}
						<div className="w-full lg:w-2/3 p-6">
							{examData?.questions && examData.questions.length > 0 ? (
								<QuestionCard
									question={examData.questions[currentQuestion - 1].questionContent}
									answers={[
										{
											label: "A",
											content: examData.questions[currentQuestion - 1].options[0].optionA,
										},
										{
											label: "B",
											content: examData.questions[currentQuestion - 1].options[0].optionB,
										},
										{
											label: "C",
											content: examData.questions[currentQuestion - 1].options[0].optionC,
										},
										{
											label: "D",
											content: examData.questions[currentQuestion - 1].options[0].optionD,
										},
									]}
									selectedAnswer={answers[currentQuestion]}
									onSelectAnswer={handleAnswerChange}
								/>
							) : (
								<p>Đang tải câu hỏi...</p>
							)}
						</div>

						{/* Answer Panel Section */}
						<div className="w-full lg:w-1/3 p-6 flex flex-col justify-between">
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
								{Array.from({ length: totalQuestions }, (_, i) => i + 1).map(
									(num) => (
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
									)
								)}
							</div>

							{/* Submit answers button */}
							<button
								onClick={handleSubmit}
								className="mt-auto w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
								disabled={hasSubmitted}
							>
								Nộp bài
							</button>
						</div>
					</div>

					{/* Contact Button */}
					<div className="fixed bottom-4 right-4 z-40">
						<button
							onClick={() =>
								window.location.href = "mailto:raceoffinance.ysc@gmail.com?subject=Báo%20cáo%20sự%20cố%20trong%20bài%20thi"
							}
							className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition text-sm font-medium flex items-center gap-2"
						>
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
								/>
							</svg>
							Báo cáo sự cố: raceoffinance.ysc@gmail.com
						</button>
					</div>
				</div>
			)}
		</AuthenticatedRoute>
	);
};

export default ExamQuestion;