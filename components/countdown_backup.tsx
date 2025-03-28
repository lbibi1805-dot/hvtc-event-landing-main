"use client";
import { useCallback, useEffect, useRef, useState } from "react";

const Countdown: React.FC = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const secondTimer = useRef<HTMLDivElement>(null);
  const currentDate = new Date();
  const nextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1
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
      if (secondTimer.current) {
        secondTimer.current.className = "relative top-5";
      }
      setCountDownTime({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval(1);
    } else {
      if (secondTimer.current) {
        secondTimer.current.className = "";
        secondTimer.current.className = "animate-timer";
      }
      setCountDownTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate() + 50,
      customDate.getHours() + 18,
      customDate.getMinutes() + 25,
      customDate.getSeconds() + 8
    );

    setInterval(() => {
      getTimeDifference();
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <section className="mb-0 sm:mb-0">
      <div className="h-screen w-screen justify-center items-center">
        <div className="max-w-3xl mx-auto text-center pb-8 md:pb-8">
          <h2
            className="h2 mt-36"
            data-aos="fade-up"
            style={{ textShadow: "0 8px 16px rgba(0, 0, 255, 0.5)" }}
          >
            CHỈ CÒN VÀI NGÀY
          </h2>
        </div>
        <div className="sm:mt-32 flex justify-center items-center">
          <div
            className="bg-center bg-local bg-no-repeat"
            style={{
              backgroundImage: "url(/images/border_blue.png)",
              opacity: "1",
            }}
          >
            <div className="flex gap-12 sm:gap-16 flex-row sm:h-48 h-40 pt-2 sm:pt-4 sm:m-16 m-16 ">
              <div className="flex flex-col bg-[#000000] sm:w-32 w-18">
                <div className="h-20 sm:h-20 bg-[#000000]">
                  <div className="h-[100px] flex justify-center bg-[#000000] sm:text-5xl text-5xl !text-[#A6ADBB] font-bold">
                    <div
                      className={
                        countDownTime?.days >= 0 &&
                        countDownTime?.hours == 23 &&
                        countDownTime?.minutes == 59 &&
                        countDownTime?.seconds == 59
                          ? "animate-timer"
                          : "relative top-5"
                      }
                    >
                      {countDownTime?.days}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
                    {countDownTime?.days == 1 ? "Day" : "Days"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col bg-[#000000] sm:w-32 w-16">
                <div className="h-20 sm:h-20 bg-[#000000]">
                  <div className="h-[100px] flex justify-center bg-[#000000] sm:text-5xl text-5xl !text-[#A6ADBB] font-bold">
                    <div
                      className={
                        countDownTime?.hours >= 0 &&
                        countDownTime?.minutes == 59 &&
                        countDownTime?.seconds == 59
                          ? "animate-timer"
                          : "relative top-5"
                      }
                    >
                      {countDownTime?.hours}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
                    {countDownTime?.hours == 1 ? "Hour" : "Hours"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col bg-[#000000] sm:w-32 w-16">
                <div className="h-20 sm:h-20 bg-[#000000]">
                  <div className="h-[100px] flex justify-center bg-[#000000] sm:text-5xl text-5xl !text-[#A6ADBB] font-bold">
                    <div
                      className={
                        countDownTime?.minutes >= 0 &&
                        countDownTime?.seconds == 59
                          ? "animate-timer"
                          : "relative top-5"
                      }
                    >
                      {countDownTime?.minutes}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
                    {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col bg-[#000000] sm:w-32 w-16">
                <div className="h-20 sm:h-20 bg-[#000000]">
                  <div className="h-[100px] flex justify-center bg-[#000000] overflow-hidden sm:text-5xl text-5xl text-[#A6ADBB] font-bold">
                    <div ref={secondTimer}>{countDownTime?.seconds}</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
                    {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Hero content */}
          {/**Hết */}
        </div>
        <div
          className="flex justify-center items-center text-center mt-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            className="btn text-white bg-[#2F6095] hover:bg-white hover:text-[#2F6095] w-1/2 mb-4 sm:w-auto sm:mb-0 rounded-2xl inline-block animate-pulse-scale drop-shadow-lg font-bold text-xl"
            href="#0"
          >
            ĐĂNG KÝ
          </a>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
