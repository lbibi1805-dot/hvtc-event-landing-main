// components/TestUnavailable.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ClockIcon } from "lucide-react";

const TestClose: React.FC = () => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Tính thời gian còn lại đến ngày bắt đầu thi (19/4/2025 00:00:00)
    useEffect(() => {
        const calculateTimeRemaining = () => {
            const startDate = new Date(
                process.env.NEXT_PUBLIC_START_ROUND_1 || "2025-04-19T00:00:00"
            ).getTime();
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
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-10 text-center border border-gray-200">
                {/* Icon đồng hồ */}
                <div className="flex justify-center mb-6">
                    <ClockIcon className="h-16 w-16 text-red-500" />
                </div>

                {/* Tiêu đề */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">THÔNG BÁO</h1>

                {/* Thông điệp */}
                <p className="text-xl text-gray-600 mb-4">
                    Hệ thống hiện đang tạm thời không khả dụng do quá tải hoặc đang trong giai đoạn bảo trì.
                </p>
                {/*<p className="text-lg text-gray-600 mb-8">*/}
                {/*    Vui lòng quay lại sau. Kỳ thi sẽ bắt đầu vào{" "}*/}
                {/*    <span className="font-semibold">*/}
                {/*        {new Date(*/}
                {/*            process.env.NEXT_PUBLIC_START_ROUND_1 || "2025-04-19T00:00:00"*/}
                {/*        ).toLocaleString("vi-VN")}*/}
                {/*    </span>*/}
                {/*    .Chúng tôi rất tiếc vì sự bất tiện này.*/}
                {/*</p>*/}

                {/* Countdown timer */}

                {/*{timeRemaining.days > 0 || timeRemaining.hours > 0 || timeRemaining.minutes > 0 || timeRemaining.seconds > 0 ? (*/}
                {/*    <div className="flex justify-center mb-8">*/}
                {/*        <div className="inline-flex space-x-4 text-gray-800">*/}
                {/*            <div className="text-center">*/}
                {/*                <span className="block text-3xl font-bold">{timeRemaining.days}</span>*/}
                {/*                <span className="text-sm">Ngày</span>*/}
                {/*            </div>*/}
                {/*            <div className="text-center">*/}
                {/*                <span className="block text-3xl font-bold">{timeRemaining.hours}</span>*/}
                {/*                <span className="text-sm">Giờ</span>*/}
                {/*            </div>*/}
                {/*            <div className="text-center">*/}
                {/*                <span className="block text-3xl font-bold">{timeRemaining.minutes}</span>*/}
                {/*                <span className="text-sm">Phút</span>*/}
                {/*            </div>*/}
                {/*            <div className="text-center">*/}
                {/*                <span className="block text-3xl font-bold">{timeRemaining.seconds}</span>*/}
                {/*                <span className="text-sm">Giây</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*) : (*/}
                {/*    <p className="text-lg text-gray-600 mb-8">*/}
                {/*        Thời gian thi đã bắt đầu, nhưng hệ thống vẫn đang quá tải. Vui lòng thử lại sau.*/}
                {/*    </p>*/}
                {/*)}*/}

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

export default TestClose;