import { useState } from "react";

export default function EnterKey({ setOpen, open }) {
    return (
        <div
            className={`fixed w-full h-screen top-0 left-0 flex items-center justify-center bg-opacity-50 transition-all bg-black ${open ? '' : 'hidden'} duration-500 ease-in-out`}
            onClick={() => { open && setOpen(false) }}
        >
            <div className={`w-[80%] bg-[#FFFFFF] rounded-lg p-5 max-w-lg`} onClick={(e) => e.stopPropagation()}>
                <div className="text-sky-900 flex flex-col gap-3 items-center">
                    <b className="text-sky-900 font-extrabold text-center">NHẬP MÃ KÍCH HOẠT</b>
                    <input type="text" className="bg-sky-50 w-full border-2 p-2 outline-sky-400 rounded-md" placeholder="Nhập mã kích hoạt" />
                    <button className="flex items-center justify-center w-full bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">
                        <span className="ml-2 font-medium">Kích hoạt</span>
                    </button>
                </div>
            </div>
        </div>
    )
}