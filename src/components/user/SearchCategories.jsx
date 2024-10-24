import React, { useEffect, useState } from 'react'

function Categories({ title, setOpen, open, setContent }) {

    return (
        <div
            onClick={() => {
                setOpen(!open)
                setContent(title)
            }}
            className="text-[#2E5E97] bg-[#F3F5F6] text-[13.125px] px-4 pt-2 pb-1.5  rounded-lg shadow-sm"
        >
            {title}
        </div >
    )

}

export default function SearchCategories() {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("");

    return (
        <div className="bg-[#FFFFFF] rounded-xl p-5 mt-8">
            {
                open && <SearchModal setOpen={setOpen} open={open} value={content} />
            }
            <h3 className="text-[#355676] text-[15.75px] font-bold">Bạn đang tìm kiếm gì ?</h3>
            <div className="flex flex-wrap gap-3 mt-3">
                <Categories title="Lớp học" setOpen={setOpen} open={open} setContent={setContent} />
                <Categories title="Khóa học" setOpen={setOpen} open={open} setContent={setContent} />
                <Categories title="Giáo viên" setOpen={setOpen} open={open} setContent={setContent} />
                <Categories title="Trung tâm" setOpen={setOpen} open={open} setContent={setContent} />
                <Categories title="Tài liệu" setOpen={setOpen} open={open} setContent={setContent} />
                <Categories title="Sự kiện" setOpen={setOpen} open={open} setContent={setContent} />
                <Categories title="Thầy Mạnh Dũng" setOpen={setOpen} open={open} setContent={setContent} />
                <Categories title="Khóa học" setOpen={setOpen} open={open} setContent={setContent} />
                <Categories title="Giáo viên" setOpen={setOpen} open={open} setContent={setContent} />
                <Categories title="Trung tâm" setOpen={setOpen} open={open} setContent={setContent} />
            </div>
        </div>
    )
}

function SearchModal({ setOpen, open, value }) {
    const [content, setContent] = useState("");
    useEffect(() => {
        setContent(value)
    }, [value])
    return (
        <div className='z-10 fixed w-full h-screen bg-black top-0 left-0 bg-opacity-50' onClick={() => { open && setOpen(false) }}>
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