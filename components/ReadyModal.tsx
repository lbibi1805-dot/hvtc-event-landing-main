// components/ReadyModal.tsx
import { useRouter } from "next/navigation";

interface ReadyModalProps {
    onConfirm: () => void;
}

const ReadyModal: React.FC<ReadyModalProps> = ({ onConfirm }) => {
    const router = useRouter();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-xl shadow-lg max-w-lg w-full mx-4 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#2F6095] to-[#203355] text-white text-center py-4 px-4">
                    <h1 className="text-2xl font-bold uppercase">Race of Finance 2025</h1>
                    <p className="text-sm opacity-90">CLB Chứng Khoán Trẻ (YSC)</p>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 text-center mb-3">
                        Thông tin và quy chế thi bài thi Vòng 1
                    </h2>

                    {/* Exam Information */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded mb-4">
                        <h3 className="text-base font-medium text-blue-800 mb-1">
                            Thông tin bài thi
                        </h3>
                        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                            <li><strong>Hình thức:</strong> Trắc nghiệm</li>
                            <li><strong>Số câu:</strong> 25</li>
                            <li><strong>Thời gian:</strong> 30 phút</li>
                            <li><strong>Ghi chú:</strong> Sai không trừ điểm</li>
                        </ul>
                    </div>

                    {/* Exam Rules */}
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded mb-4">
                        <h3 className="text-base font-medium text-orange-800 mb-1">
                            Quy chế thi
                        </h3>
                        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                            <li>Chỉ được thi <strong>1 lần</strong>.</li>
                            <li>
                                <strong>Không gian lận</strong>. Vi phạm sẽ bị loại.
                            </li>
                            <li>
                                <strong>Hành vi gian lận:</strong>
                                <ul className="list-circle ml-4 space-y-1">
                                    <li>Tra cứu tài liệu.</li>
                                    <li>Chuyển tab quá 2 lần.</li>
                                    <li>Nhờ người khác thi hộ.</li>
                                    <li>Dùng nhiều tài khoản.</li>
                                    <li>Can thiệp kỹ thuật.</li>
                                    <li>
                                        Nộp bài dưới 6 phút (trừ lý do chính đáng được BTC xác nhận).
                                    </li>
                                    <li>Hành vi bất thường khác theo đánh giá BTC.</li>
                                </ul>
                            </li>
                            <li>BTC có quyền kiểm tra và xử lý vi phạm.</li>
                            <li>
                                Gặp sự cố, liên hệ{" "}
                                <a
                                    href="mailto:raceoffinance.ysc@gmail.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    raceoffinance.ysc@gmail.com
                                </a>.
                            </li>
                        </ul>
                    </div>

                    {/* Warning */}
                    <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded mb-4 text-center">
                        <p className="text-sm text-red-700 font-medium">
                            <strong>Lưu ý:</strong> Chỉ được thi 1 lần. Tuân thủ quy chế để tránh bị hủy kết quả.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-3">
                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
                        >
                            Bắt đầu
                        </button>
                        <button
                            onClick={() => router.push("/")}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 font-medium"
                        >
                            Quay lại
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-100 py-2 text-center text-xs text-gray-600 border-t">
                    <p>
                        Hỗ trợ:{" "}
                        <a
                            href="mailto:raceoffinance.ysc@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            raceoffinance.ysc@gmail.com
                        </a>
                    </p>
                    <p>© 2025 YSC. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default ReadyModal;