// components/QuestionCard.tsx
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Answer {
	label: string; // A, B, C, D
	content: string; // Nội dung đáp án
}

interface QuestionCardProps {
	question: string; // Nội dung câu hỏi
	answers: Answer[]; // Danh sách 4 đáp án
	selectedAnswer: string | null; // Đáp án đã chọn cho câu hỏi này
	onSelectAnswer: (answer: string | null) => void; // Callback khi chọn đáp án
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
															  question,
															  answers,
															  selectedAnswer,
															  onSelectAnswer,
														  }) => {
	const handleAnswerClick = (label: string) => {
		if (selectedAnswer === label) {
			// Nếu bấm lại đáp án đã chọn, clear lựa chọn
			onSelectAnswer(null);
		} else {
			// Chọn đáp án mới
			onSelectAnswer(label);
		}
	};

	return (
		<Card className="w-full max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
			<CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
				<CardTitle className="text-xl font-bold">{question}</CardTitle>
				<CardDescription className="text-blue-100">
					Chọn một đáp án bên dưới
				</CardDescription>
			</CardHeader>
			<CardContent className="p-6">
				<div className="space-y-3">
					{answers.map((answer) => (
						<button
							key={answer.label}
							onClick={() => handleAnswerClick(answer.label)}
							className={cn(
								"w-full flex items-center gap-3 p-4 rounded-lg border border-gray-200",
								"hover:bg-gray-50 hover:border-blue-300 transition-all duration-200",
								selectedAnswer === answer.label
									? "bg-green-100 border-green-300"
									: "bg-white",
								"focus:outline-none focus:ring-2 focus:ring-blue-500"
							)}
						>
              <span
				  className={cn(
					  "w-8 h-8 flex items-center justify-center rounded-full font-semibold",
					  selectedAnswer === answer.label
						  ? "bg-green-500 text-white"
						  : "bg-gray-200 text-gray-800"
				  )}
			  >
                {answer.label}
              </span>
							<span className="text-gray-800 text-left flex-1">
                {answer.content}
              </span>
						</button>
					))}
				</div>
			</CardContent>
		</Card>
	);
};