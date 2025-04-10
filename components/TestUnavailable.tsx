const TestUnavailable: React.FC = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-10 text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                    Lưu ý!
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Bài thi hiện không có sẵn tại thời điểm này. Vui lòng quay trở lại sau.
                </p>
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