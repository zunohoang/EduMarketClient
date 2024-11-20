import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function TeacherList() {
    const [teachers, setTeachers] = React.useState([])

    React.useEffect(() => {
        async function callApiGetTeachers() {
            console.log(process.env.VITE_API);
            const response = await fetch(`${process.env.VITE_API}/api/v1/users/teachers`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                }
            });
            const data = await response.json();
            if (data.status) {
                console.log(data.data.teachers);
                setTeachers(data.data.teachers);
                console.log(data);
            }
        }
        callApiGetTeachers();
    }, [])

    return (
        <div className="m-2 mx-6 rounded-md p-5 bg-white">
            <h1 className="text-[#2D5D90] text-lg font-bold">Tất cả giáo viên</h1>
            <div className="grid xl:grid-cols-7 gap-6 lg:grid-cols-5 mt-5 md:grid-cols-4 grid-cols-3">
                {
                    teachers && teachers.map((teacher, index) => (
                        <TeacherCard key={index} _id={teacher._id} fullName={teacher.fullName} img={teacher.avt} />
                    ))
                }
            </div>
        </div>
    )
}

function TeacherCard({ fullName, img, _id }) {
    return (
        <Link className="rounded-md bg-white hover:scale-105 duration-500" to={`/teachers/${_id}`}>
            <img src={process.env.VITE_API + img} alt="teacher" className="rounded-md" />
            <h1 className="text-[#2D5D90] text-md font-medium mt-3">{fullName}</h1>
        </Link>
    )
}