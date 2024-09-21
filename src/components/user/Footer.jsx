
export default function Footer() {
    return (
        <div className="bg-[#2D5D90] mt-4 text-white p-7">
            <div className="flex justify-around">
                <div>
                    <p>LIÊN HỆ</p>
                    <div>
                        <p className="pt-1 pb-1">EduMarket.github.io - Định vị tri thức - dẫn lối tư duy</p>
                        <p className="pt-1 pb-1">Hà Nội</p>
                        <p className="pt-1 pb-1">Chịu trách nhiệm nội dung: EduMarket</p>
                        <p className="pt-1 pb-1">edumarket@gmail.com</p>
                        <p className="pt-1 pb-1">0912.345.6789</p>
                    </div>
                </div>
                <div>
                    THÔNG TIN
                    <div>
                        <p className="pt-1 pb-1">Giới thiệu</p>
                        <p className="pt-1 pb-1">Câu hỏi thường gặp</p>
                        <p className="pt-1 pb-1">Điều khoản dịch vụ</p>
                        <p className="pt-1 pb-1">Chính sách bảo mật</p>
                    </div>
                </div>
                <div>
                    ĐIỀU KHOẢN
                    <div className="mb-3">
                        <p className="pt-1 pb-1">Giới thiệu</p>
                        <p className="pt-1 pb-1">Câu hỏi thường gặp</p>
                        <p className="pt-1 pb-1">Điều khoản dịch vụ</p>
                        <p className="pt-1 pb-1">Chính sách bảo mật</p>
                    </div>
                    ĐĂNG KÍ NHẬN BẢN TIN
                    <div className="mt-2">
                        <input type="text" placeholder="Nhập email của bạn" className="bg-[#2D5D90] border-[2px] border-gray-50 p-3 w-80 rounded-lg placeholder:text-white" />
                    </div>
                </div>
            </div>
            <div className="w-[85%] bg-white mt-10 h-[1px] m-auto"></div>
            <div className="flex justify-center item-center mt-5">
                <p>© 2024, Bản quyền thuộc về EduMarket Team</p>
            </div>
        </div>
    )
}