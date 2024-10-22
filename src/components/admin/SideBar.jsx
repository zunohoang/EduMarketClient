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
                        <h1>Dashboard</h1>
                    </div>
                </NavLink>

                <NavLink to={'./courses'}>
                    <div className='p-3 hover:text-[#2D5D90] hover:bg-white' onClick={() => toggleDisplay(coursesDisplay, setCoursesDisplay)}>
                        <h1 className='text-xl'>Courses Management</h1>
                    </div>
                    <ul className={`${coursesDisplay} pl-10 text-md flex flex-col`}>
                        <Link to={'./courses/list'} className='hover:text-[#2D5D90] hover:bg-white'>Courses List</Link>
                        <Link to={'./courses/add'} className='hover:text-[#2D5D90] hover:bg-white'>Add Courses</Link>
                    </ul>
                </NavLink>

                <NavLink to={'./students'}>
                    <div className='p-3 hover:text-[#2D5D90] hover:bg-white' onClick={() => toggleDisplay(studentsDisplay, setStudentsDisplay)}>
                        <h1 className='text-xl'>Students Management</h1>
                    </div>
                    <ul className={`${studentsDisplay} pl-10 text-md`}>
                        <li className='hover:text-[#2D5D90] hover:bg-white'>Students List</li>
                        <li className='hover:text-[#2D5D90] hover:bg-white'>Add Students</li>
                    </ul>
                </NavLink>

                <NavLink to={'./teachers'}>
                    <div className='p-3 hover:text-[#2D5D90] hover:bg-white' onClick={() => toggleDisplay(teachersDisplay, setTeachersDisplay)}>
                        <h1 className='text-xl'>Teachers Management</h1>
                    </div>
                    <ul className={`${teachersDisplay} pl-10 text-md`}>
                        <li className='hover:text-[#2D5D90] hover:bg-white'>Teachers List</li>
                        <li className='hover:text-[#2D5D90] hover:bg-white'>Add Teacher</li>
                    </ul>
                </NavLink>

                <NavLink to={'./settings'}>
                    <div className='p-3 hover:text-[#2D5D90] hover:bg-white' onClick={() => toggleDisplay(settingsDisplay, setSettingsDisplay)}>
                        <h1 className='text-xl'>Web Settings</h1>
                    </div>
                    <ul className={`${settingsDisplay} pl-10 text-md`}>
                        <li className='hover:text-[#2D5D90] hover:bg-white'>General Settings</li>
                        <li className='hover:text-[#2D5D90] hover:bg-white'>Security Settings</li>
                    </ul>
                </NavLink>
            </div>
        </div>
    );
}
