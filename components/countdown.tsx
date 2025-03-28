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
  // const nextMonth = new Date(
  //   currentDate.getFullYear(),
  //   currentDate.getMonth() + 1,
  //   1
  // ).getTime();

  const nextMonth = new Date(
    currentDate.getFullYear(),
    5, 
    26, 
    0, 
    0, 
    0  
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
    <section className="mb-10 sm:mb-10">
      <div className="h-screen w-screen justify-center items-center ">
        <div className="mx-auto text-center pb-8 md:pb-8">
          <h2
            className="h2 mt-36"
            data-aos="fade-up"
            style={{ textShadow: "0 8px 16px rgba(0, 0, 255, 0.5)" }}
          >
            COUNTDOWN
          </h2>
        </div>

        <div className="md:flex sm:flex justify-center items-center bg-no-repeat bg-center h-2/3 sm:h-1/2 2xl:max-h-96 my-10">
          <div
            className="flex justify-center items-center bg-no-repeat bg-center h-full lg:w-1/2 sm:w-screen md:w-screen 2xl:w-2/5"
            style={{
              backgroundImage: "url(/images/Group_2.png)",
              backgroundSize: "contain", // or "contain" depending on your preference
              opacity: "1",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className="pb-8 "
              // style={{
              //   backgroundImage: "url(/images/border_blue.png)",
              //   opacity: "1",
              // }}
            >
              <div className="flex gap-14 sm:gap-4 flex-row px-4">
                <div className="flex flex-col sm:w-32 w-18">
                  <div className="h-20 sm:h-20">
                    <div
                      className="h-[130px] flex justify-center sm:text-5xl text-5xl sm:border-4 border-[#224366] rounded-2xl !text-[#ffffff] font-bold"
                      style={{
                        textShadow: "0 8px 16px rgba(255, 215, 0, 0.5)",
                      }}
                    >
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
                    <span className="text-sm sm:text-2xl text-center text-[#ffffff] font-bold ">
                      {countDownTime?.days == 1 ? "Day" : "Days"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:w-32 w-16">
                  <div className="h-20 sm:h-20">
                    <div
                      className="h-[130px] flex justify-center sm:text-5xl text-5xl !text-[#ffffff] font-bold sm:border-4 border-[#224366] rounded-2xl"
                      style={{
                        textShadow: "0 8px 16px rgba(255, 215, 0, 0.5)",
                      }}
                    >
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
                    <span className="text-lg sm:text-2xl text-center text-[#ffffff] font-bold">
                      {countDownTime?.hours == 1 ? "Hour" : "Hours"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:w-32 w-16">
                  <div className="h-20 sm:h-20">
                    <div
                      className="h-[130px] flex justify-center sm:text-5xl text-5xl !text-[#ffffff] font-bold sm:border-4 border-[#224366] rounded-2xl"
                      style={{
                        textShadow: "0 8px 16px rgba(255, 215, 0, 0.5)",
                      }}
                    >
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
                    <span className="text-lg sm:text-2xl text-center text-[#ffffff] font-bold">
                      {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:w-32 w-16">
                  <div className="h-20 sm:h-20">
                    <div
                      className="h-[130px] flex justify-center overflow-hidden sm:text-5xl text-5xl text-[#ffffff] font-bold sm:border-4 border-[#224366] rounded-2xl"
                      style={{
                        textShadow: "0 8px 16px rgba(255, 215, 0, 0.5)",
                      }}
                    >
                      <div ref={secondTimer}>{countDownTime?.seconds}</div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <span className="text-lg sm:text-2xl text-center text-[#ffffff] font-bold">
                      {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero content */}
            {/**Hết */}
          </div>
        </div>

        <div
          className="justify-center items-center text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            className="btn text-white bg-[#2F6095] hover:bg-white hover:text-[#2F6095] w-1/2 mb-4 sm:w-auto sm:mb-0 rounded-2xl inline-block animate-pulse-scale drop-shadow-lg font-bold text-xl"
            href="https://quiz.yuanta.com.vn/cuoc-thi-race-of-finance-2024-vong-1/"
          >
            THAM GIA NGAY
          </a>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
