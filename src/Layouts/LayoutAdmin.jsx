import { Outlet } from "react-router-dom"
import SideBar from "../components/admin/SideBar"

export default function LayoutAdmin() {
    return (
        <div className="w-screen h-screen flex flex-wrap">
            <SideBar />
            <div className="bg-[#F3F4F5] w-3/4">
                <Outlet />
            </div>
        </div>
    )
}