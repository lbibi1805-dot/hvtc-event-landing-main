"use client";
import AuthenticatedRoute from "@/components/AuthenticatedRoute";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";


const ExamResultPage = () => {
	// Extract `isTakenExam` and `user` from the authentication context
	const { isTakenExam, user } = useAuth();
	// State to store the exam result, loading status, and error messages
	const [examResult, setExamResult] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Fetch the exam result when the component mounts
	useEffect(() => {
		const fetchExamResult = async () => {
			try {
				setLoading(true); // Set loading state to true while fetching data
				const response = await fetch(`/api/exam/result?userId=${user?._id}`); // Fetch exam result using the user's ID
				if (!response.ok) {
				throw new Error("Failed to fetch exam results."); // Handle HTTP errors
				}
				const data = await response.json(); // Parse the JSON response
				setExamResult(data); // Store the exam result in state
			} catch (err: any) {
				setError(err.message || "An error occurred while fetching results."); // Handle errors
			} finally {
				setLoading(false); // Set loading state to false after fetching
			}
		};
	
		// Only fetch the exam result if the user has taken the exam
		if (isTakenExam) {
			fetchExamResult();
		}
	  }, [isTakenExam, user]); // Dependencies: re-run effect if `isTakenExam` or `user` changes
	
	
	return (
		// <AuthenticatedRoute>
		<div>
			{isTakenExam ? (
				<div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
					<h1 className="text-3xl font-bold text-black">Exam Result 1</h1>
					<p className={"text-black"}> Your exam result will be displayed here.</p>
				</div>
			) : (
				<div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
					<h1 className="text-3xl font-bold text-black"> Exam Result 2 </h1>
					<p className={"text-black"}> Your exam result will be displayed here. </p>
				</div>
			)}
		</div>
		// </AuthenticatedRoute>
	);
}

export default ExamResultPage;