import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Sử dụng NavLink thay vì Link
import Line from './Line';

function SearchModal({ setOpen, open }) {
    const [content, setContent] = useState("");

    return (
        <div className='fixed w-full h-screen bg-black top-0 left-0 bg-opacity-50' onClick={() => { open && setOpen(false) }}>
            <div className='w-[60%] h-[600px] bg-[#FFFFFF] absolute top-14 left-20 rounded-lg p-5' onClick={(e) => e.stopPropagation()}>
                <div className='text-[#D2D5DA] flex gap-2 items-center'>
                    <svg onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    <input type="text" placeholder='Tìm kiếm' value={content} onChange={(e) => setContent(e.target.value)} className='bg-[#F3F4F6] text-[#6C727F] outline-none pl-3 text-[14.5px] w-full p-2 box-border rounded-lg' />
                </div>
                <div className="h-[1px] w-full my-3 mx-auto bg-[rgba(0,0,0,0.1)]"></div>
                <div>
                    <b>Hiển thị kết quả tìm kiếm cho: {content}</b>
                </div>
            </div>
        </div>
    )
}

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="z-10 w-full bg-white/60 h-[56px] fixed top-0 left-0 backdrop-blur-lg">
            {
                open && <SearchModal setOpen={setOpen} open={open} />
            }
            <div className="flex justify-between items-center h-full ml-5 mr-5">
                <div className="flex items-center gap-4">
                    <NavLink to={"/"} className="bg-sky-600 p-2 rounded-[10px]">
                        <h1 className="text-lg font-bold text-white">EM</h1>
                    </NavLink>
                    <div className="flex item-center justify-center">
                        <button className="bg-[#1A4F8C0F] w-48 h-10 rounded-xl flex items-center" onClick={() => setOpen(true)}>
                            <div className="text-[#A3B6C6] mr-auto ml-3 text-sm">
                                Tìm kiếm
                            </div>
                            <svg className="size-6 text-[#3D6998] ml-auto mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex gap-8 items-center [&>div]:cursor-pointer">
                    <NavLink to={'/'} className={({ isActive }) => `hover:scale-110 transform duration-900 ${isActive ? 'text-[#2D5D90]' : 'text-[#868686]'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    </NavLink>
                    <NavLink to={'/courses'} className={({ isActive }) => `hover:scale-110 transform duration-900 ${isActive ? 'text-[#2D5D90]' : 'text-[#868686]'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                        </svg>

                    </NavLink>
                    <NavLink to={'/news'} className={({ isActive }) => `hover:scale-110 transform duration-900 ${isActive ? 'text-[#2D5D90]' : 'text-[#868686]'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>
                    </NavLink>
                </div>
                <div className="flex items-center">
                    <div className="mr-4">
                        <NavLink to={'/register'}>
                            <button className="text-[#355676] text-sm px-5 py-2">Đăng ký</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/login'}>
                            <button className="bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">Đăng nhập</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
