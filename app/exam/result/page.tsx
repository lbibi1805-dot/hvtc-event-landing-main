import AuthenticatedRoute from "@/components/AuthenticatedRoute";

const ExamResultPage = async () => {
	return (
		<AuthenticatedRoute>
			<div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
				<h1 className="text-3xl font-bold text-black">Exam Result</h1>
				<p className={"text-black"}>Your exam result will be displayed here.</p>
			</div>
		</AuthenticatedRoute>

	);
}

export default ExamResultPage;