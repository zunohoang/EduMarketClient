import React from 'react'
import { Link } from 'react-router-dom'

export default function TeacherList() {
    return (
        <div className="m-2 mx-6 rounded-md p-5 bg-white">
            <h1 className="text-[#2D5D90] text-lg font-bold">Tất cả giáo viên</h1>
            <div className="grid xl:grid-cols-7 gap-6 lg:grid-cols-5 mt-5 md:grid-cols-4 grid-cols-3">
                <TeacherCard fullName="Nguyễn Văn Hoàng" img="/teacher1.png" id={1} />
                <TeacherCard fullName="Nguyễn Văn Hoàng" img="/teacher1.png" id={1} />
                <TeacherCard fullName="Nguyễn Văn Hoàng" img="/teacher1.png" id={1} />
                <TeacherCard fullName="Nguyễn Văn Hoàng" img="/teacher1.png" id={1} />
                <TeacherCard fullName="Nguyễn Văn Hoàng" img="/teacher1.png" id={1} />
                <TeacherCard fullName="Nguyễn Văn Hoàng" img="/teacher1.png" id={1} />
                <TeacherCard fullName="Nguyễn Văn Hoàng" img="/teacher1.png" id={1} />
                <TeacherCard fullName="Nguyễn Văn Hoàng" img="/teacher1.png" id={1} />
                <TeacherCard fullName="Nguyễn Văn Hoàng" img="/teacher1.png" id={1} />
                <TeacherCard fullName="Nguyễn Văn Hoàng" img="/teacher1.png" id={1} />
                <TeacherCard fullName="Nguyễn Văn Hoàng" img="/teacher1.png" id={1} />
                <TeacherCard fullName="Nguyễn Văn Hoàng" img="/teacher1.png" id={1} />
            </div>
        </div>
    )
}

function TeacherCard({ fullName, img, id }) {
    return (
        <Link className="rounded-md bg-white hover:scale-105 duration-500" to={`/teachers/${id}`}>
            <img src={img} alt="teacher" className="rounded-md" />
            <h1 className="text-[#2D5D90] text-md font-medium mt-3">{fullName}</h1>
        </Link>
    )
}