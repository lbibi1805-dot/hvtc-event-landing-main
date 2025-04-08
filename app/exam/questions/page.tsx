import ProtectedRoute from "@/components/ProtectedRoute";
import SignInForm from "@/app/(auth)/sign-in/signInForm";

const questions = [
	{
	  id: 1,
	  question: "Don't forget to wash your ______ before meals.",
	  options: ["A. feet", "B. hands", "C. teeth", "D. legs"],
	},
	{
	  id: 2,
	  question: "It's ______ to brush your teeth every day.",
	  options: [
		"A. very important",
		"B. not important",
		"C. unimportant",
		"D. less important",
	],
	},
	// Add more questions as needed
];
  
const ExamQuestion = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState(Array(questions.length).fill(null));
	const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  
	// Handle answer selection
	const handleAnswer = (index: number) => {
	  const updatedAnswers = [...answers];
	  updatedAnswers[currentQuestion] = index;
	  setAnswers(updatedAnswers);
	};
  
	// Handle question navigation
	const handleQuestionNavigation = (index: number) => {
	  setCurrentQuestion(index);
	};
  
	// Format time for the timer
	const formatTime = (seconds: number) => {
	  const minutes = Math.floor(seconds / 60);
	  const secs = seconds % 60;
	  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
	};
	return (
		<ProtectedRoute>
			<div className="text-black bg-white min-h-screen flex items-center justify-center">
			<div className="flex flex-col md:flex-row h-screen bg-white">
        {/* PDF Viewer */}
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Exam PDF</h1>
          <iframe
            src="/pdfs/exam1.pdf" // Replace with the actual path to your PDF
            className="w-full h-[80vh] border rounded-lg shadow-lg"
            title="Exam PDF"
          ></iframe>
        </div>

        {/* Answer Sheet */}
        <div className="w-full md:w-1/3 p-6 bg-white shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Time Left</h2>
            <span className="text-lg font-semibold text-red-500">
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-6">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleQuestionNavigation(index)}
                className={`p-2 rounded-full border ${
                  answers[index] !== null
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Question {currentQuestion + 1}:{" "}
              {questions[currentQuestion].question}
            </h3>
            <ul className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-2 rounded-lg border ${
                      answers[currentQuestion] === index
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => alert("Exam Submitted!")}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mt-6"
          >
            Submit
          </button>
        </div>
      </div>
			</div>
		</ProtectedRoute>

	)
};

export default ExamQuestion;
