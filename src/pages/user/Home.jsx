import React from 'react'
import Bg from '../../assets/banner.png'
import { Link } from 'react-router-dom'
import SearchCategories from '../../components/user/SearchCategories'
import LeftBar from '../../components/user/LeftBar'
import RightBar from '../../components/user/RightBar'
import Teachers from '../../components/user/Teachers'

export default function Home() {
    return (
        <div className="pt-[80px] gap-12 flex w-full bg-gradient-to-b from-blue-100 to-[#F7F8F9]">
            <div className='w-[30%]'>
                <LeftBar />
            </div>
            <div className='w-[50%]'>
                <img src={Bg} alt="home" className="cursor-pointer object-cover w-full rounded-[15px] m-auto" />
                <SearchCategories />
                <Teachers />
            </div>
            <div className='w-[30%]'>
                <RightBar />
            </div>
        </div>
    )
}