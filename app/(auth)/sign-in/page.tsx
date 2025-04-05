import SignInForm from "@/app/(auth)/sign-in/signInForm";

export const metadata = {
    title: 'Sign In - Open PRO',
    description: 'Page description',
}

import Link from 'next/link'
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SignIn() {
    return (
        <ProtectedRoute>
            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20 flex flex-col items-center justify-center">

                        {/* Page header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h1 className="h1">Welcome back. We exist to make entrepreneurship easier.</h1>
                        </div>
                        <SignInForm/>

                    </div>
                </div>
            </section>
        </ProtectedRoute>

    )
}
