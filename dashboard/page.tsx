import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
	// @ts-ignore
	const { isAuthenticated, user, logout } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/sign-in");
		}
	}, [isAuthenticated, router]);

	if (!isAuthenticated) {
		return null;
	}

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold">Dashboard</h1>
			<p>Xin chào, {user?.name}!</p>
			<p>Email: {user?.email}</p>
			<p>Trường: {user?.university}</p>
			<p>Ngành: {user?.major}</p>
			<p>Vai trò: {user?.role}</p>
			<button
				onClick={logout}
				className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
			>
				Đăng xuất
			</button>
		</div>
	);
}