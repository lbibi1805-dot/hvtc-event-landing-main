"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useEffect, useState } from "react";

const ExamQuestion = () => {
	const totalQuestions = 25;
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [answers, setAnswers] = useState<Record<number, string | null>>({});
	const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
	const [tabSwitchCount, setTabSwitchCount] = useState<number>(0);
	const [warningMessage, setWarningMessage] = useState("");

	// Reset tab switch count at start of exam
	useEffect(() => {
		setTabSwitchCount(0);
		localStorage.setItem("tabSwitchCount", "0");
	}, []);

	// Timer countdown logic
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	// Detect tab or window switching (anti-cheating)
	useEffect(() => {
		const warnUser = () => {
			const newCount = tabSwitchCount + 1;
			setTabSwitchCount(newCount);
			localStorage.setItem("tabSwitchCount", newCount.toString());
			setWarningMessage(
				`⚠️ You left the exam environment! (${newCount} ${newCount === 1 ? "time" : "times"})`
			);
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
	const handleSubmit = () => {
		console.log("Submitted answers:", answers);
		alert("Answers submitted!");
	};

	return (
		<ProtectedRoute>
			<div className="min-h-screen bg-gray-50 flex items-center justify-center px-2 py-8">
				<div className="w-full max-w-10xl bg-white shadow-sm rounded-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-200">

					{/* PDF Viewer Section */}
					<div className="w-full lg:w-15/16 p-4 bg-gray-50 mt-16" >
						<iframe
							src="/project.pdf"
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
		</ProtectedRoute>
	);
};

export default ExamQuestion;
