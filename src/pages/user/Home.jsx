import React from 'react'
import Bg from '../../assets/banner.png'
import { Link } from 'react-router-dom'
import SearchCategories from '../../components/user/SearchCategories'
import LeftBar from '../../components/user/LeftBar'
import RightBar from '../../components/user/RightBar'

export default function Home() {
    return (
        <div className="mt-6 gap-12 grid grid-cols-[1fr_2fr_1fr] w-full">
            <LeftBar />
            <div className=''>
                <img src={Bg} alt="home" className="cursor-pointer object-cover w-full rounded-[15px] m-auto" />
                <SearchCategories />
            </div>
            <RightBar />
        </div>
    )
}