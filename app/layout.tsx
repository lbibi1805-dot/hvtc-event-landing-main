import './css/style.css';
import { Montserrat } from 'next/font/google';
import ClientWrapper from '@/components/ClientWrapper';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Race of Finance - CUỘC THI TÀI CHÍNH QUỐC GIA 2025'
};

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en" className={montserrat.className}>
      <body
          className={`antialiasing bg-blend-multiply bg-gray-500 bg-fixed text-gray-200 tracking-tight`}
          style={{ backgroundImage: "url('/images/2025/back-02.webp')" }}
      >
      <ClientWrapper>{children}</ClientWrapper>
      </body>
      </html>
  );
}