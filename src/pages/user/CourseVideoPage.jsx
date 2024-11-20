import React, { useState, useRef, useEffect } from 'react'
import Cache from '../../components/Cache'
import { Outlet, useLocation } from 'react-router-dom';
import SectionLessonCard from '../../components/user/Course/SectionLessonCard'
import TeacherCourse from '../../components/user/Course/Video/TeacherCourse';
import CommentVideo from '../../components/user/Course/Video/CommentVideo';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { CourseProvider } from '../../contexts/CourseContext';

function HomeIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 18V15"
                stroke='#2D5D90'
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
            <path
                d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
                strokeWidth="2"
                stroke='#2D5D90'
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </svg>
    );
}

export default function CourseVideoPage() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await fetch(`${process.env.VITE_API}/api/v1/courses/${courseId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                }
            });
            const data = await response.json();
            if (data.status) {
                console.log(data.data.course);
                setCourse(data.data.course);
            }
        }
        fetchCourse();
    }, [courseId]);

    return (
        <CourseProvider course={course}>
            <div className='pt-[80px] pl-7 pr-7'>
                <div className="flex items-center text-[#2D5D90] gap-3">
                    <HomeIcon />
                    <div className="sm:text-lg text-md">&gt;</div>
                    <span className="font-medium cursor-pointer sm:text-md text-xs">{course.name}</span>
                </div>
                <div className="grid grid-cols-12 gap-6 mt-4">
                    <div className='lg:col-span-7 col-span-12'>
                        <Outlet title={course.name} img={course.img} />
                        <TeacherCourse teacher={course.instructor} />
                    </div>
                    <div className='lg:col-span-5 col-span-12'>
                        <div className='p-4 px-7 rounded-md bg-[#FFFFFF]'>
                            <h1 className='font-semibold'>Danh sách bài học</h1>
                            <div className='mt-6 flex flex-col gap-2'>
                                {
                                    course.sections && course.sections.map((section, index) => (
                                        <SectionLessonCard key={index} section={section} />
                                    ))
                                }
                            </div>
                        </div>
                        <CommentVideo />
                    </div>
                </div>
            </div >
        </CourseProvider >
    )
}

/*
<iframe
                                className="w-full h-full rounded-lg"
                                src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                loading="lazy"
                                allowFullScreen
                            ></iframe>
*/