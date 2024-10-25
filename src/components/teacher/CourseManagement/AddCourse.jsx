import { useState } from "react"
import { Link } from "react-router-dom"
import InputMessage from "../../user/InputMessage"
export default function AddCourse() {
    const [title,setTitle] = useState("")
    const [subject,setSubject] = useState("")
    const [price,setPrice] = useState("")
    const [thumbnail,setThumbnail] = useState("")
    const [confirm,setConfirm] = useState('hidden')
    const [teacher,setTeacher] = useState('')
    const [desc,setDesc] = useState("")


    const [titleTouched, setTitleTouched] = useState(false)
    const [subjectTouched, setSubjectTouched] = useState(false)
    const [priceTouched, setPriceTouched] = useState(false)
    const [thumbnailTouched, setThumbnailTouched] = useState(false)
    const [teacherTouched, setTeacherTouched] = useState(false)
    const isEmpty = (value) => value.trim() === ""

    // const selectedOption = document.querySelectorAll("option")
    // console.log(selectedOption);
    const handleDef = (e) => {
        e.preventDefault();

        setTitleTouched(true)
        setPriceTouched(true)
        setSubjectTouched(true)
        setThumbnailTouched(true)
        setTeacherTouched(true)

        if (!isEmpty(subject) && 
            !isEmpty(title) && 
            !isEmpty(price) &&
            !isEmpty(thumbnail)&&
            !isEmpty(teacher)) {
            setConfirm('') 
        } else {
            setTitleTouched(true)
            setPriceTouched(true)
            setSubjectTouched(true)
            setThumbnailTouched(true)
            setTeacherTouched(true)
        }
    }
    const handleConfirm = () => {
        console.log(thumbnail,title,desc,subject,price,teacher)
    }
    return (
        <div className="relative flex justify-center items-centers w-full h-screen bg-[#f4f7fe]">
            <div className="my-auto w-[90%] bg-white px-2 py-4 ">
                <h1 className="text-2xl font-bold text-center text-[#2b3674]">Tạo khóa học mới</h1>
                <form onSubmit={handleDef} className="flex flex-col *:flex *:flex-col *:mx-4 *:my-2">
                    <div className="">
                        <label htmlFor="image">Chọn ảnh nền</label>
                        <input
                        value={thumbnail}
                        onChange={(e) => { setThumbnail(e.target.value); setThumbnailTouched(true); console.log(e.target.value)}}
                        onBlur={() => setThumbnailTouched(true)}
                        accept="image/png, image/gif, image/jpeg"
                        className="block w-full text-sm text-white border border-gray-300 rounded-lg cursor-pointer bg-cyan-700 p-1" id="file_input" type="file" />
                        {thumbnailTouched && isEmpty(thumbnail) && <InputMessage message="Hãy gửi ảnh thumbnail"/>}
                        <p className="mt-1 text-sm text-[#2d5d90]">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>

                    <div className="">
                        <label htmlFor="title">Tiêu đề</label>
                        <div className="border-solid border-2 border-gray-500 has-[:focus]:outline online-none  outline-2 outline-[#2d5d90] rounded-lg p-1">
                            <input 
                            value={title}
                            onChange={(e) => { setTitle(e.target.value); setTitleTouched(true); }}
                            onBlur={() => setTitleTouched(true)}
                            placeholder="Vật lí" className="outline-none w-full" type="text" name="title" id=""/>
                        </div>
                        {titleTouched && isEmpty(title) && <InputMessage message="Không được bỏ trống tiêu đề"/>}

                    </div>

                    <div className="">
                        <label htmlFor="desc">Mô tả</label>
                        <div className="border-solid border-2 border-gray-500 has-[:focus]:outline online-none  outline-2 outline-[#2d5d90] rounded-lg p-1">
                            <textarea
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc} placeholder="Mất gốc đén 8 điểm" className="outline-none w-full" type="text" name="desc" id=""/>                    
                        </div>
                    </div>

                    <div className="">
                        <label htmlFor="subjects">Môn học</label>
                        <div className="border-solid border-2 border-gray-500 has-[:focus]:outline online-none  outline-2 outline-[#2d5d90] rounded-lg p-1">
                            <select
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value); setSubjectTouched(true)}}
                            onBlur={() => setSubjectTouched(true)}
                            className="outline-none w-full" name="subjects" id="">
                                <option></option>
                                <option>Toán học</option>
                                <option>Vật lí</option>
                                <option>Hóa học</option>
                                <option>Văn học</option>
                                <option>Sinh học</option>
                                <option>Tiếng Anh</option>
                                <option>Lịch sử</option>
                                <option>Địa lí</option>
                            </select>     
                        </div>
                            {subjectTouched && isEmpty(subject) && <InputMessage message="Hãy chọn môn học"/>}                   
                    </div>
                    
                    <div className="">
                        <label htmlFor="teacher">Giảng viên</label>
                        <div className="border-solid border-2 border-gray-500 has-[:focus]:outline online-none  outline-2 outline-[#2d5d90] rounded-lg p-1">
                            <input 
                            value={teacher}
                            onChange={(e) => { setTeacher(e.target.value); setTeacherTouched(true); }}
                            onBlur={() => setTeacherTouched(true)}
                            placeholder="Khúc Phương Nam" className="outline-none w-full" type="text" name="teacher" id=""/>
                        </div>
                        {teacherTouched && isEmpty(teacher) && <InputMessage message="Không được bỏ trống tên giảng viên"/>}

                    </div>

                    <div className="">
                        <label htmlFor="price">Giá tiền (VNĐ)</label>
                        <div className="border-solid border-2 border-gray-500 has-[:focus]:outline online-none  outline-2 outline-[#2d5d90] rounded-lg p-1">
                            <input 
                            min={10000}
                            value={price}
                            onChange={(e) => { setPrice(e.target.value); setPriceTouched(true); }}
                            onBlur={() => setPriceTouched(true)}
                            className="outline-none w-full" type="number" placeholder="VNĐ" name="price" id=""/>
                        </div>
                        {priceTouched && isEmpty(price) && <InputMessage message="Hãy điền giá của khóa học"/>}                   
                        
                    </div>

                    

                     <div className="flex justify-end items-end ">
                        <button type="submit" className="hover:bg-[#1a65b6] w-1/4 text-center bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg"> + Tạo khóa học</button>
                    </div>   
                </form>
            </div>
            {/* Confirm Box */}
            <div className={`${confirm} absolute w-full h-screen flex justify-center items-center bg-black bg-opacity-15`}>
                <div className="relative bg-white p-8 rounded-xl">
                    <div onClick={() => { setConfirm('hidden') }} className="absolute top-2 right-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h1 className="text-center mb-5">XÁC NHẬN TẠO TÀI KHOẢN</h1>
                    <div className="flex justify-center items-center gap-3">
                        <Link to={'../teachers/list'}>
                            <button onClick={() => { handleConfirm(); setConfirm('hidden'); }} type="submit" className="hover:bg-[#1a65b6]  border-2 border-solid border-gray-300  bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">Có</button>
                        </Link>
                        <button onClick={() => { setConfirm('hidden') }} type="submit" className="hover:bg-gray-300 border-2 border-solid border-gray-300 bg-white text-sm text-[#2D5D90] px-5 py-2 rounded-lg">Không</button>
                    </div>
                </div>
            </div>
        </div>
    )
}