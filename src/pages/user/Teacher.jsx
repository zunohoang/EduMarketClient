import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Teacher() {
    return (
        <div className="pt-[70px]">
            <Outlet />
        </div>
    )
}