import React from "react";
import Carousel from "./Carrousel";

const slides = [
  "/images/2025/chung kết ROF 24/_DSC7494.jpg",
  "/images/2025/chung kết ROF 24/_HA_5906.JPG",
  "/images/2025/chung kết ROF 24/_HA_5753.JPG",


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
          <div className="-mt-8 ml-4 mr-4">
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
