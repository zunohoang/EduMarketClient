import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseItem from "./CourseItem";

export default function CourseList() {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [confirm,setConfirm] = useState('hidden')
    const [activePage,setActivePage] = useState(1);
    
    const courses = [
        {
            id: 1,
            title: "Lấy gốc cấp tốc",
            subject: "Vật lí",
            grade: "Lớp 12",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            attended: 230,
            price: 230000
        },
        {
            id: 2,
            title: "Lấy gốc cấp tốc",
            subject: "Vật lí",
            grade: "Lớp 12",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            attended: 230,
            price: 230000
        },
        {
            id: 3,
            title: "Lấy gốc cấp tốc",
            subject: "Vật lí",
            grade: "Lớp 12",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            attended: 230,
            price: 230000
        },
        {
            id: 4,
            title: "Lấy gốc cấp tốc",
            subject: "Vật lí",
            grade: "Lớp 12",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            attended: 230,
            price: 230000
        },
        {
            id: 5,
            title: "Lấy gốc cấp tốc",
            subject: "Vật lí",
            grade: "Lớp 12",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            attended: 230,
            price: 230000
        },
        {
            id: 6,
            title: "Lấy gốc cấp tốc",
            subject: "Vật lí",
            grade: "Lớp 12",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            attended: 230,
            price: 230000
        },
        {
            id: 7,
            title: "Lấy gốc cấp tốc",
            subject: "Vật lí",
            grade: "Lớp 12",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            attended: 230,
            price: 230000
        },
        {
            id: 8,
            title: "Lấy gốc cấp tốc",
            subject: "Vật lí",
            grade: "Lớp 12",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            attended: 230,
            price: 230000
        },
        {
            id: 9,
            title: "Lấy gốc cấp tốc",
            subject: "Vật lí",
            grade: "Lớp 12",
            teacher: "Nguyễn Văn Hoàng",
            date: "23/08/2012",
            attended: 230,
            price: 230000
        },
        
    ];

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            // Select all
            const allCourseIds = courses.map((course) => course.id);
            setSelectedItems(allCourseIds);
        } else {
            // Deselect all
            setSelectedItems([]);
        }
    };

    const handleCheckboxChange = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handleDef = (e) => {
        e.preventDefault();

        if (selectedItems.length) {
            console.log(selectedItems)
            setConfirm("");
        } else {
            alert("Bạn chưa chọn kháo học nào")
        }

    }
    const handleConfirm = () => {
        console.log(selectedItems)
    }

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
                    <h1 className="text-2xl font-bold text-[#2b3674]">Danh sách khóa học</h1>
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
                                <th>
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={selectAll}
                                    />
                                </th>
                                <th><span>ID</span></th>
                                <th><span>TÊN KHÓA HỌC</span></th>
                                <th><span>MÔN</span></th>
                                <th><span>LỚP</span></th>
                                <th><span>GIẢNG VIÊN</span></th>
                                <th><span>NGÀY TẠO</span></th>
                                <th><span>SỐ NGƯỜI THAM GIA</span></th>
                                <th><span>GIÁ TIỀN</span></th>
                                <th>
                                    <div className="cursor-pointer text-black flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <CourseItem
                                    key={course.id}
                                    id={course.id}
                                    title={course.title}
                                    subject={course.subject}
                                    grade={course.grade}
                                    teacher={course.teacher}
                                    date={course.date}
                                    attended={course.attended}
                                    price={course.price}
                                    isChecked={selectedItems.includes(course.id)}
                                    onChange={() => handleCheckboxChange(course.id)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between mt-5 mr-7">
                    <div className="">
                        <button onClick={(e) => {handleDef(e)}} type="submit" className="hover:bg-green-600  border-2 border-solid border-gray-300  bg-green-800 text-sm text-white px-5 py-2 rounded-lg">Lấy code khóa học</button>    
                    </div>
                    <div className="flex justify-end items-center">
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
            {/* Confirm Box */}
            <div className={`${confirm} absolute w-full h-screen flex justify-center items-center bg-black bg-opacity-15`}>
                <div className="relative bg-white p-8 rounded-xl w-3/4">
                    <div onClick={() => { setConfirm('hidden') }} className="absolute top-2 right-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h1 className="text-center mb-5 font-bold">XÁC NHẬN TẠO CODE KHÓA HỌC</h1>
                    <div className="overflow-scroll">
                    <table className="table-auto w-fit text-center [&_th]:px-5 [&_th]:py-2 [&_th]:text-[#b8c1d9] [&_td]:font-semibold [&_td]:py-4 [&_td]:px-5 *:whitespace-nowrap">
                        <thead>
                            <tr className="w-full">
                                <th>
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={selectAll}
                                    />
                                </th>
                                <th><span>ID</span></th>
                                <th><span>TÊN KHÓA HỌC</span></th>
                                <th><span>MÔN</span></th>
                                <th><span>LỚP</span></th>
                                <th><span>GIẢNG VIÊN</span></th>
                                <th><span>NGÀY TẠO</span></th>
                                <th><span>SỐ NGƯỜI THAM GIA</span></th>
                                <th><span>GIÁ TIỀN</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                selectedItems.includes(course.id) &&
                                <CourseItem
                                    key={course.id}
                                    id={course.id}
                                    title={course.title}
                                    subject={course.subject}
                                    grade={course.grade}
                                    teacher={course.teacher}
                                    date={course.date}
                                    attended={course.attended}
                                    price={course.price}
                                    isChecked={selectedItems.includes(course.id)}
                                    onChange={() => handleCheckboxChange(course.id)}
                                />
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>TỔNG SỐ TIỀN</td>
                                <td>
                                    {`${handlePrice()}`}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    <div className="flex justify-center items-center gap-3 mt-5 ">
                        <button onClick={() => { handleConfirm(); setConfirm('hidden'); }} type="submit" className="hover:bg-[#1a65b6]  border-2 border-solid border-gray-300  bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">Có</button>
                        <button onClick={() => { setConfirm('hidden') }} type="submit" className="hover:bg-gray-300 border-2 border-solid border-gray-300 bg-white text-sm text-[#2D5D90] px-5 py-2 rounded-lg">Không</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
