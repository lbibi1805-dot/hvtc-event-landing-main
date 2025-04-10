"use client";

import { useRouter } from "next/navigation"; // Import useRouter for routing
import AuthenticatedRoute from "@/components/AuthenticatedRoute";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const ExamResultPage = () => {
	// Lấy các trạng thái từ AuthContext
	const { isTakenExam } = useAuth();
	const router = useRouter(); // Initialize router

	// Kiểm tra trạng thái và chuyển hướng nếu cần
	useEffect(() => {
		if (!isTakenExam) {
			router.push("/question-exams");
		}
	}, [isTakenExam, router]);

	// Nếu người dùng đã làm bài, hiển thị thông báo
	return (
		<AuthenticatedRoute>
		<div className="w-full h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-md text-center">
			<h1 className="text-3xl font-bold text-black mb-4">
				You have already taken the test
			</h1>
			<p className="text-lg text-gray-700">
				Ịt pẹ làm bài rồi còn vào lại làm chóa gì nữa.
			</p>
			</div>
		</div>
		</AuthenticatedRoute>
	);
};

export default ExamResultPage;