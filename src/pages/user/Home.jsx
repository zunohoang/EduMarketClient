import React from 'react'
import Bg from '../../assets/banner.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="mt-6">
                <img src={Bg} alt="home" className="cursor-pointer object-cover w-[700px] rounded-[15px] m-auto" />
        </div>
    )
}