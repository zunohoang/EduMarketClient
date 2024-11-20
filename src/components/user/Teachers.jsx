import Teacher1 from '../../assets/teacher1.png'
import { Link } from 'react-router-dom'
import React from 'react'


function TeacherCard({ _id, fullName, img }) {
    const [imgSrc, setImgSrc] = React.useState('');
    React.useEffect(() => {
        const encodedImgSrc = encodeURI((process.env.VITE_API + img).replace('\\', '/'));
        setImgSrc(encodedImgSrc);
    }, [img]);
    return (
        <Link to={`/teachers/${_id}`} className="w-[120px] h-[174px] min-w-[120px] rounded-xl flex justify-center items-end p-2" style={{
            backgroundImage: `url("${imgSrc}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <b className='text-white text-[12px] font-bold w-[80%] text-center bg-black bg-opacity-20 rounded-md'>{fullName}</b>
        </Link>
    )
}

export default function Teachers() {
    const [teachers, setTeachers] = React.useState([])

    React.useEffect(() => {
        async function callApiGetTeachers() {
            console.log(process.env.VITE_API);
            const response = await fetch(`${process.env.VITE_API}/api/v1/users/teachers`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
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
        <div className="bg-[#FFFFFF] rounded-xl p-5 pb-0 mt-8 w-full">
            <div className="flex">
                <h3 className="text-[#355676] text-[15.75px] font-bold">Giáo viên EduMarket</h3>
                <Link to={`/teachers`} className="ml-auto text-[#2D5D90] hover:text-sky-700" >Xem tất cả</Link>
            </div>
            <div className="flex pt-4 pb-6 gap-6 hover:overflow-x-auto overflow-x-hidden h-[220px]">
                {
                    teachers && teachers.map((teacher, index) => (
                        <TeacherCard key={index} _id={teacher._id} fullName={teacher.fullName} img={teacher.avt} />
                    ))
                }
            </div>
        </div>
    )
}