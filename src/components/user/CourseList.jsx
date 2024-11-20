import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import tea1 from "../../assets/subject1.jpg";

const teachers = [
    {
        image: tea1,
        name: "Học Vật Lý1",
        teacher: "Thay Tung",
    },
    {
        image: tea1,
        name: "Học Vật Lý2",
        teacher: "Thay Tung",
    },
    {
        image: tea1,
        name: "Học Vật Lý3",
        teacher: "Thay Tung",
    },
    {
        image: tea1,
        name: "Học Vật Lý4",
        teacher: "Thay Tung",
    },
    {
        image: tea1,
        name: "Học Vật Lý5",
        teacher: "Thay Tung",
    },
    {
        image: tea1,
        name: "Học Vật Lý6",
        teacher: "Thay Tung",
    },
    {
        image: tea1,
        name: "Học Vật Lý7",
        teacher: "Thay Tung",
    }
];

function CourseItem({ name, img, teacher, id }) {
    return (
        <Link className="course__item min-w-[150px] text-[#395978]" key={id} to={`/courses/${id}`}>
            <img className="rounded-xl w-[150px] h-[150px]" src={img} alt={name} />
            <div className="uppercase mt-2 text-[15px] font-medium w-[150px]">
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

export default function CourseList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch(`${process.env.VITE_API}/api/v1/courses`);
            const data = await response.json();
            if (data.status) {
                setCourses(data.data.courses);
                console.log(courses);
            }
        }
        fetchCourses();
    }, []);

    const [translateX, setTranslateX] = useState(0);
    const courseListRef = useRef(null);
    const [currentX, setCurrentX] = useState(0);

    const handleNext = () => {
        if (currentX < teachers.length - 4) {
            setCurrentX((prev) => {
                return prev + 1;
            });
            setTranslateX((prev) => {
                return prev - 178;
            });
        }
    };

    const handlePre = () => {
        if (currentX == 0) return;
        setCurrentX((prev) => {
            return prev - 1;
        });
        setTranslateX((prev) => {
            return prev + 178;
        });
    };

    return (
        <div className="bg-[#FFFFFF] rounded-xl p-5 pb-6 mt-8 w-full mb-8">
            <div className="flex justify-between">
                <h3 className="text-[#355676] text-[15.75px] font-bold">Khóa học Hot</h3>
                <div className="flex text-[#395978]">
                    <button className="mx-2" onClick={handlePre}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>

                    <button className="" onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className="course__list pt-4 overflow-hidden"
            >
                <div className='flex gap-7 transition-transform duration-300'
                    style={{ transform: `translateX(${translateX}px)` }}
                    ref={courseListRef}
                >
                    {courses.map((item, index) => (
                        <CourseItem
                            key={index}
                            name={item.name}
                            img={process.env.VITE_API + item.image}
                            teacher={item.instructor.fullName}
                            id={item._id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
