import Image from "next/image";

import FeatImage01 from "@/public/images/features-03-image-01.png";
import FeatImage02 from "@/public/images/features-03-image-02.png";
import FeatImage03 from "@/public/images/features-03-image-03.png";

export default function Sponsor() {
  return (
    <section id="sponsor">
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h2 className="h2 mt-32" data-aos="fade-up" style={{ textShadow: "0 8px 16px rgba(0, 0, 255, 0.5)" }}>
          ĐƠN VỊ ĐỒNG HÀNH
        </h2>
      </div>

      {/** Đơn Vị Chỉ Đạo */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3 className="h3 mb-4">ĐƠN VỊ CHỈ ĐẠO</h3>

        <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/DonViChiDao/1.png"
              className="h-auto rounded-lg"
              alt=""
              height={180}
              width={180}
              style={{ maxWidth: "none" }}
            />
          </div>
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/DonViChiDao/2.png"
              className="h-auto rounded-lg sm:mt-4"
              alt=""
              height={120}
              width={120}
              style={{ maxWidth: "none" }}
            />
          </div>
          <div
            className="flex flex-col px-6 pt-14 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/DonViChiDao/3.png"
              className="h-auto rounded-lg"
              alt=""
              height={110}
              width={110}
              style={{ maxWidth: "none" }}
            />
          </div>
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/DonViChiDao/4.png"
              className="h-auto"
              alt=""
              height={120}
              width={190}
              style={{ maxWidth: "none" }}
            />
          </div>
        </div>
      </div>

      {/** Đơn Vị Tổ Chức */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3 className="h3 mb-4">ĐƠN VỊ TỔ CHỨC</h3>

        <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-12 items-start ">
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/DonViToChuc/1.png"
              className="h-auto rounded-lg"
              alt=""
              height={180}
              width={180}
              style={{ maxWidth: "none" }}
            />
          </div>
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/DonViToChuc/2.png"
              className="h-auto rounded-lg"
              alt=""
              height={140}
              width={140}
              style={{ maxWidth: "none" }}
            />
          </div>
        </div>
      </div>

      {/** NTT Kim Cương */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3 className="h3 mb-4" >NHÀ TÀI TRỢ KIM CƯƠNG</h3>

        <div className="max-w-sm mx-auto grid gap-8 lg:gap-6 items-start lg:max-w-none">
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/NTT_HK/KimCuong1.png"
              className="h-auto rounded-lg p-4 w-80 lg:w-3/4"
              alt=""
              height={380}
              width={480}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
        </div>
      </div>

      {/** NTT Bạc */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3 className="h3 mb-4" >NHÀ TÀI TRỢ VÀNG</h3>

        <div className="max-w-sm mx-auto grid gap-8 lg:gap-6 items-start lg:max-w-none">
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/NTT_HK/Bac1.png"
              className="h-auto rounded-lg p-4"
              alt=""
              height={380}
              width={280}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
        </div>
      </div>

      {/** NTT Bạc */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3 className="h3 mb-4" >NHÀ TÀI TRỢ ĐỒNG</h3>

        <div className="max-w-sm mx-auto grid gap-8 lg:gap-6 items-start lg:max-w-none">
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/NTT_HK/Dong1.png"
              className="h-auto rounded-lg p-4"
              alt=""
              height={380}
              width={300}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
        </div>
      </div>

       {/** NTT Bạc */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3 className="h3 mb-4" >NHÀ TÀI TRỢ THÂN THIẾT</h3>

        <div className="max-w-sm mx-auto grid gap-8 lg:gap-6 items-start lg:max-w-none">
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/NTT_HK/Thanthiet1.png"
              className="h-auto rounded-lg p-4"
              alt=""
              height={380}
              width={250}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
        </div>
      </div>

      {/** NTT Bạc */}

      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3 className="h3 mb-4" >NHÀ TÀI TRỢ HIỆN VẬT</h3>

        <div className="max-w-sm mx-auto grid gap-8 lg:gap-6 items-start lg:max-w-none">
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/NTT_HV/2.png"
              className="h-auto rounded-lg p-4"
              alt=""
              height={380}
              width={250}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3 className="h3 mb-4" >NHÀ TÀI TRỢ CÔNG NGHỆ</h3>

        <div className="max-w-sm mx-auto grid gap-8 lg:gap-6 items-start lg:max-w-none">
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/NTT_HV/1.png"
              className="h-auto rounded-lg p-4"
              alt=""
              height={380}
              width={250}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3 className="h3 mb-4" >BẢO TRỢ TRUYỀN THÔNG</h3>

        <div className="max-w-sm mx-auto grid gap-10 lg:grid-cols-2 lg:gap-10 items-start lg:max-w-none mb-10 lg:mb-0">
          <div
            className="flex flex-col p-2 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/BaoTroTruyenThong/1.png"
              className="h-auto rounded-lg p-4 lg:mt-14"
              alt=""
              height={380}
              width={270}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
          <div
            className="flex flex-col p-0 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/BaoTroTruyenThong/2.png"
              className="h-auto rounded-lg p-4 lg:mt-16"
              alt=""
              height={380}
              width={380}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
        </div>

        <div className="max-w-sm mx-auto grid gap-10 lg:grid-cols-2 lg:gap-10 items-start lg:max-w-none">
          <div
            className="flex flex-col p-0 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/BaoTroTruyenThong/3.png"
              className="h-auto rounded-lg p-4 lg:mt-14"
              alt=""
              height={380}
              width={260}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/BaoTroTruyenThong/7.png"
              className="h-auto rounded-lg p-4 lg:mt-9"
              alt=""
              height={380}
              width={250}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
        </div>

        <div className="max-w-sm mx-auto grid gap-10 lg:grid-cols-2 lg:gap-10 items-start lg:max-w-none">
          <div
            className="flex flex-col p-2 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/BaoTroTruyenThong/5.png"
              className="h-auto rounded-lg p-4 lg:mt-14"
              alt=""
              height={380}
              width={140}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
          <div
            className="flex flex-col p-0 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/BaoTroTruyenThong/6.JPG"
              className="h-auto rounded-lg p-4 lg:mt-24"
              alt=""
              height={380}
              width={390}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
        </div>

      </div>

             {/** NTT Bạc */}
             <div className="max-w-3xl mx-auto text-center mb-8">
        <h3 className="h3 mb-4" >BẢO TRỢ HÌNH ẢNH</h3>

        <div className="max-w-sm mx-auto grid gap-8 lg:gap-6 items-start lg:max-w-none">
          <div
            className="flex flex-col p-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="/images/logo_main/BaoTroHinhAnh/1.png"
              className="h-auto rounded-lg p-4"
              alt=""
              height={380}
              width={250}
              style={{ maxWidth: "none", backgroundColor:"#fff" }}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
