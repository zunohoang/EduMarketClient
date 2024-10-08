import React, { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function LessonCard({ title, videoId }) {
    const location = useLocation();
    const navigate = useNavigate();
    const updateURL = () => {
        navigate(`${videoId}`);
    };
    return (
        <div onClick={(e) => {
            e.stopPropagation();
            updateURL();
        }} className='bg-[#e7eff0] h-[38px] ml-2 rounded-xl flex items-center mt-1 mb-1 pl-2 pr-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#395c8c] opacity-80 cursor-pointer">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
            </svg>
            <h1 className='pl-2 text-[#395c8c] cursor-pointer'>{title}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#395c8c] ml-auto cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>

        </div>
    )
}

export default function SectionLessonCard() {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0)
    const [contentOpacity, setContentOpacity] = useState(0)

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(open ? contentRef.current.scrollHeight : 0);
            setContentOpacity(open ? 1 : 0);
        }
    }, [open])


    return (
        <div className="w-full">
            <div className='h-[40px] bg-[#395c8c] rounded-lg flex items-center pl-4 pr-3 shadow-md' onClick={() => setOpen(!open)}>
                <h1 className='font-normal text-white mr-auto'>CHƯƠNG I. HỆ THỨC TRUY HỒI</h1>
                <p className='text-white font-bold ml-auto'>+</p>
            </div>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    height: `${contentHeight}px`,
                    opacity: `${contentOpacity}`
                }}
            >
                <div className="mt-[6px] space-y-2">
                    <LessonCard title="Bài 1. Ánh sáng và hệ thức" videoId={"dQw4w9WgXcQ"} />
                    <LessonCard title="Bài 2. Sóng ánh sáng, bước sóng" videoId={"lt3k_j9MSco"} />
                    <LessonCard title="Bài 3. Tính chất hạt của ánh sáng" videoId={"2"} />
                </div>
            </div>
        </div>
    )
}
