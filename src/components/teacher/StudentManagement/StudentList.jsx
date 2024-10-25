import StudentItem from "./StudentItem";
import { useState } from "react";
export default function StudentList() {
    const [activePage,setActivePage] = useState(1);

    return (
        <div className="flex justify-center items-centers w-full h-screen bg-[#f4f7fe]">
            <div className="my-auto w-[90%] bg-white px-2 py-4 rounded-xl ">
                <div className="flex justify-between my-3 mx-4">
                    <h1 className="text-2xl font-bold text-[#2b3674]">Dach sách khóa học</h1>
                    <div className="flex w-fit bg-white rounded-xl relative
                                    has-[:focus]:outline online-none  outline-2 outline-[#2d5d90]
                                    border-solid border-2 border-[#f4f7fe]">
                        <div className="px-3 py-1 w-fit h-fit">
                            <input className=" outline-none mr-6" type="text" placeholder="Tìm kiếm" />
                        </div>
                        <div className="-translate-y-1/2 origin-center absolute top-1/2 right-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#2b3674]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="overflow-scroll">
                    <table className="table-auto w-full text-center
                                    [&_th]:px-5 [&_th]:py-2 [&_th]:text-[#b8c1d9]
                                    [&_td]:font-semibold [&_td]:py-4 [&_td]:px-5 *:whitespace-nowrap">
                        <tr className="w-full"> 
                            <th><input type="checkbox" /></th>
                            <th><span>ID</span></th>
                            <th><span>TÊN NGƯỜI DÙNG</span></th>
                            <th><span>LỚP</span></th>
                            <th><span>KHÓA HỌC THAM GIA</span></th>
                            <th>
                                <div className="cursor-pointer text-black flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </div>
                            </th>
                        </tr>

                        <StudentItem 
                            id={3}
                            username="Khúc Phương Nam"
                            grade="Đại học"
                            attended={12}

                        />
                        <StudentItem 
                            id={3}
                            username="Khúc Phương Nam"
                            grade="Đại học"
                            attended={12}

                        />
                        <StudentItem 
                            id={3}
                            username="Khúc Phương Nam"
                            grade="Đại học"
                            attended={12}

                        />
                        <StudentItem 
                            id={3}
                            username="Khúc Phương Nam"
                            grade="Đại học"
                            attended={12}

                        />
                        <StudentItem 
                            id={3}
                            username="Khúc Phương Nam"
                            grade="Đại học"
                            attended={12}

                        />
                        <StudentItem 
                            id={3}
                            username="Khúc Phương Nam"
                            grade="Đại học"
                            attended={12}

                        />
                        <StudentItem 
                            id={3}
                            username="Khúc Phương Nam"
                            grade="Đại học"
                            attended={12}

                        />
                        <StudentItem 
                            id={3}
                            username="Khúc Phương Nam"
                            grade="Đại học"
                            attended={12}

                        />
                        <StudentItem 
                            id={3}
                            username="Khúc Phương Nam"
                            grade="Đại học"
                            attended={12}

                        />
                    </table>
                </div>

                <div className="flex justify-end items-center mt-5 mr-7">
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </div>
                    <div className="flex mx-2 ">
                        {[1, 2, 3, 4].map((pageNumber) => (
                            <div
                                key={pageNumber}
                                className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer ${
                                    activePage === pageNumber ? 'bg-[#2d5d90] text-white' : ''
                                }`}
                                onClick={() => setActivePage(pageNumber)}
                            >
                                {pageNumber}
                            </div>
                        ))}
                    </div>
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>

    )
}