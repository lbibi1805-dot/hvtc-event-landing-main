import TimelineRound from "./TimelineRound";
import { timelineData } from "./timelineData";

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="max-w-3xl mx-auto text-center pb-10 md:pb-12 -mb-12 mt-80">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text"
          style={{ textShadow: "0 8px 16px rgba(0, 0, 255, 0.5)", color: "white" }}
        >
          TIMELINE
        </h2>
      </div>
      <div className="max-w-6xl mx-auto bg-[#224366] border-sky-600 bg-opacity-50 py-4 rounded-3xl">
        <div className="px-4 sm:px-6" data-aos="fade-up">
          {timelineData.map((round, index) => (
            <TimelineRound
              key={index}
              title={round.title}
              name={round.name}
              date={round.date}
              description={round.description}
              details={round.details}
            />
          ))}
        </div>
        <div className="ml-50 text-xl mr-50 text-center mt-10">
          <p>
          Thí sinh nào nhận được nhiều phiếu bầu chọn cao hơn từ phía Ban giám khảo sẽ dành được ngôi vị<div className="font-extrabold text-2xl">“QUÁN QUÂN CUỘC THI RACE OF FINANCE 2025”</div>
          </p>
        </div>
        {/* External Link */}
        <div className="text-center mt-8">
          <a
            href="https://drive.google.com/file/d/1B1LIGX89OvngjZ70Sr3W3BHAy-lywySz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 mb-15"
          >
             Booklet Cuộc Thi
          </a>
        </div>
      </div>
    </section>
  );
}