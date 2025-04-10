'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { fetchUserProfile } from '@/services/auth.service';
import { fetchSubmissionStatus } from '@/services/exam.service';

// Define the user type (adjust based on your API response)
interface User {
	_id: string;
	name: string;
	email: string;
	[key: string]: any; // For additional fields
}

// Define the context interface
interface AuthContextInterface {
	isAuthenticated: boolean;
	isVoted: boolean;
	isTakenExam: boolean;
	user: User | null;
	token: string | null;
	login: (token: string) => Promise<void>;
	logout: () => void;
	isLoading: boolean;
	isTimeToDoTest: boolean; //  ĐẾN GIỜ LÀM TEST CHƯA
	isTestClosed: boolean; //    HẾT THỜI HẠN LÀM TEST CHƯA
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isVoted, setIsVoted] = useState(false);
	const [isTakenExam, setIsTakenExam] = useState(false);
	const [isTimeToDoTest, setIsTimeToDoTest] = useState(false);
	const [isTestClosed, setIsTestClosed] = useState(false); // STATE MỚI
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	// Restore state on mount
	useEffect(() => {
		const restoreSession = async () => {
			const storedToken = localStorage.getItem('token');
			if (storedToken) {
				setToken(storedToken);
				try {
					// Lấy thông tin user
					const userData = await fetchUserProfile();
					setIsAuthenticated(true);
					setUser(userData);

					// Lấy trạng thái thi
					const examTaken = await fetchSubmissionStatus(userData._id);
					setIsTakenExam(examTaken);

					// SET MẤY GIỜ MỞ TEST
					const currentDate = new Date();
					const testStartDate = new Date('2025-04-07T00:00:00'); 	// THỜI GIAN MỞ TEST
					const testEndDate = new Date('2025-04-08T23:59:59'); 	// THỜI GIAN ĐÓNG TEST
					setIsTimeToDoTest(currentDate >= testStartDate && currentDate <= testEndDate);
					setIsTestClosed(currentDate > testEndDate); // TEST ĐÓNG NẾU THỜI GIAN HIỆN TẠI VƯỢT TẠI THỜI GIAN ĐÓNG TEST
					console.log('Exam taken status:', examTaken);
				} catch (error) {
					localStorage.removeItem('token');
					setIsAuthenticated(false);
					setUser(null);
					setToken(null);
					setIsTakenExam(false);
					setIsTimeToDoTest(false);
					setIsTestClosed(false);
				}
			}
			setIsLoading(false);
		};

		restoreSession();
	}, []);

	const login = async (token: string) => {
		setIsLoading(true);
		localStorage.setItem('token', token);
		setToken(token);
		try {
			// Lấy thông tin user
			const userData = await fetchUserProfile();
			setIsAuthenticated(true);
			setUser(userData);

			// Lấy trạng thái thi
			console.log(userData._id);
			const examTaken = await fetchSubmissionStatus(userData._id);
			setIsTakenExam(examTaken);

			// Determine if it's time to do the test
			const currentDate = new Date();
			const testStartDate = new Date('2025-04-15T00:00:00'); // TEST START DATE 	   ||| FORMAT: (yyyy-mm-ddThh:mm:ss)
			const testEndDate = new Date('2025-04-20T23:59:59');   // TEST CLOSING DATE    ||| FORMAT: (yyyy-mm-ddThh:mm:ss)
			setIsTimeToDoTest(currentDate >= testStartDate && currentDate <= testEndDate);
			setIsTestClosed(currentDate > testEndDate);  		   // TEST ĐÓNG NẾU THỜI GIAN HIỆN TẠI VƯỢT TẠI THỜI GIAN ĐÓNG TEST

			console.log('Exam taken status login:', examTaken);
		} catch (error) {
			localStorage.removeItem('token');
			setIsAuthenticated(false);
			setUser(null);
			setToken(null);
			setIsTakenExam(false);
			setIsTimeToDoTest(false);
			setIsTestClosed(false);

			console.error('Error fetching user data:', error);
		} finally {
			setIsLoading(false);
		}
	};

	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
		setIsAuthenticated(false);
		setToken(null);
		setIsTakenExam(false);
		setIsTimeToDoTest(false);
		setIsTestClosed(false);
		setIsLoading(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				isVoted,
				isTakenExam,
				isTimeToDoTest,
				isTestClosed, // Provide the new property
				user,
				token,
				login,
				logout,
				isLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};