import iconFB from '../../../assets/facebook-circle.png'
import iconMS from '../../../assets/messenger-circle.png'
import iconYT from '../../../assets/youtube-circle.png'

export default function TeacherDetail() {
    return (
        <div className="grid grid-cols-12 gap-10 mx-10 my-2">
            <div className="lg:col-span-5 col-span-12 bg-white rounded-md p-5">
                <div className="flex gap-5">
                    <img src="/teacher1.png" alt="teacher" className="rounded-md w-36 h-36" />
                    <div>
                        <p className="text-md font-semibold text-[#2D5D90]">Nguyễn Văn Hoàng</p>
                        <p className="text-sm mt-1">Giáo viên EduMarket</p>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-gray-500"><span className="font-medium text-[#2D5D90]">Mô tả: </span>Nguyễn Văn Hoàng là một giáo viên tận tâm với hơn 10 năm kinh nghiệm trong lĩnh vực giáo dục. Anh đã giảng dạy tại nhiều trường học danh tiếng và có nhiều đóng góp quan trọng trong việc phát triển chương trình giảng dạy. Anh luôn nỗ lực để mang đến cho học sinh những bài học thú vị và bổ ích.</p>
                </div>
                <div className="mt-3">
                    <p className="font-semibold text-[#2D5D90] text-md">Liên kết mạng xã hội</p>
                    <div className="flex mt-2">
                        <img src={iconFB} className='w-14' />
                        <img src={iconMS} className='w-14' />
                        <img src={iconYT} className='w-14' />
                    </div>
                </div>
            </div>
            <div className="lg:col-span-7 col-span-12">
                <div className="flex">
                    <div>
                        <ClassCard title={"Khóa học"} isActive={true} />
                    </div>
                    <div>
                        <ClassCard title={"Bài viết"} isActive={false} />
                    </div>
                </div>
                <div className=" h-[1px] bg-[rgba(0,0,0,0.1)]"></div>
                <div className='p-4 px-6 mt-5 bg-white rounded-md'>
                    <p className='text-[#2D5D90] text-md font-medium'>Tất cả khóa học</p>
                    <div className='mt-3 flex flex-col gap-5'>
                        <div className='flex gap-3 shadow-sm hover:shadow-md p-3 rounded-md'>
                            <img src="/subject1.jpg" className='w-16 h-16 rounded-sm' alt="" />
                            <div>
                                <h1 className='font-bold text-sky-800'>Công phá vật lý 12 một cách toàn diện</h1>
                                <p className='text-sm font-medium text-sky-950'>Giáo viên: Nguyễn Văn A</p>
                            </div>
                        </div>
                        <div className='flex gap-3 shadow-sm hover:shadow-md p-3 rounded-md'>
                            <img src="/subject1.jpg" className='w-16 h-16 rounded-sm' alt="" />
                            <div>
                                <h1 className='font-bold text-sky-800'>Công phá vật lý 12 một cách toàn diện</h1>
                                <p className='text-sm font-medium text-sky-950'>Giáo viên: Nguyễn Văn A</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ClassCard({ title, isActive }) {
    return (
        <div className="flex items-center justify-center px-4 h-8 cursor-pointer"
            style={{
                color: isActive ? "#2D5D90" : "#9CA3AF",
                borderBottom: isActive ? "2px solid #2D5D90" : "none"
            }}
        >
            <p className="text-md font-semibold">{title}</p>
        </div>
    )
}
