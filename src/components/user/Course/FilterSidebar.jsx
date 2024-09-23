function Categories({ title }) {
    return (
        <div className="text-[#1B1B1B] flex justify-center items-center bg-[#EAEDF0] text-[13.125px] px-4 pt-2 pb-2  rounded-lg shadow-sm">
            <p>{title}</p>
        </div>
    )
}

export default function FilterSidebar() {
    return (
        <div className="w-[325px] mt-5">
            <p className="text-base font-medium mt-4 mb-3">Tìm kiếm</p>
            <div className="flex items-center rounded-md bg-[#EEF0F3] px-3">
                <input type="text" placeholder="Nhập tên khóa học" className="font-normal text-sm px-2 w-full p-3 outline-none rounded-md text-[#1B1B1B] bg-[#EEF0F3]" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#949CA6] size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <p className="text-base font-medium mt-4 mb-3">Môn học</p>
            <div className="flex gap-2 flex-wrap mb-8">
                <Categories title="Toán" />
                <Categories title="Văn" />
                <Categories title="Anh" />
                <Categories title="Lý" />
                <Categories title="Hóa" />
                <Categories title="Sinh" />
                <Categories title="Sử" />
            </div>
            <div className="flex justify-end gap-3">
                <button className="bg-[#2E5E97] text-white py-2.5 px-8 rounded-lg mt-3">Đặt lại</button>
                <button className="bg-[#2E5E97] text-white py-2.5 px-8 rounded-lg mt-3">Lọc</button>
            </div>
        </div>
    )
}