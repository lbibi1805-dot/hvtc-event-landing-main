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
            INCEPTION
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              VÒNG 1
            </time>
            <div className="text-xl font-bold text-blue-200">
              (26/05/2024 - 25/06/2024)
            </div>
          </div>
          <div className="text-gray-100 text-xl ml-5">
            <ul className="list-disc">
              <li>Tham gia cá nhân</li>
              <li><b>Hình thức thi:</b> Trực tuyến</li>
              <li>
                <b>Nội dung: </b>25 câu trắc nghiệm về các kiến thức liên quan đến lĩnh
                vực Tài chính - Chứng khoán
              </li>
              <li><b>Thời gian:</b> 30 phút</li>
              <li>
                200 cá nhân có thành tích cao nhất sẽ tham dự vòng tiếp theo
              </li>
            </ul>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-bold text-2xl text-blue-400 mb-1 sm:mb-0">
            DEEP DIVE
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              VÒNG 2
            </time>
            <div className="text-xl font-bold text-blue-200">
              (30/06/2024)
            </div>
          </div>
          <div className="text-gray-100 text-xl ml-5">
            <ul className="list-disc">
              <li><b>Hình thức thi:</b> Trực tiếp (kết hợp với trực tuyến dành cho các thí sinh miền Nam)</li>
              <li>
                <b>Nội dung:</b> Bài thi về kiến thức liên quan đến lĩnh vực Tài chính - Chứng khoán, bao gồm 2 phần: Trắc nghiệm (20 câu) và Tự luận (2 câu) 
              </li>
              <li><b>Thời gian:</b> 60 phút</li>
              <li>
              40 cá nhân có thành tích cao nhất sẽ tham dự vòng tiếp theo
              </li>
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
              (08/07/2024 - 28/07/2024)
            </div>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-bold text-2xl text-blue-400 mb-1 sm:mb-0">
            ĐẦU TƯ GIẢ LẬP
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="bg-blue-900 sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              VÒNG 3A
            </time>
            <div className="text-xl font-bold text-blue-200">
              (08/07/2024 - 26/07/2024)
            </div>
          </div>
          <div className="text-gray-100 text-xl ml-5">
            <ul className="list-disc">
              <li><b>Hình thức thi:</b> Trực tuyến</li>
              <li>
                <b>Nội dung:</b> Đầu tư giả lập.
              </li>
              <li><b>Thời gian:</b> 3 tuần</li>
            </ul>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-bold text-2xl text-blue-400 mb-1 sm:mb-0">
          KIỂM TRA KIẾN THỨC CHUYÊN MÔN
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="bg-blue-900 sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              VÒNG 3B
            </time>
            <div className="text-xl font-bold text-blue-200">
              (28/07/2024)
            </div>
          </div>
          <div className="text-gray-100 text-xl ml-5">
            <ul className="list-disc">
              <li><b>Hình thức thi:</b> Trực tiếp (kết hợp với trực tuyến dành cho các thí sinh miền Nam)</li>
              <li>
                <b>Nội dung:</b> Bài thi về kiến thức liên quan đến lĩnh vực Tài chính - Chứng khoán, bao gồm 2 phần: Trắc nghiệm (25 câu) và Tự luận (5 câu) 
              </li>
              <li><b>Thời gian:</b> 90 phút</li>
              <li>
                16 cá nhân có thành tích cao nhất sẽ tham dự vòng tiếp theo
              </li>
            </ul>
          </div>
        </div>



        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-bold text-2xl text-blue-400 mb-1 sm:mb-0">
            OUTBREAK
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="bg-blue-900 sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              VÒNG 4
            </time>
            <div className="text-xl font-bold text-blue-200">
              (03/08/2024)
            </div>
          </div>
          <div className="text-gray-100 text-xl ml-5">
            <ul className="list-disc">
              <li><b>Hình thức thi:</b> Trực tiếp (kết hợp với trực tuyến dành cho các thí sinh miền Nam)</li>
              <li>
              <b>Nội dung:</b> Thuyết trình bảo vệ danh mục đầu tư
              </li>
              <li><b>Thời gian:</b> 8 phút thuyết trình, 10 phút phản biện với Ban giám khảo</li>
              <li>
                4 cá nhân có thành tích cao nhất sẽ tham dự vòng chung kết
              </li>
            </ul>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-bold text-2xl text-blue-400 mb-1 sm:mb-0">
          LUMINOSITY
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
            <ul className="list-disc">
              <li><b>Hình thức thi:</b> Trực tiếp</li>
              <li>
                <b>Nội dung:</b> 
                <br></br>Chặng 1: The Maze
                <br></br>Chặng 2: Speed up
                <br></br>Chặng 3: Break out
                <br></br>Chặng 4: Finish the race
              </li>
              <br></br>
              <li>
              <b>Cá nhân đạt thành tích xuất sắc nhất sẽ trở thành Quán Quân Race of Finance 2024</b>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="flex justify-center items-center text-center mt-10" data-aos="fade-up" data-aos-delay="400">
        <a
          className="btn text-white bg-gradient-to-r from-[#2F6095] to-[#1E4A7A] hover:from-white hover:to-white hover:text-[#2F6095] px-8 py-4 rounded-full inline-block drop-shadow-lg font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105"
          href="https://drive.google.com/file/d/1rchowFh5WA7EgyqtYul-1G9T1bh9BSIb/view"
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
