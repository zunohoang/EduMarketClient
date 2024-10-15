import { Outlet } from 'react-router-dom'


export default function Administrator() {
    return (
        <div className="w-screen h-screen">
            <div className="w-1/4 h-full bg-[#2D5D90]">

            </div>
            <div className="w-3/4 h-full">
                <Outlet/>
            </div>
            
        
        </div>
    )
}