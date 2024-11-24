import NavBar from "../components/user/NavBar";
import { Outlet } from "react-router-dom";
import Cache from "../components/Cache";
import Footer from "../components/user/Footer";
import FooterBar from "../components/user/FooterBar";
import TopBarMobile from "../components/user/TopBarMobile";
import UserChatModal from "../components/user/UserChatModal";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function LayoutUser() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const navigate = useNavigate();

    const setIsChatOpenCus = (value) => {
        if (Cookies.get('role') != 'STUDENT') {
            navigate('/admin/chats');
            return;
        }
        setIsChatOpen(value);
    }

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
            <UserChatModal isOpen={isChatOpen} onClose={() => setIsChatOpenCus(!isChatOpen)} />
        </div>
    )
}