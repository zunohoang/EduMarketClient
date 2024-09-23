import iconFB from '../../assets/facebook-circle.png'
import iconMS from '../../assets/messenger-circle.png'
import iconYT from '../../assets/youtube-circle.png'

export default function Footer() {
    return (
        <div className="bg-[#2D5D90] mt-4 text-white p-7">
            <div className="flex justify-around">
                <div>
                    <p className="text-lg font-semibold mb-2">LIÊN HỆ</p>
                    <div>
                        <p className="pt-1 pb-1 flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                            </svg>
                            <span>EduMarket.github.io - Định vị tri thức - dẫn lối tư duy</span>
                        </p>
                        <p className="pt-1 pb-1 flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            Hà Nội</p>
                        <p className="pt-1 pb-1 flex gap-3 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                            Chịu trách nhiệm nội dung: EduMarket</p>
                        <p className="pt-1 pb-1 flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            edumarket@gmail.com</p>
                        <p className="pt-1 pb-1 flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            0912.345.6789</p>
                    </div>
                </div>
                <div>
                    <p className="text-lg font-semibold mb-2">THÔNG TIN</p>
                    <div>
                        <p className="pt-1 pb-1">Giới thiệu</p>
                        <p className="pt-1 pb-1">Câu hỏi thường gặp</p>
                        <p className="pt-1 pb-1">Điều khoản dịch vụ</p>
                        <p className="pt-1 pb-1">Chính sách bảo mật</p>
                        <div className='pt-1 pb-1 flex gap-2'>
                            <img src={iconFB} className='w-14' />
                            <img src={iconMS} className='w-14' />
                            <img src={iconYT} className='w-14' />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-lg font-semibold mb-2">ĐIỀU KHOẢN</p>
                    <div className="mb-3">
                        <p className="pt-1 pb-1">Giới thiệu</p>
                        <p className="pt-1 pb-1">Câu hỏi thường gặp</p>
                        <p className="pt-1 pb-1">Điều khoản dịch vụ</p>
                        <p className="pt-1 pb-1">Chính sách bảo mật</p>
                    </div>
                    <p className="text-lg font-semibold mb-2">ĐĂNG KÍ NHẬN BẢN TIN</p>
                    <div className="mt-2 flex items-center">
                        <input type="text" placeholder="Nhập email của bạn" className="bg-[#2D5D90] border-[2px] outline-none border-gray-50 p-3 pr-10 w-80 rounded-lg placeholder:text-white" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 absolute left-[90%]">
                            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-[85%] bg-white mt-10 h-[1px] m-auto"></div>
            <div className="flex justify-center item-center mt-5 text-sm">
                <p>© 2024, Bản quyền thuộc về EduMarket Team</p>
            </div>
        </div>
    )
}