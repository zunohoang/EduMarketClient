
export default function TeacherCourse() {
    return (
        <div className="bg-[#FFFFFF] rounded-md mt-5">
            <div className="flex items-center p-5 gap-4">
                <img src="/teacher1.png" className="rounded-full w-16 h-16" alt="" srcset="" />
                <div>
                    <h1 className="font-semibold">Nguyễn Văn A</h1>
                    <p className="text-gray-400">Giáo viên</p>
                </div>
            </div>
            <div className="p-5">
                <h1 className="font-semibold">Giới thiệu</h1>
                <p className="text-gray-400">Thầy có 10 năm kinh nghiệm giảng dạy ...</p>
            </div>
        </div>
    );
}