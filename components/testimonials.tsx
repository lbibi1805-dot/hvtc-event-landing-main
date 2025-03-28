import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="h2 mt-32" data-aos="fade-up" style={{ textShadow: "0 8px 16px rgba(0, 0, 255, 0.5)" }}>
          CƠ CẤU GIẢI THƯỞNG
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-14">
        <div className="py-10 md:py-10 px-4 sm:px-6 rounded-3xl bg-gradient-to-r from-[#213c58] to-[#3b82f680]">
          {/* Section header */}
          
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10">
            <p className="text-xl text-gray-100 font-bold">
              TỔNG GIÁ TRỊ GIẢI THƯỞNG CUỘC THI
            </p>
            <div>
                <div className="relative inline-flex flex-col mt-4 border-2 border-yellow-600 text-xl bg-[#213c58] text-yellow-600 font-extrabold rounded-md p-1">
                  <span>XXX,XXX,XXX</span>
                </div>
              </div>
          </div>


         <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">
            <div
              className="flex flex-col h-full p-6 rounded-3xl"
              data-aos="fade-up"
              data-aos-delay="400"
              
            >
              <div>
              <div className="relative flex justify-center items-center flex-col mb-4 border text-xl text-[#304bb9] font-extrabold bg-white rounded-2xl p-1">
                  <span className="p-2">QUÁN QUÂN</span>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col h-full p-6"              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
              <div className="relative flex justify-center items-center flex-col mb-4 border text-xl text-[#304bb9] font-extrabold bg-white rounded-2xl p-1">
                  <span className="p-2">Á QUÂN</span>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col h-full p-6 rounded-3xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
              <div className="relative flex justify-center items-center flex-col mb-4 border text-xl text-[#304bb9] font-extrabold bg-white rounded-2xl p-1">
                  <span className="p-2">QUÝ QUÂN 1</span>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col h-full p-6 rounded-3xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="">
                <div className="relative flex justify-center items-center flex-col mb-4 border text-xl text-[#304bb9] font-extrabold bg-white rounded-2xl p-1">
                  <span className="p-2">QUÝ QUÂN 2</span>
                </div>
              </div>
            </div>
          </div> 


          {/* <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">
            <div
              className="flex flex-col h-full p-6 rounded-3xl bg-[#263881] box"
              data-aos="fade-up"
              data-aos-delay="400"
              
            >
              <div>
                <div className="relative inline-flex flex-col mb-4 border text-xl bg-white text-[#304bb9] font-extrabold rounded-md p-1">
                  <span>QUÁN QUÂN</span>
                </div>
              </div>
              <div>
                <div className="relative inline-flex flex-col pb-1 mb-4 text-xl font-bold text-yellow-600 border-b">
                  <span>50,000,000 VND</span>
                </div>
              </div>
              <div className="text-gray-100 font-medium border-gray-700">
                  <ul className="disc">
                    <li className="mb-2">
                      HIỆN KIM : 10,000,000 VND
                    </li>
                    <li className="mb-1">
                      - Một suất thực tập tại công ty cổ phần chứng khoán SSI
                    </li>
                    <li className="mb-1">
                      - Một suất thực tập tại công ty cổ phần chứng khoán SSI
                    </li>
                  </ul>
              </div>
            </div>

            <div
              className="flex flex-col h-full p-6 rounded-3xl bg-[#263881] box"              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4 border text-xl bg-white text-[#304bb9] font-extrabold rounded-md p-1">
                  <span>QUÁN QUÂN</span>
                </div>
              </div>
              <div>
                <div className="relative inline-flex flex-col pb-1 mb-4 text-xl font-bold text-yellow-600 border-b">
                  <span>50,000,000 VND</span>
                </div>
              </div>
              <div className="text-gray-100 font-medium border-gray-700">
                  <ul className="disc">
                    <li className="mb-2">
                      HIỆN KIM : 10,000,000 VND
                    </li>
                    <li className="mb-1">
                      - Một suất thực tập tại công ty cổ phần chứng khoán SSI
                    </li>
                    <li className="mb-1">
                      - Một suất thực tập tại công ty cổ phần chứng khoán SSI
                    </li>
                  </ul>
              </div>
            </div>

            <div
              className="flex flex-col h-full p-6 rounded-3xl bg-[#263881] box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4 border text-xl bg-white text-[#304bb9] font-extrabold rounded-md p-1">
                  <span>QUÁN QUÂN</span>
                </div>
              </div>
              <div>
                <div className="relative inline-flex flex-col pb-1 mb-4 text-xl font-bold text-yellow-600 border-b">
                  <span>50,000,000 VND</span>
                </div>
              </div>
              <div className="text-gray-100 font-medium border-gray-700">
                  <ul className="disc">
                    <li className="mb-2">
                      HIỆN KIM : 10,000,000 VND
                    </li>
                    <li className="mb-1">
                      - Một suất thực tập tại công ty cổ phần chứng khoán SSI
                    </li>
                    <li className="mb-1">
                      - Một suất thực tập tại công ty cổ phần chứng khoán SSI
                    </li>
                  </ul>
              </div>
            </div>

            <div
              className="flex flex-col h-full p-6 rounded-3xl bg-[#263881] box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4 border text-xl text-[#304bb9] font-extrabold bg-white rounded-md p-1">
                  <span>QUÁN QUÂN</span>
                </div>
              </div>
              <div>
                <div className="relative inline-flex flex-col pb-1 mb-4 text-xl font-bold text-yellow-600 border-b">
                  <span>50,000,000 VND</span>
                </div>
              </div>
              <div className="text-gray-100 font-medium border-gray-700">
                  <ul className="disc">
                    <li className="mb-2">
                      HIỆN KIM : 10,000,000 VND
                    </li>
                    <li className="mb-1">
                      - Một suất thực tập tại công ty cổ phần chứng khoán SSI
                    </li>
                    <li className="mb-1">
                      - Một suất thực tập tại công ty cổ phần chứng khoán SSI
                    </li>
                  </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
