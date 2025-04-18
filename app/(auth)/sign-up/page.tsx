import SignUpForm from "@/app/(auth)/sign-up/SignUpForm";

export const metadata = {
    title: 'Sign Up - Open PRO',
    description: 'Page description',
};

import ProtectedRoute from "@/components/ProtectedRoute";

export default function SignUp() {
    return (
        <ProtectedRoute>
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br px-4 overflow-y-hidden">
                <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center py-20">

                    {/* Page header */}
                    <div className="mb-5 text-center drop-shadow-md">
                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Cuộc thi Race of Finance 2025
                        </h1>
                        <p className="text-white text-md">
                            Câu lạc bộ chứng khoán trẻ Học Viện Tài Chính
                        </p>
                    </div>
                    <SignUpForm />
                </div>
            </section>
        </ProtectedRoute>
    );
}
