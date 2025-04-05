'use client';

import { AuthProvider } from '@/context/AuthContext';
import Header from '@/components/ui/header';
import { ReactNode } from 'react';
import { Toaster } from "sonner";

export default function ClientWrapper({ children }: { children: ReactNode }) {
	return (
		<AuthProvider>
			<div className="flex flex-col min-h-screen overflow-hidden">
				<Header />
				{children}
				<Toaster
					position="bottom-right"
					theme="light"
					richColors={true}
					closeButton={false}
					duration={3000}
				/>
			</div>
		</AuthProvider>
	);
}