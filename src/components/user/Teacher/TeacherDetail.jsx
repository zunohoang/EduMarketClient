import iconFB from '../../../assets/facebook-circle.png'
import iconMS from '../../../assets/messenger-circle.png'
import iconYT from '../../../assets/youtube-circle.png'
import { Link, useParams } from 'react-router-dom'
import React from 'react'
import Cookies from 'js-cookie'

export default function TeacherDetail() {

    const [teacher, setTeacher] = React.useState({})
    const { teacherId } = useParams()

    React.useEffect(() => {
        async function callApiGetTeacher() {
            console.log(process.env.VITE_API);
            const response = await fetch(`${process.env.VITE_API}/api/v1/users/${teacherId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                }
            });
            const data = await response.json();
            if (data.status) {
                console.log(data);
                setTeacher(data.data);
            }
        }
        callApiGetTeacher();
    }, [teacherId])

    return (
        <div className="grid grid-cols-12 mx-10 my-2">
            <div className="lg:col-span-5 col-span-12 bg-white rounded-md p-5">
                <div className="flex gap-5">
                    <img src={process.env.VITE_API + teacher.avt} alt="teacher" className="rounded-md w-36 h-36" />
                    <div>
                        <p className="text-md font-semibold text-[#2D5D90]">{teacher.fullName}</p>
                        <p className="text-sm mt-1">Giáo viên EduMarket</p>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-gray-500"><span className="font-medium text-[#2D5D90]">Mô tả: </span>{teacher.description}</p>
                </div>
                <div className="mt-3">
                    <p className="font-semibold text-[#2D5D90] text-md">Liên kết mạng xã hội</p>
                    <div className="flex mt-2">
                        <img src={iconFB} className='w-14' />
                        <img src={iconMS} className='w-14' />
                        <img src={iconYT} className='w-14' />
                    </div>
                </div>
            </div>
            <div className="lg:col-span-7 col-span-12 lg:ml-10 lg:mt-0 mt-10">
                <div className="flex">
                    <div>
                        <ClassCard title={"Khóa học"} isActive={true} />
                    </div>
                    <div>
                        <ClassCard title={"Bài viết"} isActive={false} />
                    </div>
                </div>
                <div className=" h-[1px] bg-[rgba(0,0,0,0.1)]"></div>
                <div className='p-4 px-6 mt-5 bg-white rounded-md'>
                    <p className='text-[#2D5D90] text-md font-medium'>Tất cả khóa học</p>
                    <div className='mt-3 flex flex-col gap-5'>
                        {
                            teacher.coursesManagement && teacher.coursesManagement.map((course, index) => (
                                <Link
                                    to={`/courses/${course._id}`}
                                    index={index} className='flex gap-3 shadow-sm hover:shadow-md p-3 rounded-md'>
                                    <img src={process.env.VITE_API + course.image} className='w-16 h-16 rounded-sm' alt="" />
                                    <div>
                                        <h1 className='font-bold text-sky-800'>{course.name}</h1>
                                        <p className='text-sm font-medium text-sky-950'>Giáo viên: {teacher.fullName}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

function ClassCard({ title, isActive }) {
    return (
        <div className="flex items-center justify-center px-4 h-8 cursor-pointer"
            style={{
                color: isActive ? "#2D5D90" : "#9CA3AF",
                borderBottom: isActive ? "2px solid #2D5D90" : "none"
            }}
        >
            <p className="text-md font-semibold">{title}</p>
        </div>
    )
}
