import React from "react";
import Carousel from "./Carrousel";

const slides = [
  "/images/history/2.jpeg",
  "/images/history/3.jpeg",
  "/images/history/4.jpeg",
  "/images/history/6.jpeg",
  "/images/history/7.jpeg",
  "/images/history/8.jpeg",
  "/images/history/9.jpeg",
  "/images/history/rof 1.jpeg",
];

function ImageList() {
  return (
    <section className="py-16">
      <div className="flex justify-center items-center mt-36">
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <div className="pb-10 md:pb-12 mb-1.5">
            <h2
              className="text-2xl md:text-4xl font-extrabold color:white bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-lg"
              style={{ textShadow: "0 8px 16px rgba(0, 0, 255, 0.5)" }}
            >
              MỘT SỐ HÌNH ẢNH CUỘC THI RACE OF FINANCE 2023
            </h2>
          </div>

          {/* Carousel */}
          <div className="-mt-8">
            <Carousel autoSlide={false}>
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg shadow-lg"
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageList;
