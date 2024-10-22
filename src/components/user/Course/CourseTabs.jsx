import { Link } from "react-router-dom";
import img1 from "../../../assets/subject1.jpg";

function ClassCard({ title, isActive }) {
    return (
        <div className="flex items-center justify-center p-6 h-12 cursor-pointer"
            style={{
                color: isActive ? "#2D5D90" : "#9CA3AF",
                borderBottom: isActive ? "2px solid #2D5D90" : "none"
            }}
        >
            <p className="text-lg font-semibold">{title}</p>
        </div>
    )
}

function CourseItem({ name, img, teacher, id }) {
    return (
        <Link to={`/courses/${id}`} className="course__item min-w-[150px] text-[#395978] hover:scale-105 duration-1000" key={id}>
            <img className="rounded-xl" src={img} alt={name} />
            <div className="uppercase mt-2 text-[15px] font-medium">
                <h2>{name}</h2>
            </div>
            <div className="flex items-center text-[13px] gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
                <p>{teacher}</p>
            </div>
        </Link>
    );
}

function Pagination({ currentPage = 1, totalPages = 4 }) {
    return (
        <div className="flex items-center justify-center space-x-2">
            <button
                className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 1}
                aria-label="Previous page"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </button>
            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i}
                    className={`w-10 h-10 rounded-md ${currentPage === i + 1
                        ? 'bg-blue-500 text-white'
                        : 'border border-gray-300 hover:bg-gray-100'
                        }`}
                    aria-current={currentPage === i + 1 ? "page" : undefined}
                >
                    {i + 1}
                </button>
            ))}
            <button
                className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
                aria-label="Next page"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}

export default function CourseTabs() {
    return (
        <div className="mt-3 w-fit p-5">
            <div className="flex">
                <ClassCard title={"Tất cả"} isActive={true} />
                <ClassCard title={"Lớp 12"} isActive={false} />
                <ClassCard title={"Lớp 11"} isActive={false} />
                <ClassCard title={"Lớp 10"} isActive={false} />
            </div>
            <div className=" h-[1px] bg-[rgba(0,0,0,0.1)]"></div>
            <div className="flex w-full  my-6 justify-start">
                <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                    <CourseItem name={"Toán"} img={'/subject1_1.jpg'} teacher={"Nguyễn Văn A"} id={1} />
                    <CourseItem name={"Vật lý"} img={'/subject1.jpg'} teacher={"Nguyễn Văn B"} id={2} />
                    <CourseItem name={"Hóa học"} img={'/subject1_1.jpg'} teacher={"Nguyễn Văn C"} id={3} />
                    <CourseItem name={"Sinh học"} img={'/subject1.jpg'} teacher={"Nguyễn Văn D"} id={4} />
                    <CourseItem name={"Lịch sử"} img={'/subject1_1.jpg'} teacher={"Nguyễn Văn E"} id={5} />
                    <CourseItem name={"Địa lý"} img={'/subject1_1.jpg'} teacher={"Nguyễn Văn F"} id={6} />
                    <CourseItem name={"Tiếng Anh"} img={'/subject1_1.jpg'} teacher={"Nguyễn Văn G"} id={7} />
                    <CourseItem name={"Ngữ văn"} img={'/subject1_1.jpg'} teacher={"Nguyễn Văn H"} id={8} />
                </div>
            </div>
            <Pagination currentPage={1} totalPages={5} />
        </div>
    )
}