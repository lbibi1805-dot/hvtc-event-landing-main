import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#203355] text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-white">THÔNG TIN LIÊN HỆ</h4>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Race of Finance Section */}
          <div>
            <h6 className="text-xl font-semibold mb-4">
              CUỘC THI RACE OF FINANCE
            </h6>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">Facebook:</span>{" "}
                <Link
                  href="https://www.facebook.com/raceoffinance2023"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  https://www.facebook.com/raceoffinance2023
                </Link>
              </li>
              <li>
                <span className="font-medium">Email:</span>{" "}
                <Link
                  href="mailto:raceoffinance.ysc@gmail.com"
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  raceoffinance.ysc@gmail.com
                </Link>
              </li>
              <li>
                <span className="font-medium">Hotline:</span>{" "}
                <Link
                  href="tel:0374419203"
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  0374 419 203 (Mr. Tuấn Dương - Trưởng BTC)
                </Link>
              </li>
            </ul>
          </div>

          {/* YSC Section */}
          <div>
            <h6 className="text-xl font-semibold mb-4">
              CLB CHỨNG KHOÁN TRẺ HỌC VIỆN TÀI CHÍNH - YSC
            </h6>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">Facebook:</span>{" "}
                <Link
                  href="https://www.facebook.com/Chungkhoanhvtc"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  https://www.facebook.com/Chungkhoanhvtc
                </Link>
              </li>
              <li>
                <span className="font-medium">Email:</span>{" "}
                <Link
                  href="mailto:chungkhoan.aof@gmail.com"
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  chungkhoan.aof@gmail.com
                </Link>
              </li>
              <li>
                <span className="font-medium">Hotline:</span>{" "}
                <Link
                  href="tel:0374419203"
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  0374 419 203 (Mr. Tuấn Dương)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-10"></div>

        {/* Bottom Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Race of Finance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
