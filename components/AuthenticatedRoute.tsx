'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

interface ProtectedRouteProps {
	children: React.ReactNode;
}

export default function AuthenticatedRoute({ children }: ProtectedRouteProps) {
	const { isAuthenticated, isLoading, isTakenExam, updateExamStatus} = useAuth();
	const router = useRouter();

	const updateExam = async () => {
		await updateExamStatus();
	}
	useEffect(() => {
		updateExam;
		if (!isLoading && !isAuthenticated && !isTakenExam) {
			router.push('/'); // Redirect to homepage if NOT authenticated
		}

		if(!isLoading && isAuthenticated && isTakenExam) {
			router.push('/exam/result'); // Redirect to exam page if authenticated and has taken the exam
		}
	}, [isAuthenticated, isTakenExam, isLoading, router]);

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="w-6 h-6 border-4 border-t-4 border-white border-opacity-50 border-t-[#203355] rounded-full animate-spin"></div>
			</div>
		);
	}



	if (!isAuthenticated) {
		return null; // Render nothing while redirecting
	}


	return <div className={"mt-10"}>{children}</div>;
}