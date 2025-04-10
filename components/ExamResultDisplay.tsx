import React from "react";

interface ExamResult {
    candidateId: string;
    examId: string;
    totalScore: number;
    correctAnswers: number;
    wrongAnswers: number;
    notAnswered: number;
    timeSpent: number; // Time spent in seconds
    startedAt: string;
    submittedAt: string;
}

interface ExamResultDisplayProps {
    examResult: ExamResult | null;
}

const ExamResultDisplay: React.FC<ExamResultDisplayProps> = ({ examResult }) => {
    if (!examResult) {
        return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-black mb-4">No Results Found</h1>
            <p className="text-lg text-gray-600">
            It seems like you haven't taken the test yet.
            </p>
        </div>
        );
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    };

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-300 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
            Exam Results
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
            {/* User Information */}
            <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Candidate Information
            </h2>
            <p className="text-lg text-gray-600">
                <strong>Candidate ID:</strong> {examResult.candidateId}
            </p>
            <p className="text-lg text-gray-600">
                <strong>Exam ID:</strong> {examResult.examId}
            </p>
            <p className="text-lg text-gray-600">
                <strong>Started At:</strong>{" "}
                {new Date(examResult.startedAt).toLocaleString()}
            </p>
            <p className="text-lg text-gray-600">
                <strong>Submitted At:</strong>{" "}
                {new Date(examResult.submittedAt).toLocaleString()}
            </p>
            </div>

            {/* Exam Results */}
            <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Exam Performance
            </h2>
            <p className="text-lg text-gray-600">
                <strong>Total Score:</strong> {examResult.totalScore}
            </p>
            <p className="text-lg text-gray-600">
                <strong>Correct Answers:</strong> {examResult.correctAnswers}
            </p>
            <p className="text-lg text-gray-600">
                <strong>Wrong Answers:</strong> {examResult.wrongAnswers}
            </p>
            <p className="text-lg text-gray-600">
                <strong>Not Answered:</strong> {examResult.notAnswered}
            </p>
            <p className="text-lg text-gray-600">
                <strong>Time Spent:</strong> {formatTime(examResult.timeSpent)}
            </p>
            </div>

            {/* Call-to-Action */}
            <div className="text-center mt-6">
            <a
                href="/"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
                Go Back to Dashboard
            </a>
            </div>
        </div>
        </div>
    );
};

export default ExamResultDisplay;