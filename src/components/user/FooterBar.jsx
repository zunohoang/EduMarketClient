import React from 'react';
import { NavLink } from 'react-router-dom';
import Cookie from 'js-cookie';
import Cookies from 'js-cookie';

export default function FooterBar() {
    const [isAuth, setIsAuth] = React.useState(false);

    React.useEffect(() => {
        if (Cookies.get('accesstoken')) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, []);

    return (
        <nav className="p-3">
            <ul className="flex justify-around items-center max-w-3xl mx-auto">
                <li>
                    <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'text-orange-900' : 'text-sky-950'} flex flex-col items-center hover:text-sky-600`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span className="text-xs mt-1">Trang chủ</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/courses'} className={({ isActive }) => `${isActive ? 'text-orange-900' : 'text-sky-950'} flex flex-col items-center hover:text-sky-600`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                        </svg>
                        <span className="text-xs mt-1">Khóa học</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/news'} className={({ isActive }) => `${isActive ? 'text-orange-900' : 'text-sky-950'} flex flex-col items-center hover:text-sky-600`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                            <path d="M18 14h-8"></path>
                            <path d="M15 18h-5"></path>
                            <path d="M10 6h8v4h-8V6Z"></path>
                        </svg>
                        <span className="text-xs mt-1">Tin tức</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={isAuth ? '/profile' : '/login'} className={({ isActive }) => `${isActive ? 'text-orange-900' : 'text-sky-950'} flex flex-col items-center hover:text-sky-600`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span className="text-xs mt-1">{isAuth ? "Cá nhân" : "Đăng nhập"}</span>
                    </NavLink>
                </li>
            </ul>
        </nav >
    )
}