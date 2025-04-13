import React from "react";
import Carousel from "./Carrousel";

const slides = [
  // ảnh tập thể
  "/images/2025/chung kết ROF 24/_DSC8006.jpg",
  "/images/2025/chung kết ROF 24/_DSC7494.jpg",
  "/images/2025/chung kết ROF 24/_HA_5906.JPG",
  // ảnh cúp
  "/images/2025/chung kết ROF 24/_HA_5753.JPG",

  // ...
  "/images/2025/chung kết ROF 24/_DSC7962.JPG",
  "/images/2025/chung kết ROF 24/_DSC7962.JPG",
  "/images/2025/chung kết ROF 24/_DSC7977.JPG",
  "/images/2025/chung kết ROF 24/_DSC7904.jpg",
  "/images/2025/chung kết ROF 24/_DSC7887.jpg",
  "/images/2025/chung kết ROF 24/_DSC7916.jpg",
  "/images/2025/chung kết ROF 24/_DSC7944.jpg",
  "/images/2025/chung kết ROF 24/_DSC7986.jpg",

  //..khác
  "/images/2025/chung kết ROF 24/_DSC7534.jpg",
  "/images/2025/chung kết ROF 24/_DSC7548.jpg",
  "/images/2025/chung kết ROF 24/_DSC7553.jpg",
  "/images/2025/chung kết ROF 24/_DSC7557.jpg",
  "/images/2025/chung kết ROF 24/_DSC7615.jpg",
  "/images/2025/chung kết ROF 24/_DSC7635.jpg",
  "/images/2025/chung kết ROF 24/_DSC7710.jpg",
  "/images/2025/chung kết ROF 24/_HA_5858.JPG",
  "/images/2025/chung kết ROF 24/_HA_5878.JPG",
  "/images/2025/chung kết ROF 24/_HA_5890.JPG",
  "/images/2025/chung kết ROF 24/_HA_5900.JPG",
  "/images/2025/chung kết ROF 24/_HA_5912.JPG",
  "/images/2025/chung kết ROF 24/_HA_5972.JPG",

];

function ImageList() {
  return (
    <section className="py-16">
      <div className="flex justify-center items-center mt-36">
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <div className="pb-10 md:pb-12 mb-1.5">
            <h2
              className="text-2xl md:text-4xl font-extrabold color:white bg-clip-text"
            >
              MỘT SỐ HÌNH ẢNH CUỘC THI RACE OF FINANCE 2024
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
