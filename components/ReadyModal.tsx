import { useRouter } from "next/navigation";

interface ReadyModalProps {
    onConfirm: () => void;
}

const ReadyModal: React.FC<ReadyModalProps> = ({ onConfirm }) => {
    const router = useRouter();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full mx-4">
                <h2 className="text-xl font-bold text-black mb-4">
                    Bạn đã sẵn sàng bắt đầu bài thi?
                </h2>
                <p className="text-gray-700 mb-4 text-left ml-4 mr-4">
                    - Bài thi gồm <strong>25 câu hỏi </strong> trong vòng <strong>30 phút</strong>, sai không bị trừ
                    điểm.
                    <br/>
                    - <strong>Hình thức</strong>: Trắc Nghiệm.
                </p>
                <p className="text-red-600 font-medium mb-6">
                    <strong>Bạn chỉ được làm bài dự thi đúng 1 lần.</strong>
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Bắt đầu làm bài
                    </button>
                    <button
                        onClick={() => router.push("/")}
                        className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                    > 
                        Quay lại trang chủ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReadyModal;