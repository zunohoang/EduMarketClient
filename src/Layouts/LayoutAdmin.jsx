import { Link, Outlet } from "react-router-dom";
import SideBar from "../components/admin/SideBar";
import Cache from "../components/Cache";
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { LogOut } from 'lucide-react';
import Cookies from "js-cookie";
import { House } from 'lucide-react';

export default function LayoutAdmin() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const sidebarRef = useRef(null);

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


    useEffect(() => {
        if (!Cookies.get("accessToken")) {
            window.location.href = "/login";
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove("accessToken");
        Cookies.remove("role");
        Cookies.remove("fullName");
        Cookies.remove("email");
        Cookies.remove("id");
        Cookies.remove("username");
        window.location.href = "/login";
    }

    return (
        Cookies.get("accessToken") === undefined || Cookies.get("role") === "STUDENT" ? <div>Không đủ quyền</div> :
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
                        <div className="flex items-center box-border gap-2">
                            <div className="text-sm font-semibold">{Cookies.get("role")}, {Cookies.get("fullName")}</div>
                            <Link to="/" className="bg-sky-600 hover:bg-blue-400 duration-500 flex items-center p-1 gap-2 text-white  rounded-md">
                                <House size={16} />
                            </Link>
                            <button onClick={handleLogout} className="bg-red-700 hover:bg-red-400 duration-500 flex items-center gap-2 text-white px-2 py-1 rounded-md">
                                <LogOut size={16} />
                            </button>
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