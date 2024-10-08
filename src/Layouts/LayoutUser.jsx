import NavBar from "../components/user/NavBar";
import { Outlet } from "react-router-dom";
import Cache from "../components/Cache";
import Footer from "../components/user/Footer";

export default function LayoutUser() {
    return (
        <div>
            <NavBar />
            <div className="bg-[#F3F4F5]">
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}