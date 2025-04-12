// components/TestUnavailable.tsx
import React, { useState, useEffect } from "react";

const TestUnavailable: React.FC = () => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Tính thời gian còn lại đến ngày bắt đầu thi (19/4/2025 00:00:00)
    useEffect(() => {
        const calculateTimeRemaining = () => {
            const startDate = new Date("2025-04-09T00:00:00").getTime();
            const now = new Date().getTime();
            const timeLeft = startDate - now;

            if (timeLeft <= 0) {
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            setTimeRemaining({ days, hours, minutes, seconds });
        };

        calculateTimeRemaining(); // Tính ngay lần đầu
        const interval = setInterval(calculateTimeRemaining, 1000); // Cập nhật mỗi giây

        return () => clearInterval(interval); // Clear interval khi component unmount
    }, []);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-white px-4">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-10 text-center border border-gray-200">
                {/* Icon đồng hồ */}
                <div className="flex justify-center mb-6">
                    <svg
                        className="h-16 w-16 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                {/* Tiêu đề */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">THÔNG BÁO</h1>

                {/* Thông điệp */}
                <p className="text-xl text-gray-600 mb-4">
                    Thời gian thi là từ <span className="font-semibold">ngày 19/4/2025</span> đến{" "}
                    <span className="font-semibold">ngày 30/4/2025</span>.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                    Thời gian thi không hợp lệ, vui lòng quay lại sau.
                </p>

                {/* Countdown timer */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex space-x-4 text-gray-800">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-semibold">{timeRemaining.days}</span>
                            <span className="text-sm text-gray-500">Ngày</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-semibold">{timeRemaining.hours}</span>
                            <span className="text-sm text-gray-500">Giờ</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-semibold">{timeRemaining.minutes}</span>
                            <span className="text-sm text-gray-500">Phút</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-semibold">{timeRemaining.seconds}</span>
                            <span className="text-sm text-gray-500">Giây</span>
                        </div>
                    </div>
                </div>

                {/* Nút Trở về Trang Chủ */}
                <a
                    href="/"
                    className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                >
                    Trở về Trang Chủ
                </a>
            </div>
        </div>
    );
};

export default TestUnavailable;