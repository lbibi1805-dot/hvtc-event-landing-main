"use client";

import { AuthContextInterface } from "@/interfaces/AuthContextInterface";
import React, { createContext, useContext, useEffect, useState } from "react";

// @ts-ignore
const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState<AuthContextInterface["user"]>(null);
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			// Gọi API /api/v1/user/me để lấy thông tin người dùng
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
						localStorage.removeItem("token");
						setIsAuthenticated(false);
						setUser(null);
					}
				})
				.catch(() => {
					localStorage.removeItem("token");
					setIsAuthenticated(false);
					setUser(null);
				});
		}
	}, []);

	const login = (token: string) => {
		localStorage.setItem("token", token);
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
				}
			})
			.catch(() => {
				localStorage.removeItem("token");
				setIsAuthenticated(false);
				setUser(null);
			});
	};

	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, user, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	// @ts-ignore
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
