import React from 'react';
import EnterKey from '../../EnterKey';

export default function TeacherCourse() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="bg-[#FFFFFF] rounded-md mt-5">
            <EnterKey open={open} setOpen={setOpen} />
            <div className="flex items-center p-5 gap-4">
                <img src="/teacher1.png" className="rounded-full w-16 h-16" alt="" srcset="" />
                <div>
                    <h1 className="font-semibold">Nguyễn Văn A</h1>
                    <p className="text-gray-400">Giáo viên</p>
                </div>
                <div className="ml-auto">
                    <button
                        onClick={() => setOpen(!open)}
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
                        <span className="ml-2 font-medium">Mã kích hoạt khóa học</span>
                    </button>
                </div>
            </div>
            <div className="p-5">
                <h1 className="font-semibold">Giới thiệu</h1>
                <p className="text-gray-400">Thầy có 10 năm kinh nghiệm giảng dạy ...</p>
            </div>
        </div>
    );
}