"use client"
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS của AOS

export default function Zigzag() {
  useEffect(() => {
    AOS.init({
      duration: 5000, // Thời gian hiệu ứng (ms)
      once: false, // Chỉ chạy hiệu ứng một lần
    });
  }, []);

  return (
    <section id="intro" className="items-center align-middle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mt-1.5 md:mt-7 border-t border-gray-800 md:mb-0">
          {/* Header */}
          <div className="mx-auto text-center" data-aos="fade-up">
            <h2 className="h2 text-4xl md:text-5xl font-bold text-white mb-10">
              GIỚI THIỆU
            </h2>
          </div>

          {/* Content Wrapper */}
          <div className="sm:flex gap-20">
            {/* Logo Section */}
            <div
              className="relative my-10 shrink-0"
              data-aos="fade-up" // Hiệu ứng fade từ phải
            >
              <Image
                src="/images/logo mark-01.png"
                width={350}
                height={150}
                alt="Logo"
              />
              <div id="animation1" className="absolute top-32">
                <div id="stars" className="flex">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="particles">
                      <div className="rotate">
                        <div className="angle">
                          <div className="size">
                            <div className="position">
                              <div className="pulse">
                                <div className="particle"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div
              className="flex flex-col h-full p-6 bg-[#2F6095] bg-opacity-70 rounded-3xl"
              data-aos="fade-up" // Hiệu ứng fade từ trái
            >
              <p className="text-xl text-white mb-4">
                <b>CLB Chứng khoán trẻ Học viện Tài chính (YSC)</b> trực thuộc
                Đoàn Thanh niên Học viện Tài chính, do Liên chi Đoàn khoa Ngân
                hàng - Bảo hiểm quản lý các hoạt động của CLB, dưới sự bảo trợ
                chuyên môn của Bộ môn Đầu tư Tài chính được thành lập vào năm
                2007. Ra đời với sứ mệnh kết nối các bạn sinh viên yêu thích
                đầu tư tài chính - chứng khoán, tạo môi trường trao đổi học hỏi
                nhiều kiến thức bổ ích cho các bạn sinh viên trong và ngoài Học
                viện.
              </p>
              <p className="text-xl text-white mb-4">
                <b>Race of Finance</b> là một cuộc thi về lĩnh vực Tài chính -
                Chứng khoán dành cho sinh viên trên toàn quốc, được tổ chức bởi
                CLB Chứng khoán trẻ Học viện Tài chính. Cuộc thi Race of Finance
                qua 3 mùa thi thành công rực rỡ với những con số ấn tượng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
