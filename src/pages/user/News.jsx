import { Outlet } from "react-router-dom";
import React from 'react';

export default function News() {
    return (
        <div className="pt-[80px] overflow-x-hidden flex flex-wrap mx-4 text-[#355676]">
            <Outlet />
        </div>
    )
}