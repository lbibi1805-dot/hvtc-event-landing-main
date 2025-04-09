import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";


export default function Timeline() {
  return (
    <section id = "timeline"> 
      <div className="max-w-3xl mx-auto text-center pb-10 md:pb-12 -mb-12">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-lg"
          style={{ textShadow: "0 8px 16px rgba(0, 0, 255, 0.5)", color: "white" }}
        >
          THỂ LỆ
        </h2>
      </div>

      <div className=" max-w-6xl mx-auto  bg-[#2F6095] bg-opacity-50 py-4  rounded-3xl">
      <div
        className="px-4 sm:px-6 "
        data-aos="fade-up"
      >
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-bold text-2xl text-blue-400 mb-1 sm:mb-0">
            TEST ONLINE
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              VÒNG 1
            </time>
            <div className="text-xl font-bold text-blue-200">
              (21/04/2025 - 13/05/2025)
            </div>
          </div>
          <div className="text-gray-100 text-xl ml-5">
            <ul className="list-disc">
              <li>Tham gia cá nhân</li>
              <li><b>Hình thức thi:</b> Trực tuyến (Bài thi gồm 25 câu hỏi, trả lời đúng được 10 điểm, sai không bị trừ điểm. Trong trường hợp các thí sinh có số điểm bằng nhau, thí sinh có thời gian hoàn thành vòng thi sớm hơn sẽ được đi tiếp).
              </li>
              <li>
                <b>Nội dung: </b> 25 câu trắc nghiệm về các kiến thức liên quan đến lĩnh
                vực Tài chính - Chứng khoán
              </li>
              <li><b>Thời gian:</b> 30 phút</li>
              {/*<li>*/}
              {/*  200 cá nhân có thành tích cao nhất sẽ tham dự vòng tiếp theo*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-bold text-2xl text-blue-400 mb-1 sm:mb-0">
            TEST ONLINE/OFFLINE
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              VÒNG 2
            </time>
            <div className="text-xl font-bold text-blue-200">
              (18/05/2025)
            </div>
          </div>
          <div className="text-gray-100 text-xl ml-5">
            <ul className="list-disc">
              <li><b>Hình thức thi:</b> Trực tiếp (kết hợp với trực tuyến dành cho các thí sinh miền Nam)</li>
              <li>
                <b>Nội dung:</b> Bài thi về kiến thức liên quan đến lĩnh vực Tài chính - Chứng khoán, bao gồm 2 phần: Trắc nghiệm (20 câu) và Tự luận (2 câu) </li>
            </ul>
          </div>
        </div>
        <div className="relative pl-8 sm:pl-32 pt-6 pb-3 group">
          <div className="font-caveat font-bold text-2xl text-blue-400 mb-1 sm:mb-0">
            BUILD UP
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="bg-blue-900 sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              VÒNG 3
            </time>
            <div className="text-xl font-bold text-blue-200">
              (25/05/2025 - 27/06/2025)
            </div>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-bold text-2xl text-blue-400 mb-1 sm:mb-0">
            HIỆU SUẤT ĐẦU TƯ
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="bg-blue-900 sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              VÒNG 3A
            </time>
            <div className="text-xl font-bold text-blue-200">
              (26/05/2025 - 26/06/2025)
            </div>
          </div>
          <div className="text-gray-100 text-xl ml-5">
            <ul className="list-disc">
              <li>
                <b>Hình thức thi:</b> Giao dịch chứng khoán thực tế bằng <b>tài khoản cá nhân</b> của thí sinh trên nền tảng website&nbsp;
                <a href="https://online.bvsc.com.vn" target="_blank" rel="noopener noreferrer">
                  <u>https://online.bvsc.com.vn</u>
                </a>&nbsp;và ứng dụng di động <b>BVSC Invest</b>
              </li>
              <li>
                <b>Thời gian thi:</b> 4 tuần.
              </li>
              <li>
                <b>Địa điểm:</b> Tại nhà hoặc địa điểm có kết nối internet ổn định.
              </li>
            </ul>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-bold text-2xl text-blue-400 mb-1 sm:mb-0">
            CASE CHALLENGE – MARKET INSIGHTS
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="bg-blue-900 sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              VÒNG 3B
            </time>
            <div className="text-xl font-bold text-blue-200">
              (01/06/2025)
            </div>
          </div>
          <div className="text-gray-100 text-xl ml-5">
            <ul className="list-disc space-y-2">
              <li>
                <b>Hình thức thi:</b> Thi cá nhân
              </li>
              <li>
                <b>Thời gian:</b> <span>120 phút</span>
              </li>
              <li>
                <b>Nội dung:</b> Thí sinh thực hiện bài phân tích chuyên sâu gồm 3 phần
              </li>
              <li>
                <b>Nhiệm vụ của thí sinh:</b>
                <ul className="list-disc ml-6 mt-1 space-y-1">
                  <li>Phân tích Vĩ mô</li>
                  <li>Phân tích nội tại doanh nghiệp</li>
                  <li>Phân tích kỹ thuật</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>



        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-bold text-2xl text-blue-400 mb-1 sm:mb-0">
            THUYẾT TRÌNH BẢO VỆ DANH MỤC
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="bg-blue-900 sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              VÒNG 4
            </time>
            <div className="text-xl font-bold text-blue-200">
              (20/07/2025)
            </div>
          </div>
          <div className="text-gray-100 text-xl ml-5">
            <ul className="list-disc space-y-2">
              <li>
                12 thí sinh dưới sự sắp xếp của BTC sẽ lần lượt thuyết trình mã chứng khoán, tham gia <span className="text-blue-600 font-semibold">phản biện</span> với ban giám khảo.
              </li>
              <li>
                <b>Thời gian:</b> 8 phút thuyết trình và 10 phút phản biện
              </li>
              <li>
                <b>Tổng điểm tối đa cho vòng 4:</b> 1000 điểm, trong đó:
                <ul className="list-disc ml-6 mt-1 space-y-1">
                  <li>Phong cách thuyết trình: 200 điểm</li>
                  <li>Phản biện với BGK: 400 điểm</li>
                  <li>Nội dung báo cáo phân tích: 400 điểm</li>
                </ul>
              </li>
              <li>
                <b>Hình thức thi:</b> Trực tiếp & Trực tuyến
              </li>
            </ul>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-bold text-2xl text-blue-400 mb-1 sm:mb-0">
          SÂN KHẤU HÓA
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className=" sm:absolute -left-3 p-2 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-30 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            CHUNG KẾT
            </time>
            <div className="text-xl font-bold text-blue-200">
              (Dự kiến: Tháng 8/2024)
            </div>
          </div>
          <div className="text-gray-100 text-xl ml-5">
            <ul className="list-disc space-y-2">
              <li><b>Chặng 1:</b> THE MAZE</li>
              <li><b>Chặng 2:</b> Speed up</li>
              <li><b>Chặng 3:</b> Break Out</li>
              <li><b>Chặng 4:</b> Finish The Race</li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="flex justify-center items-center text-center mt-10" data-aos="fade-up" data-aos-delay="400">
        <a
          className="btn text-white bg-gradient-to-r from-[#2F6095] to-[#1E4A7A] hover:from-white hover:to-white hover:text-[#2F6095] px-8 py-4 rounded-full inline-block drop-shadow-lg font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105"
          href="https://drive.google.com/file/d/129PCgXE-kHrCgEMkkRErYVy5zpAdKMMl/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          BOOKLET CUỘC THI
        </a>
      </div>
    </div>
    </section>
  );
}
