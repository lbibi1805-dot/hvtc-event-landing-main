import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  // const [scrolling, setScrolling] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 0;
  //     if (isScrolled !== scrolling) {
  //       setScrolling(isScrolled);
  //     }
  //   };

  //   document.addEventListener('scroll', handleScroll);

  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrolling]);

  return (
    <header
      className="fixed w-full z-30 top-0"
      style={{ backgroundColor: "#203355" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex grow justify-end flex-wrap items-center"
              aria-label="Cruip"
            >
              <Image
                src="/images/logo/logo.png"

                width={50}
                height={50}
                alt="Picture of the author"
                className="mr-2"
              />
              <h3 className="text-2xl sm:h3 text-white-100">RACE OF FINANCE</h3>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="#intro"
                  className="font-semibold text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  GIỚI THIỆU
                </Link>
              </li>
              <li>
                <Link
                  href="#timeline"
                  className="font-semibold text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  THỂ LỆ
                </Link>
              </li>{" "}
              <li>
                <Link
                  href="#sponsor"
                  className="font-semibold text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  ĐƠN VỊ ĐỒNG HÀNH
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="font-semibold text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out sm:mr-2"
                >
                  THÔNG TIN LIÊN HỆ
                </Link>
              </li>
              <li>
                <div data-aos="fade-up" data-aos-delay="400">
                  <a
                    className="btn text-white rounded-2xl inline-block animate-pulse-scale drop-shadow-lg font-bold"
                    href="https://quiz.yuanta.com.vn/cuoc-thi-race-of-finance-2024-vong-1/"
                    style={{
                      backgroundColor: "#2F6095",
                    }}
                  >
                    THAM GIA NGAY
                  </a>
                </div>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
