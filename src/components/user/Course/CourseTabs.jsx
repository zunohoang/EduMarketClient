import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

function ClassCard({ title, isActive, onClick }) {
    return (
        <div
            onClick={onClick}
            className="flex items-center justify-center p-6 h-12 cursor-pointer"
            style={{
                color: isActive ? "#2D5D90" : "#9CA3AF",
                borderBottom: isActive ? "2px solid #2D5D90" : "none"
            }}
        >
            <p className="text-lg font-semibold">{title}</p>
        </div>
    );
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

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="flex items-center justify-center space-x-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 1}
                aria-label="Previous page"
            >
                {/* SVG icon for Previous */}
            </button>
            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
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
                onClick={() => onPageChange(currentPage + 1)}
                className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
                aria-label="Next page"
            >
                {/* SVG icon for Next */}
            </button>
        </div>
    );
}

export default function CourseTabs() {
    const [activeClass, setActiveClass] = useState("Tất cả");
    const [currentPage, setCurrentPage] = useState(1);

    const classes = ["Tất cả", "Lớp 12", "Lớp 11", "Lớp 10"];

    const courses1 = [
        { name: "Toán 12", img: "/subject1_1.jpg", teacher: "Nguyễn Văn A", id: 1, class: "Lớp 12" },
        { name: "Văn 12", img: "/subject1_1.jpg", teacher: "Trần Thị B", id: 2, class: "Lớp 12" },
        { name: "Anh 11", img: "/subject1.jpg", teacher: "Lê Văn C", id: 3, class: "Lớp 11" },
        { name: "Lý 11", img: "/subject1_1.jpg", teacher: "Phạm Thị D", id: 4, class: "Lớp 11" },
        { name: "Hóa 10", img: "/subject1.jpg", teacher: "Nguyễn Văn E", id: 5, class: "Lớp 10" },
        { name: "Sinh 10", img: "/subject1.jpg", teacher: "Trần Thị F", id: 6, class: "Lớp 10" },
        { name: "Sử 12", img: "/subject1.jpg", teacher: "Lê Văn G", id: 7, class: "Lớp 12" },
        { name: "Địa 11", img: "/subject1_1.jpg", teacher: "Phạm Thị H", id: 8, class: "Lớp 11" },
        { name: "GDCD 10", img: "/subject1_1.jpg", teacher: "Nguyễn Văn I", id: 9, class: "Lớp 10" },
        { name: "Tin 12", img: "/subject1_1.jpg", teacher: "Trần Thị J", id: 10, class: "Lớp 12" },
        { name: "Sử 12", img: "/subject1.jpg", teacher: "Lê Văn G", id: 7, class: "Lớp 12" },
        { name: "Địa 11", img: "/subject1_1.jpg", teacher: "Phạm Thị H", id: 8, class: "Lớp 11" },
        { name: "GDCD 10", img: "/subject1_1.jpg", teacher: "Nguyễn Văn I", id: 9, class: "Lớp 10" },
        { name: "Tin 12", img: "/subject1_1.jpg", teacher: "Trần Thị J", id: 10, class: "Lớp 12" },
    ];

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await fetch(`${process.env.VITE_API}/api/v1/courses`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                }
            });
            const data = await response.json();
            if (data.status) {
                console.log(data.data.courses);
                const keyH = ["Lớp 10", "Lớp 11", "Lớp 12"];
                const courses_v1 = data.data.courses.map(course => {
                    const courseClass = course.category.find(cat => keyH.includes(cat)) || "Khác";

                    return {
                        name: course.name,
                        img: process.env.VITE_API + course.image,
                        teacher: course.instructor.fullName,
                        id: course._id,
                        class: courseClass
                    };
                });
                setCourses(courses_v1);
            }
        };

        fetchCourse();
    }, []);

    const totalPages = Math.ceil(courses.length / 10);

    const filteredCourses = courses.filter(course =>
        activeClass === "Tất cả" || course.class === activeClass
    );

    const coursesToShow = filteredCourses.slice((currentPage - 1) * 10, currentPage * 10);

    return (
        <div className="mt-3 w-fit p-5">
            <div className="flex">
                {classes.map((classTitle) => (
                    <ClassCard
                        key={classTitle}
                        title={classTitle}
                        isActive={classTitle === activeClass}
                        onClick={() => {
                            setActiveClass(classTitle);
                            setCurrentPage(1);
                        }}
                    />
                ))}
            </div>
            <div className="h-[1px] bg-[rgba(0,0,0,0.1)]"></div>
            <div className="flex w-full my-6 justify-start">
                <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                    {coursesToShow.map(course => (
                        <CourseItem key={course.id} {...course} />
                    ))}
                </div>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
}
