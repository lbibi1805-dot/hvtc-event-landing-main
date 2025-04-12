// app/exam/questions/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthenticatedRoute from "@/components/AuthenticatedRoute";
import ReadyModal from "@/components/ReadyModal";
import { startExam, submitExam } from "@/services/exam.service";
import { SubmissionResponse } from "@/api/exam.api";
import { useAuth } from "@/context/AuthContext";
import toastUtil from "@/lib/ToastUtil";
import TestUnavailable from "@/components/TestUnavailable";
import { AlertDialogUtils } from "@/lib/AlertDialog";
import { QuestionCard } from "@/app/exam/questions/QuestionCard";

const ExamQuestion = () => {
	const [totalQuestions, setTotalQuestions] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(1); // Bắt đầu từ câu 1
	const [answers, setAnswers] = useState<Record<number, string | null>>({});
	const [timeLeft, setTimeLeft] = useState(999); // 30 minutes in seconds
	const [tabSwitchCount, setTabSwitchCount] = useState<number>(() => {
		// Đọc giá trị từ localStorage khi component mount
		const storedCount = localStorage.getItem("tabSwitchCount");
		return storedCount ? parseInt(storedCount, 10) : 0;
	});
	const [warningMessage, setWarningMessage] = useState("");
	const [isReady, setIsReady] = useState(false); // Modal state
	const [timeUp, setTimeUp] = useState(false); // Time-up state
	const [hasSubmitted, setHasSubmitted] = useState(false); // Trạng thái đã submit
	const [isLeaving, setIsLeaving] = useState(false); // Trạng thái để debounce sự kiện rời khỏi trang
	const router = useRouter();
	const [examData, setExamData] = useState<SubmissionResponse | null>(null);
	const { isTakenExam, updateExamStatus } = useAuth();

	const isTimeToDoTest = () => {
		const currentDate = Date.now();
		const testStartDate = new Date("2025-04-09T00:00:00").getTime();
		const testEndDate = new Date("2025-04-30T23:59:59").getTime();
		return currentDate >= testStartDate && currentDate <= testEndDate;
	};

	if (!isTimeToDoTest()) {
		return (
			<AuthenticatedRoute>
				<TestUnavailable />
			</AuthenticatedRoute>
		);
	}

	// Lưu tabSwitchCount vào localStorage mỗi khi nó thay đổi
	useEffect(() => {
		localStorage.setItem("tabSwitchCount", tabSwitchCount.toString());
	}, [tabSwitchCount]);

	// Timer countdown logic, warnings, and auto-submit
	useEffect(() => {
		if (!isReady || hasSubmitted) return; // Không chạy timer nếu chưa sẵn sàng hoặc đã submit

		const timer = setInterval(() => {
			setTimeLeft(prev => {
				const newTime = prev > 0 ? prev - 1 : 0;

				// Hiển thị thông báo dựa trên thời gian còn lại
				if (newTime <= 20 && newTime > 5) {
					setWarningMessage(
						"Thời gian làm bài thi còn lại dưới 20 giây! Vui lòng nộp bài thi hoặc hệ thống sẽ tự động nộp bài thi khi còn 3 giây"
					);
				} else if (newTime <= 5 && newTime > 3) {
					setWarningMessage(
						"Thời gian làm bài thi còn lại dưới 5 giây! Vui lòng nộp bài thi hoặc hệ thống sẽ tự động nộp bài thi khi còn 3 giây"
					);
				} else if (newTime <= 3 && newTime > 0) {
					setWarningMessage(
						"Thời gian làm bài thi đã hết! Đang tự động nộp bài..."
					);
				}

				// Tự động submit khi thời gian còn 3 giây
				if (newTime <= 3 && newTime > 0 && !hasSubmitted) {
					handleSubmit();
				}

				// Khi thời gian hết
				if (newTime <= 0) {
					setTimeUp(true);
					setWarningMessage("Thời gian làm bài thi đã hết!");
					toastUtil.info("Đang điều hướng về trang chủ...");
					setTimeout(async () => {
						await updateExamStatus();
						window.location.href = "/"; // Hard reload
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
		// Cập nhật totalQuestions từ examData
		if (examData?.maxQuestions) {
			setTotalQuestions(examData.maxQuestions);
		}
	}, [examData]);

	// Detect tab or window switching (anti-cheating)
	useEffect(() => {
		if (!isReady) return;

		const warnUser = () => {
			setTabSwitchCount(prev => prev + 1);
			toastUtil.warning(
				`Bạn đã rời khỏi môi trường làm bài thi (${tabSwitchCount + 1} ${tabSwitchCount + 1 === 1 ? "lần" : "lần"})`
			);
			setWarningMessage(`Bạn đã rời khỏi môi trường làm bài thi (${tabSwitchCount + 1} ${tabSwitchCount + 1 === 1 ? "lần" : "lần"})`);

			setTimeout(() => {
				setWarningMessage("")
			}, 3000); // Đợi 3 giây trước khi hiển thị thông báo
		};

		const handleVisibilityChange = () => {
			if (document.hidden) {
				// Người dùng rời khỏi tab
				if (!isLeaving) {
					setIsLeaving(true);
					warnUser();
				}
			} else {
				// Người dùng quay lại tab
				setIsLeaving(false);
			}
		};

		const handleBlur = () => {
			// Người dùng rời khỏi cửa sổ
			if (!isLeaving) {
				setIsLeaving(true);
				warnUser();
			}
		};

		const handleFocus = () => {
			// Người dùng quay lại cửa sổ
			setIsLeaving(false);
		};

		window.addEventListener("blur", handleBlur);
		window.addEventListener("focus", handleFocus);
		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			window.removeEventListener("blur", handleBlur);
			window.removeEventListener("focus", handleFocus);
			document.removeEventListener(
				"visibilitychange",
				handleVisibilityChange
			);
		};
	}, [tabSwitchCount, isReady, isLeaving]);

	// Track answer changes
	const handleAnswerChange = (answer: string | null) => {
		setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
	};

	// Select different question
	const handleQuestionSelect = (num: number) => {
		setCurrentQuestion(num);
	};

	// Submit all answers
	const handleSubmit = async () => {
		if (hasSubmitted) return; // Ngăn submit nhiều lần

		// Hiển thị xác nhận nếu thời gian còn lại > 5 giây
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

		setHasSubmitted(true); // Đánh dấu đã submit

		const formattedAnswers = {
			answers: Object.entries(answers)
				.filter(([_, value]) => value !== null) // Loại bỏ các câu chưa trả lời
				.map(([key, value]) => ({
					questionOrder: parseInt(key),
					selectedOption: value, // "A", "B", "C", "D"
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
			toastUtil.success("Nộp bài thi thành công!");
			setTimeout(async () => {
				toastUtil.info("Đang điều hướng về trang chủ...");
				await updateExamStatus();
				window.location.href = "/"; // Hard reload về trang chủ
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

		console.log("diff:", diff);
		return diff <= 0 ? 0 : Math.floor(diff / 1000);
	};

	// Handle modal confirmation
	const handleReady = async () => {
		setIsReady(true);
		const response = await startExam();
		console.log(response);
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
								<p className="text-gray-700">
									Đang điều hướng về trang chủ...
								</p>
							</div>
						</div>
					)}

					<div className="w-full max-w-5xl bg-white shadow-sm rounded-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-200">
						{/* Question Section */}
						<div className="w-full lg:w-2/3 p-6">
							{examData?.questions &&
							examData.questions.length > 0 ? (
								<QuestionCard
									question={
										examData.questions[currentQuestion - 1]
											.questionContent
									}
									answers={[
										{
											label: "A",
											content:
												examData.questions[
													currentQuestion - 1
												].options[0].optionA,
										},
										{
											label: "B",
											content:
												examData.questions[
													currentQuestion - 1
												].options[0].optionB,
										},
										{
											label: "C",
											content:
												examData.questions[
													currentQuestion - 1
												].options[0].optionC,
										},
										{
											label: "D",
											content:
												examData.questions[
													currentQuestion - 1
												].options[0].optionD,
										},
									]}
									selectedAnswer={answers[currentQuestion]} // Truyền đáp án đã chọn cho câu hỏi hiện tại
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
									{String(Math.floor(timeLeft / 60)).padStart(
										2,
										"0"
									)}
									:{String(timeLeft % 60).padStart(2, "0")}
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
								{Array.from(
									{ length: totalQuestions },
									(_, i) => i + 1
								).map(num => (
									<button
										key={num}
										onClick={() =>
											handleQuestionSelect(num)
										}
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

							{/* Submit answers button */}
							<button
								onClick={handleSubmit}
								className="mt-auto w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
								disabled={hasSubmitted} // Vô hiệu hóa nút sau khi submit
							>
								Nộp bài
							</button>
						</div>
					</div>
				</div>
			)}
		</AuthenticatedRoute>
	);
};

export default ExamQuestion;
