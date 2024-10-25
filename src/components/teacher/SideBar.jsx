import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function SideBar() {
    const [coursesDisplay, setCoursesDisplay] = useState(false);
    const [studentsDisplay, setStudentsDisplay] = useState(false);
    const [teachersDisplay, setTeachersDisplay] = useState(false);
    const [settingsDisplay, setSettingsDisplay] = useState(false);

    const toggleDisplay = (currentDisplay, setDisplay) => {
        setDisplay(!currentDisplay);
    };

    return (
        <div className="h-screen w-1/4">
            <div className="h-full bg-[#2D5D90] text-white">
                <h1 className='text-center text-3xl p-4'>EduMarket</h1>
                <p className='text-center'>Welcome back <span className='italic font-bold underline'>Teacher1</span></p>

                <NavLink to={'./dashboard'}>
                    <div className='text-xl p-3 hover:text-[#2D5D90] hover:bg-white'>
                        <h1>Bảng điều khiển</h1>
                    </div>
                </NavLink>

                <NavLink>
                    <div className='p-3 hover:text-[#2D5D90] hover:bg-white' onClick={() => toggleDisplay(coursesDisplay, setCoursesDisplay)}>
                        <h1 className='text-xl'>Quản lí khóa học</h1>
                    </div>
                    <ul className={`pl-10 text-md flex flex-col transition-all duration-500 ease-in-out overflow-hidden ${coursesDisplay ? 'max-h-40' : 'max-h-0'}`}>
                        <Link to={'./courses/list'} className='hover:text-[#2D5D90] hover:bg-white'>Danh sách khóa học</Link>
                        <Link to={'./courses/add'} className='hover:text-[#2D5D90] hover:bg-white'>Tạo khóa học mới</Link>
                    </ul>
                </NavLink>

                <NavLink>
                    <div className='p-3 hover:text-[#2D5D90] hover:bg-white' onClick={() => toggleDisplay(studentsDisplay, setStudentsDisplay)}>
                        <h1 className='text-xl'>Quản lí người dùng</h1>
                    </div>
                    <ul className={`pl-10 text-md flex flex-col transition-all duration-500 ease-in-out overflow-hidden ${studentsDisplay ? 'max-h-20' : 'max-h-0'}`}>
                        <Link to={'./students/list'} className='hover:text-[#2D5D90] hover:bg-white'>Danh sách người dùng</Link>
                    </ul>
                </NavLink>
                <NavLink>
                    <div className='p-3 hover:text-[#2D5D90] hover:bg-white' onClick={() => toggleDisplay(settingsDisplay, setSettingsDisplay)}>
                        <h1 className='text-xl'>Cài đặt</h1>
                    </div>
                    <ul className={`pl-10 text-md flex flex-col transition-all duration-500 ease-in-out overflow-hidden ${settingsDisplay ? 'max-h-20' : 'max-h-0'}`}>
                        <li className='hover:text-[#2D5D90] hover:bg-white'>Chung</li>
                        <li className='hover:text-[#2D5D90] hover:bg-white'>Bảo mật</li>
                    </ul>
                </NavLink>
            </div>
        </div>
    );
}
