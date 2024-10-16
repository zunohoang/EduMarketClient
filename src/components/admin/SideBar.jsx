import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
export default function SideBar() {
    const [display,setDisplay] = useState('hidden')

    const handleDisplay = () => {
        if (display == 'hidden') setDisplay('')
        else setDisplay('hidden')
    }
    return (
        <div className="w-screen h-screen ">
            <div className="w-1/4 h-full bg-[#2D5D90] text-white">
                <h1 className='text-center text-3xl p-4'>EduMarket</h1>
                <p className='text-center'>Welcome back <span className='italic font-bold underline'>Admin1</span></p>

                <NavLink to={'./dashboard'}>
                    <div className='text-xl p-3 hover:text-[#2D5D90] hover:bg-white'>
                        <h1>Dashboard</h1>
                        
                    </div>  
                </NavLink>

                <NavLink to={'./courses'}>
                    <div className=' p-3 hover:text-[#2D5D90] hover:bg-white' onClick={() => handleDisplay()}>
                        <h1 className='text-xl'>Courses Management</h1>
                    </div>
                    <ul className={`${display} *:pl-10 text-md `}>
                        <li className='hover:text-[#2D5D90] hover:bg-white'>Courses List</li>
                        <li className='hover:text-[#2D5D90] hover:bg-white'>Add Courses</li>
                    </ul>
                </NavLink>

                <NavLink to={'./students'}>
                    <div className='text-xl p-3 hover:text-[#2D5D90] hover:bg-white'>Students Management</div>
                </NavLink>

                <NavLink to={'./teachers'}>
                    <div className='text-xl p-3 hover:text-[#2D5D90] hover:bg-white'>Teachers Management</div>
                </NavLink>

                <NavLink to={'./settings'}>
                    <div className='text-xl p-3 hover:text-[#2D5D90] hover:bg-white'>WebSettings</div>
                </NavLink>
            </div>
            <div className="w-3/4 h-full">
                <Outlet/>
            </div>
            
        
        </div>
    )
}