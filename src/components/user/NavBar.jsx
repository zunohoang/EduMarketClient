import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Line from './Line'

function SearchModal({ setOpen, open }) {
    const [content, setContent] = useState("")

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
        <div className="w-full bg-white /60 h-[56px] fixed top-0 left-0 backdrop-blur-lg">
            {
                open && <SearchModal setOpen={setOpen} open={open} />
            }
            <div className="flex justify-between items-center h-full ml-5 mr-5">
                <div className="flex items-center gap-4">
                    <div className=" bg-sky-600 p-2 rounded-[10px]">
                        <h1 className="text-lg font-bold text-white">EM</h1>
                    </div>
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
                    <Link to={'/'} className="text-[#2D5D90] hover:scale-110 transform duration-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    </Link>
                    <div className="text-[#868686] hover:scale-110 transform duration-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                    </div>
                    <div className="text-[#868686] hover:scale-110 transform duration-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="mr-4">
                        <button className="text-[#355676] text-sm px-5 py-2">Đăng ký</button>
                    </div>
                    <div>
                        <button className="bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">Đăng nhập</button>
                    </div>
                </div>
            </div>
        </div>
    )
}