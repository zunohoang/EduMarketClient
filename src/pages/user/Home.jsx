import React from 'react'
import Bg from '../../assets/banner.png'
import { Link } from 'react-router-dom'
import SearchCategories from '../../components/user/SearchCategories'

export default function Home() {
    return (
        <div className="mt-6 flex w-screen gap-16">
            <div className='w-[25%]'>
                Left
            </div>
            <div className='w-[50%]'>
                <img src={Bg} alt="home" className="cursor-pointer object-cover w-full rounded-[15px] m-auto" />
                <SearchCategories />
            </div>
            <div className='w-[25%]'>
                right
            </div>
        </div>
    )
}