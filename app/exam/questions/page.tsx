import ProtectedRoute from "@/components/ProtectedRoute";
import SignInForm from "@/app/(auth)/sign-in/signInForm";

const ExamQuestion = () => {
	return (
		<ProtectedRoute>
			<div className="text-black bg-white min-h-screen flex items-center justify-center">
				<p>This page is for Take Exam</p>
			</div>
		</ProtectedRoute>

	)
};

export default ExamQuestion;
