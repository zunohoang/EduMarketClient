import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import EnterKey from './EnterKey';

function SearchModal({ setOpen, open }) {
    const [content, setContent] = useState("");

    return (
        <div
            className={`fixed w-full h-screen bg-black top-0 left-0 bg-opacity-50 transition-all ${open ? 'scale-100' : 'scale-0'} duration-500 ease-in-out`}
            onClick={() => { open && setOpen(false) }}
        >
            <div className='w-screen h-full bg-[#FFFFFF] rounded-lg p-5' onClick={(e) => e.stopPropagation()}>
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

export default function TopBarMobile() {
    const [open, setOpen] = useState(false);
    const [openEnterKey, setOpenEnterKey] = useState(false);

    return (
        <div className="shadow-md">
            <SearchModal setOpen={setOpen} open={open} />
            <EnterKey setOpen={setOpenEnterKey} open={openEnterKey} />
            <div className="flex justify-between items-center h-16 px-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <NavLink to={"/"} className="bg-sky-600 p-2 rounded-[10px]">
                            <h1 className="text-lg font-bold text-white">EM</h1>
                        </NavLink>
                        <h1 className="text-lg font-semibold text-gray-700">EduMarket</h1>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="focus:outline-none" onClick={() => setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setOpenEnterKey(!openEnterKey)}
                        className="flex items-center justify-center w-full bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.79 14.9299C17.73 16.9799 14.78 17.6099 12.19 16.7999L7.48002 21.4999C7.14002 21.8499 6.47002 22.0599 5.99002 21.9899L3.81002 21.6899C3.09002 21.5899 2.42002 20.9099 2.31002 20.1899L2.01002 18.0099C1.94002 17.5299 2.17002 16.8599 2.50002 16.5199L7.20002 11.8199C6.40002 9.21995 7.02002 6.26995 9.08002 4.21995C12.03 1.26995 16.82 1.26995 19.78 4.21995C22.74 7.16995 22.74 11.9799 19.79 14.9299Z"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M6.89001 17.49L9.19001 19.79"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <span className="ml-2 font-medium">Mua</span>
                    </button>
                </div>
            </div>
        </div>
    )
}