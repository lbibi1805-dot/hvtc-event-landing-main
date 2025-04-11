"use client";
import { useCallback, useEffect, useState } from "react";
import CountdownBox from "./CountdownBox";
import CountdownHeader from "./CountdownHeader";
import CountdownButton from "./CountdownButton";

const Countdown: React.FC = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // SET THE COUNTDOWN DATE
  const currentDate = new Date();
  const nextMonth = new Date(
    currentDate.getFullYear(),
    3, // Month (0-based, so 3 = April)
    21, // Day
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

  // Format time to add leading zero
  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-transparent px-4">
      {/* Countdown Header */}
      <CountdownHeader/>
      
      {/* Outer Container */}
      <div className="rounded-2xl p-8 sm:p-12 shadow-xl bg-transparent border-4 border-[#224366] w-full max-w-4xl md:-mb-7">

        {/* Countdown Clock */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <CountdownBox
            value={formatTime(countDownTime?.days)}
            label={countDownTime?.days === 1 ? "Day" : "Days"}
          />
          <CountdownBox
            value={formatTime(countDownTime?.hours)}
            label={countDownTime?.hours === 1 ? "Hour" : "Hours"}
          />
          <CountdownBox
            value={formatTime(countDownTime?.minutes)}
            label={countDownTime?.minutes === 1 ? "Minute" : "Minutes"}
          />
          <CountdownBox
            value={formatTime(countDownTime?.seconds)}
            label={countDownTime?.seconds === 1 ? "Second" : "Seconds"}
          />
        </div>

        {/* Call-to-Action Button */}
        <CountdownButton />
      </div>
    </section>
  );
};

export default Countdown;
