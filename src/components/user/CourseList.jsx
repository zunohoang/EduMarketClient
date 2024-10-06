import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import tea1 from "../../assets/teacher1.png";

const teachers = [
    {
        image: tea1,
        name: "Hoc Vat Li",
        teacher: "Thay Tung",
    },
    {
        image: tea1,
        name: "Hoc Vat Li",
        teacher: "Thay Tung",
    },
    {
        image: tea1,
        name: "Hoc Vat Li",
        teacher: "Thay Tung",
    },
    {
        image: tea1,
        name: "Hoc Vat Li",
        teacher: "Thay Tung",
    },
    {
        image: tea1,
        name: "Hoc Vat Li",
        teacher: "Thay Tung",
    },
];

function CourseItem({ name, img, teacher, id }) {
    return (
        <div className="course__item h-[250px] min-w-[150px]" key={id}>
            <img className="rounded-xl w-[150px] h-[150px]" src={img} alt={name} />
            <div>
                <h2>{name}</h2>
            </div>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
                <p>{teacher}</p>
            </div>
        </div>
    );
}

export default function CourseList() {
    const [translateX, setTranslateX] = useState(0);
    const courseListRef = useRef(null);
    const itemWidth = 150;
    const visibleItems = 4; 

    const maxTranslate = -itemWidth * (teachers.length - visibleItems);

    const handleNext = () => {
        setTranslateX((prev) => {
            const newTranslate = prev - itemWidth;
            return newTranslate < maxTranslate ? maxTranslate : newTranslate;
        });
    };

    const handlePre = () => {
        setTranslateX((prev) => {
            const newTranslate = prev + itemWidth;
            return newTranslate > 0 ? 0 : newTranslate;
        });
    };

    return (
        <div className="bg-[#FFFFFF] rounded-xl p-5 pb-0 mt-8 w-full">
            <div className="flex justify-between">
                <h3 className="text-[#355676] text-[15.75px] font-bold">Giáo viên EduMarket</h3>
                <div className="flex">
                    <button className="mx-2" onClick={handlePre} disabled={translateX === 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>

                    <button className="" onClick={handleNext} disabled={translateX <= maxTranslate}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className="course__list flex flex-nowrap pt-4 pb-6 gap-7 overflow-hidden transition-transform duration-300"
                style={{ transform: `translateX(${translateX}px)` }}
                ref={courseListRef}
            >
                {teachers.map((item, index) => (
                    <CourseItem
                        key={index}
                        name={item.name}
                        img={item.image}
                        teacher={item.teacher}
                        id={index}
                    />
                ))}
            </div>
        </div>
    );
}
