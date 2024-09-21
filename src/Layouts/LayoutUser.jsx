import SiderBar from "../components/user/SiderBar";
import { Outlet } from "react-router-dom";
import Cache from "../components/Cache";
import Footer from "../components/user/Footer";

export default function LayoutUser() {
    return (
        <div>
            <SiderBar />
            <div>
                <Cache />
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}