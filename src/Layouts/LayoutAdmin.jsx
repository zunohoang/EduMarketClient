import SideBar from "../components/admin/SideBar"
import { Outlet } from "react-router-dom";

export default function LayoutAdmin() {
    return (
        <div>
            <SideBar />
            <div className="bg-[#F3F4F5]">
                <Outlet />
            </div>
        </div>
    )
}