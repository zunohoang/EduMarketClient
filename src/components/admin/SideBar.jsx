import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function SideBar() {
    const [coursesDisplay, setCoursesDisplay] = useState('hidden');
    const [studentsDisplay, setStudentsDisplay] = useState('hidden');
    const [teachersDisplay, setTeachersDisplay] = useState('hidden');
    const [settingsDisplay, setSettingsDisplay] = useState('hidden');

    const toggleDisplay = (section, setSectionDisplay) => {
        setSectionDisplay(section === 'hidden' ? '' : 'hidden');
    };

    return (
        <div className="h-screen w-1/4">
            <div className="h-full bg-[#2D5D90] text-white">
                <h1 className='text-center text-3xl p-4'>EduMarket</h1>
                <p className='text-center'>Welcome back <span className='italic font-bold underline'>Admin1</span></p>

                <NavLink to={'./dashboard'}>
                    <div className='text-xl p-3 hover:text-[#2D5D90] hover:bg-white'>
                        <h1>Bảng điều khiển</h1>
                    </div>
                </NavLink>

                <NavLink>
                    <div className='p-3 hover:text-[#2D5D90] hover:bg-white' onClick={() => toggleDisplay(coursesDisplay, setCoursesDisplay)}>
                        <h1 className='text-xl'>Quản lí khóa học</h1>
                    </div>
                    <ul className={`${coursesDisplay} pl-10 text-md flex flex-col`}>
                        <Link to={'./courses/list'} className='hover:text-[#2D5D90] hover:bg-white'>Danh sách khóa học</Link>
                        <Link to={'./courses/add'} className='hover:text-[#2D5D90] hover:bg-white'>Tạo khóa học mới</Link>
                    </ul>
                </NavLink>

                <NavLink>
                    <div className='p-3 hover:text-[#2D5D90] hover:bg-white' onClick={() => toggleDisplay(studentsDisplay, setStudentsDisplay)}>
                        <h1 className='text-xl'>Quản lí người dùng</h1>
                    </div>
                    <ul className={`${studentsDisplay} pl-10 text-md flex flex-col`}>
                        <Link to={'./students/list'} className='hover:text-[#2D5D90] hover:bg-white'>Danh sách người dùng</Link>
                    </ul>
                </NavLink>

                <NavLink>
                    <div className='p-3 hover:text-[#2D5D90] hover:bg-white' onClick={() => toggleDisplay(teachersDisplay, setTeachersDisplay)}>
                        <h1 className='text-xl'>Quản lí giảng viên</h1>
                    </div>
                    <ul className={`${teachersDisplay} pl-10 text-md flex flex-col`}>
                        <Link to={'./teachers/list'} className='hover:text-[#2D5D90] hover:bg-white'>Danh sách giảng viên</Link>
                        <Link to={'./teachers/add'} className='hover:text-[#2D5D90] hover:bg-white'>Cấp quyền giảng viên</Link>
                    </ul>
                </NavLink>

                <NavLink>
                    <div className='p-3 hover:text-[#2D5D90] hover:bg-white' onClick={() => toggleDisplay(settingsDisplay, setSettingsDisplay)}>
                        <h1 className='text-xl'>Cài đặt</h1>
                    </div>
                    <ul className={`${settingsDisplay} pl-10 text-md`}>
                        <li className='hover:text-[#2D5D90] hover:bg-white'>Chung</li>
                        <li className='hover:text-[#2D5D90] hover:bg-white'>Bảo mật</li>
                    </ul>
                </NavLink>
            </div>
        </div>
    );
}
