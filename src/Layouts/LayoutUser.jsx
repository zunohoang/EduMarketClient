import NavBar from "../components/user/NavBar";
import { Outlet } from "react-router-dom";
import Cache from "../components/Cache";
import Footer from "../components/user/Footer";
import FooterBar from "../components/user/FooterBar";
import TopBarMobile from "../components/user/TopBarMobile";

export default function LayoutUser() {
    return (
        <div>
            <div className="z-10 md:hidden w-full fixed backdrop-blur-md">
                <TopBarMobile />
            </div>
            <NavBar />
            <div className="bg-[#F3F4F5]">
                <Outlet />
                <Footer />
            </div>
            <div className="md:hidden w-full bg-white/40 fixed bottom-0 left-0 backdrop-blur-md">
                <FooterBar />
            </div>
        </div>
    )
}