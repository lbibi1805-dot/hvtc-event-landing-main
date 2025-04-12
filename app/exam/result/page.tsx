"use client";

import { useRouter } from "next/navigation"; // Import useRouter for routing
import AuthenticatedRoute from "@/components/AuthenticatedRoute";
import { useAuth } from "@/context/AuthContext";

const ExamResultPage = () => {
  	// Lấy các trạng thái từ AuthContext
	const { isTakenExam } = useAuth();
  	const router = useRouter(); // Initialize router

	// Hàm xử lý khi nhấn nút "Tiếp tục"
	const handleContinue = () => {
		router.push("/"); // Chuyển hướng về trang chủ
	};

	// Hiển thị giao diện
	return (
		<AuthenticatedRoute>
		<div className="w-full h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-md text-center">
			<h1 className="text-3xl font-bold text-black mb-4">
				Bạn đã hoàn thành bài thi!
			</h1>
			<p className="text-lg text-gray-700 mb-6">
				Vui lòng đợi thông tin mới nhất từ ban tổ chức.
			</p>
			<button
				onClick={handleContinue}
				className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
			>
				Quay về Trang chủ
			</button>
			</div>
		</div>
		</AuthenticatedRoute>
	);
};

export default ExamResultPage;