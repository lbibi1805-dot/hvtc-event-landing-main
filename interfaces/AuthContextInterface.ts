export interface AuthContextInterface {
	isAuthenticated: boolean;
	user: { id: string; name: string; email: string; university: string; major: string; role: string } | null;
	logout: () => void;
	login: (token: void) => void;
}