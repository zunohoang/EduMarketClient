import { Outlet } from "react-router-dom";
import SideBar from "../components/admin/SideBar";
import Cache from "../components/Cache";
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

export default function LayoutAdmin() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Đóng sidebar khi bấm ra ngoài
    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSideBarOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full">
            <div
                ref={sidebarRef}
                className={`fixed lg:w-[240px] lg:block z-10 transition-all duration-500 ease-in-out transform lg:transform-none ${isSideBarOpen ? 'w-[240px] translate-x-0' : '-translate-x-full'
                    }`}
            >
                <SideBar />
            </div>
            <div className="bg-[#F3F4F5] lg:ml-[240px]">
                <div className="bg-white shadow-md p-4 flex justify-between items-center fixed z-0 w-full top-0 left-0">
                    <div onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                        <Menu />
                    </div>
                    <div className="flex items-center">
                        <div className="text-sm font-semibold">Admin</div>
                    </div>
                </div>
                <div className="h-screen px-4">
                    <Cache />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
