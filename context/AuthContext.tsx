'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the user type (adjust based on your API response)
interface User {
	id: string;
	name: string;
	email: string;
	[key: string]: any; // For additional fields
}

// Define the context interface
interface AuthContextInterface {
	isAuthenticated: boolean;
	user: User | null;
	token: string | null;
	login: (token: string) => void;
	logout: () => void;
	isLoading: boolean; // Add loading state
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true); // Add loading state

	// Restore state on mount
	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		if (storedToken) {
			setToken(storedToken); // Set token immediately
			fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/me`, {
				headers: {
					Authorization: `Bearer ${storedToken}`,
				},
			})
				.then(res => res.json())
				.then(data => {
					if (data.success) {
						setIsAuthenticated(true);
						setUser(data.data);
					} else {
						localStorage.removeItem('token');
						setIsAuthenticated(false);
						setUser(null);
						setToken(null);
					}
				})
				.catch(() => {
					localStorage.removeItem('token');
					setIsAuthenticated(false);
					setUser(null);
					setToken(null);
				})
				.finally(() => {
					setIsLoading(false); // Set loading to false after API call
				});
		} else {
			setIsLoading(false); // No token, stop loading
		}
	}, []);

	const login = (token: string) => {
		setIsLoading(true);
		localStorage.setItem('token', token);
		setToken(token);
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/me`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then(res => res.json())
			.then(data => {
				if (data.success) {
					setIsAuthenticated(true);
					setUser(data.data);
				} else {
					localStorage.removeItem('token');
					setIsAuthenticated(false);
					setUser(null);
					setToken(null);
				}
			})
			.catch(() => {
				localStorage.removeItem('token');
				setIsAuthenticated(false);
				setUser(null);
				setToken(null);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
		setIsAuthenticated(false);
		setToken(null);
		setIsLoading(false);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, user, token, login, logout, isLoading }}>
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