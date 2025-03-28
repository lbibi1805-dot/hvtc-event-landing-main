import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="pt-6 pb-1 align-middle items-center" style={{ backgroundColor: "#203355" }}>
      <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
        <h4 className="h4">THÔNG TIN LIÊN HỆ</h4>
      </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-2 gap-20 lg:gap-30 mb-8 md:mb-12">
            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-2 gap-8">
              {/* 2nd block */}
              <div className="text-lg">
                <h6 className="text-gray-200 font-medium mb-1">
                  <b>CUỘC THI RACE OF FINANCE</b>
                </h6>
                <ul>
                  <li className="mb-1">
                    <span>Facebook:</span>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      {" "}
                      https://www.facebook.com/raceoffinance2023
                    </Link>
                  </li>
                  <li className="mb-1">
                    <span>Email:</span>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      {" "}
                      raceoffinance.ysc@gmail.com{" "}
                    </Link>
                  </li>
                  <li className="mb-1">
                    <span>Hotline:</span>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      {" "}
                      0374 419 203 (Mr. Tuấn Dương - Trưởng BTC ){" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-lg">
                <h6 className="text-gray-200 font-bold mb-1">
                  CLB CHỨNG KHOÁN TRẺ HỌC VIỆN TÀI CHÍNH - YSC
                </h6>
                <ul>
                  <li className="mb-1">
                    <span>Facebook:</span>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      {" "}
                      https://www.facebook.com/Chungkhoanhvtc
                    </Link>
                  </li>
                  <li className="mb-1">
                    <span>Email:</span>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      {" "}
                      chungkhoan.aof@gmail.com{" "}
                    </Link>
                  </li>
                  <li className="mb-1">
                    <span>Hotline:</span>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      {" "}
                      0374419203 (Mr. Tuấn Dương){" "}
                    </Link>
                  </li>
                </ul>
                <div className="md:flex md:items-center md:justify-between">
              {/* Social links */}
            </div>
              </div>
            </div>
            {/* Bottom area */}
          </div>
        </div>
      </div>
    </footer>
  );
}
