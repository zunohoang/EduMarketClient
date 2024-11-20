import { useState } from "react";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function EnterKey({ setOpen, open }) {
    const [key, setKey] = useState('')
    const [data, setData] = useState({ key: { key: '', courses: [] } });
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const activeKey = async () => {
        const response = await fetch(`${process.env.VITE_API}/api/v1/access-keys/active`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({
                key: key,
                userId: Cookies.get('id')
            })
        });

        const data = await response.json();

        if (data.status) {
            alert('Kích hoạt thành công');
            console.log(data.key)
            setData({ key: data.key });
            setActive(true);
            setOpen(false);
            // chuyen huong /profile
            navigate('/profile');
        } else {
            setActive(false);
            alert('Kích hoạt thất bại');
        }
    }


    return (
        <div
            className={`fixed z-10 w-full h-screen top-0 left-0 flex items-center justify-center bg-opacity-50 transition-all bg-black ${open ? '' : 'hidden'} duration-500 ease-in-out`}
            onClick={() => { open && setOpen(false) }}
        >
            <div className={`w-[80%] bg-[#FFFFFF] rounded-lg p-5 max-w-xl`} onClick={(e) => e.stopPropagation()}>
                {
                    active ? (
                        <ActiveOk key={data.key.key} courses={data.key.courses} setActive={setActive} />
                    ) : (
                        <div className="text-sky-900 flex flex-col gap-3 items-center">
                            <b className="text-sky-900 font-extrabold text-center">NHẬP MÃ KÍCH HOẠT</b>
                            <input value={key}
                                onChange={(e) => setKey(e.target.value)}
                                type="text" className="bg-sky-50 w-full border-2 p-2 outline-sky-400 rounded-md" placeholder="Nhập mã kích hoạt" />
                            <button onClick={activeKey} className="flex items-center justify-center w-full bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">
                                <span className="ml-2 font-medium">Kích hoạt</span>
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}


function ActiveOk({ key, courses, setActive }) {
    const navigate = useNavigate();
    return (
        <div className="mt-1">
            <h2 className="text-xl font-bold text-sky-800">Bạn vừa nhận được từ mã {key}</h2>
            <div className="grid md:grid-cols-2 gap-5 my-10">
                {
                    courses && courses.map(course => (
                        <div key={course._id} className='flex gap-3 shadow-sm'>
                            <img src={`${process.env.VITE_API}/${course.image}`} className='w-16 h-16 rounded-sm' alt="" />
                            <div>
                                <h1 className='font-bold text-sky-800'>{course.name}</h1>
                                <p className='text-sm font-medium text-sky-950'>Giáo viên: {course.instructor ? course.instructor.fullName : "Đang cập nhật"}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => {
                setActive(false);
                navigate("/profile");
            }} className="flex items-center justify-center w-full bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">
                <span className="ml-2 font-medium">Tới ngay</span>
            </button>
        </div>
    )
}