import React from 'react'
import Bg from '../../assets/banner.png'
import { Link } from 'react-router-dom'
import SearchCategories from '../../components/user/SearchCategories'
import SideBar from '../../components/user/SideBar'

export default function Home() {
    return (
        <div className="mt-6 gap-12 grid grid-cols-[1fr_2fr_1fr] w-screen ">
            <SideBar />
            <div className=''>
                <img src={Bg} alt="home" className="cursor-pointer object-cover w-full rounded-[15px] m-auto" />
                <SearchCategories />
            </div>
            <div className=''>
                right
            </div>
        </div>
    )
}