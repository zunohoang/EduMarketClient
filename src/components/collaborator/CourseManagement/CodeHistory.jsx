import { useEffect, useState } from "react";
import CodeItem from "./CodeItem";

export default function CourseList() {

    const [activePage,setActivePage] = useState(1);
    const totalPages = 4; 

    const handleNextPage = () => {
        if (activePage < totalPages) setActivePage(activePage + 1);
    };

    const handlePreviousPage = () => {
        if (activePage > 1) setActivePage(activePage - 1);
    };
    const courses = [
        {
            id: 1,
            title: "Lấy gốc cấp tốc",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            price: 230000,
            code: "3wYzQ13",
            image: "../../../assets/banking1.jpg"
            
        },
        {
            id: 2,
            title: "Lấy gốc cấp tốc",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            price: 230000,
            code: "3wYzQ13",
            image: "../../../assets/banking1.jpg"
        },
        {
            id: 3,
            title: "Lấy gốc cấp tốc",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            price: 230000,
            code: "3wYzQ13",
            image: "../../../assets/banking1.jpg"
        },
        {
            id: 4,
            title: "Lấy gốc cấp tốc",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            price: 230000,
            code: "3wYzQ13",
            image: "../../../assets/banking1.jpg"
        },
        {
            id: 5,
            title: "Lấy gốc cấp tốc",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            price: 230000,
            code: "3wYzQ13",
            image: "../../../assets/banking1.jpg"
        },
        {
            id: 6,
            title: "Lấy gốc cấp tốc",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            price: 230000,
            code: "3wYzQ13",
            image: "../../../assets/banking1.jpg"
        },
        {
            id: 7,
            title: "Lấy gốc cấp tốc",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            price: 230000,
            code: "3wYzQ13",
            image: "../../../assets/banking1.jpg"
        },
        {
            id: 8,
            title: "Lấy gốc cấp tốc",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            price: 230000,
            code: "3wYzQ13",
            image: "../../../assets/banking1.jpg"
        },
        {
            id: 9,
            title: "Lấy gốc cấp tốc",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            price: 230000,
            code: "3wYzQ13",
            image: '../../../assets/banking1.jpg'
        },
        
    ];


    let handlePrice = () => {
        let total = 0;
        courses.map((course) => {
            if (selectedItems.includes(course.id)) {
                total+=course.price
            }
        })
        return `${total} VNĐ`;
    }

    return (
        <div className="relative flex justify-center items-centers w-full h-screen bg-[#f4f7fe]">
            <div className="my-auto w-[90%] bg-white px-2 py-4 rounded-xl">
                <div className="flex justify-between my-3 mx-4">
                    <h1 className="text-2xl font-bold text-[#2b3674]">Lịch sử tạo code</h1>
                    <div className="flex w-fit bg-white rounded-xl relative border-solid border-2 border-[#f4f7fe]">
                        <div className="px-3 py-1 w-fit h-fit">
                            <input className="outline-none mr-6" type="text" placeholder="Tìm kiếm" />
                        </div>
                        <div className="-translate-y-1/2 origin-center absolute top-1/2 right-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#2b3674]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="overflow-scroll">
                    <table className="table-auto w-full text-center [&_th]:px-5 [&_th]:py-2 [&_th]:text-[#b8c1d9] [&_td]:font-semibold [&_td]:py-4 [&_td]:px-5 *:whitespace-nowrap">
                        <thead>
                            <tr className="w-full">
                                <th><span>ID</span></th>
                                <th><span>TÊN KHÓA HỌC</span></th>
                                <th><span>GIẢNG VIÊN</span></th>
                                <th><span>NGÀY TẠO</span></th>
                                <th><span>GIÁ TIỀN</span></th>
                                <th><span>CODE</span></th>
                                <th><span>THANH TOÁN</span></th>

                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <CodeItem
                                    key={course.id}
                                    id={course.id}
                                    title={course.title}
                                    teacher={course.teacher}
                                    date={course.date}
                                    attended={course.attended}
                                    price={course.price}
                                    code={course.code}
                                    image={course.image}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end items-center mt-5 mr-7">
                    <div className="cursor-pointer" onClick={handlePreviousPage}>
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
                    <div className="cursor-pointer" onClick={handleNextPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
            </div>
            
        </div>
    );
}
