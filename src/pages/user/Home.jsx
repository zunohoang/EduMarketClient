import React from 'react'
import Bg from '../../assets/banner.jpg'

export default function Home() {
    return (
        <div className="mt-6">
            <img src={Bg} alt="home" className="object-cover w-[700px] rounded-[15px] m-auto" />
        </div>
    )
}