const Rules: React.FC = () => {
    return (
        <section className="w-full bg-transparent py-16 mt-80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Title */}
            <h2 className="text-6xl md:text-6xl font-bold text-white mb-4 text-center tracking-wide">
            THỂ LỆ
            </h2>

            {/* Content */}
            <div className="bg-transparent rounded-2xl shadow-xl border-4 border-[#224366] p-8 md:p-12">
            <div className="text-white text-lg md:text-xl leading-relaxed space-y-6">
                <ul className="list-disc list-inside space-y-4 text-left">
                <li>
                    <strong>Mỗi thí sinh</strong> chỉ được tham gia một lần. Thông tin đăng ký trong đơn phải đảm bảo tính <strong>chính xác</strong>, <strong>đầy đủ</strong> và <strong>hợp lệ</strong>.
                </li>
                <li>
                    Thí sinh có mặt tại phòng thi đúng thời gian quy định để làm thủ tục dự thi (mang theo <strong>Chứng minh nhân dân</strong>, <strong>thẻ Căn cước công dân</strong> hoặc <strong>Thẻ sinh viên</strong> và giấy tờ tùy thân hợp lệ). Trường hợp bị mất một trong các giấy tờ tùy thân phải báo cáo ngay cho người coi thi (NCT) để xem xét, xử lý.
                </li>
                <li>
                    Thí sinh đến chậm quá <strong>15 phút</strong> sau khi có hiệu lệnh tính giờ làm bài sẽ không được dự thi buổi thi đó.
                </li>
                <li>
                    Đối với thí sinh ở địa phương cách xa địa điểm thi (Ví dụ: <strong>miền Trung</strong>, <strong>miền Nam</strong>) sẽ tiến hành theo hình thức thi online trên nền tảng <strong>Google Meet</strong>.
                </li>
                </ul>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Rules;