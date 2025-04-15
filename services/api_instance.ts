// services/api_instance.ts
import axios, { AxiosInstance } from "axios";

const API_INSTANCE: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001",
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

API_INSTANCE.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) config.headers.Authorization = `Bearer ${token}`;
		// console.log("🔑 Token from localStorage:", localStorage.getItem("token"));
		return config;
	},
	(error) => Promise.reject(error)
);

API_INSTANCE.interceptors.response.use(
	(response) => response,
	(error) => {
		// if (error.response?.status === 401) {
		// 	localStorage.removeItem("token");
		// 	window.location.href = "/sign-in";
		// }
		return Promise.reject(error.response?.data?.message || error.message);
	}
);

export default API_INSTANCE;