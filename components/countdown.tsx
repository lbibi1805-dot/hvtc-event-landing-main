"use client";
import { useCallback, useEffect, useRef, useState } from "react";

const Countdown: React.FC = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const currentDate = new Date();
  const nextMonth = new Date(
    currentDate.getFullYear(),
    5, // Month (0-based, so 5 = June)
    26, // Day
    0, // Hour
    0, // Minute
    0 // Second
  ).getTime();

  const getTimeDifference = () => {
    const currentTime = new Date().getTime();
    const timeDifference = nextMonth - currentTime;
    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

    if (timeDifference < 0) {
      setCountDownTime({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval(1);
    } else {
      setCountDownTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    setInterval(() => {
      getTimeDifference();
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <section className="">
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-transparent">
        {/* Outer Border Container */}
        <div className="border-4 border-[#224366] rounded-3xl p-8 shadow-xl bg-transparent">
          {/* Countdown Header */}
          <div className="mx-auto text-center">
            <h2
              className="h2 mt-8 text-4xl md:text-5xl font-bold text-white"
              data-aos="fade-up"
              style={{ textShadow: "0 8px 16px rgba(0, 0, 255, 0.5)" }}
            >
              COUNTDOWN
            </h2>
          </div>

          {/* Countdown Clock */}
          <div className="flex justify-center items-center bg-no-repeat bg-center h-auto my-10">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="flex gap-6 sm:gap-8">
                {/* Days */}
                <div className="flex flex-col items-center">
                  <div className="h-[130px] w-[100px] sm:w-[120px] flex justify-center items-center text-4xl sm:text-5xl font-bold text-white border-4 border-[#224366] rounded-2xl shadow-lg bg-[#1E3A5F]">
                    {countDownTime?.days}
                  </div>
                  <span className="mt-2 text-lg sm:text-xl text-white font-semibold">
                    {countDownTime?.days === 1 ? "Day" : "Days"}
                  </span>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="h-[130px] w-[100px] sm:w-[120px] flex justify-center items-center text-4xl sm:text-5xl font-bold text-white border-4 border-[#224366] rounded-2xl shadow-lg bg-[#1E3A5F]">
                    {countDownTime?.hours}
                  </div>
                  <span className="mt-2 text-lg sm:text-xl text-white font-semibold">
                    {countDownTime?.hours === 1 ? "Hour" : "Hours"}
                  </span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="h-[130px] w-[100px] sm:w-[120px] flex justify-center items-center text-4xl sm:text-5xl font-bold text-white border-4 border-[#224366] rounded-2xl shadow-lg bg-[#1E3A5F]">
                    {countDownTime?.minutes}
                  </div>
                  <span className="mt-2 text-lg sm:text-xl text-white font-semibold">
                    {countDownTime?.minutes === 1 ? "Minute" : "Minutes"}
                  </span>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="h-[130px] w-[100px] sm:w-[120px] flex justify-center items-center text-4xl sm:text-5xl font-bold text-white border-4 border-[#224366] rounded-2xl shadow-lg bg-[#1E3A5F]">
                    {countDownTime?.seconds}
                  </div>
                  <span className="mt-2 text-lg sm:text-xl text-white font-semibold">
                    {countDownTime?.seconds === 1 ? "Second" : "Seconds"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div
            className="mt-8 flex justify-center items-center text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              className="btn text-white bg-[#2F6095] hover:bg-white hover:text-[#2F6095] px-6 py-3 rounded-2xl inline-block drop-shadow-lg font-bold text-xl transition duration-200"
              // href="https://quiz.yuanta.com.vn/cuoc-thi-race-of-finance-2024-vong-1/"
              href={"/sign-up"}
              target="_self" // Ensures it opens in the same tab
              rel="noopener noreferrer"
            >
              THAM GIA NGAY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
