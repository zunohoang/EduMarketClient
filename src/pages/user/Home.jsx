import React from 'react'
import Bg from '../../assets/banner.webp'
import { Link } from 'react-router-dom'
import SearchCategories from '../../components/user/SearchCategories'
import LeftBar from '../../components/user/LeftBar'
import RightBar from '../../components/user/RightBar'
import Teachers from '../../components/user/Teachers'
import CourseList from '../../components/user/CourseList'
import UserGuideModal from '../../components/GuideWebModal'

export default function Home() {
    return (
        <div className="pt-[80px] lg:gap-12 w-full grid grid-cols-12 bg-gradient-to-b from-blue-100 to-[#F7F8F9]">
            <UserGuideModal />
            <div className='lg:col-span-3 md:col-span-3 md:block hidden'>
                <LeftBar />
            </div>
            <div className='lg:col-span-6 md:col-span-9 px-3 col-span-12'>
                <img src={Bg} alt="home" className="cursor-pointer object-cover w-full rounded-[15px] m-auto" />
                <SearchCategories />
                <Teachers />
                <CourseList />
            </div>
            <div className='lg:col-span-3 lg:block hidden'>
                <RightBar />
            </div>
        </div>
    )
}