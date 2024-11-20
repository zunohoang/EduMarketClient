import { Link, useNavigate } from "react-router-dom"
import NavBar from "../../components/user/NavBar"
import loginPic from "../../assets/loginpicture.gif"
import { useState } from "react"
import { jwtDecode } from 'jwt-decode';

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleDef = async (e) => {
        e.preventDefault();

        const res = await fetch(`${process.env.VITE_API}/api/v1/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });
        const response = await res.json();
        if (response.status) {
            console.log(response)
            const accessToken = response.accessToken;
            const user = response.user;
            // luu token vao cookie hạn 7 ngày
            document.cookie = `accessToken=${accessToken}; max-age=900; path=/`;
            document.cookie = `refreshToken=${response.refreshToken}; max-age=64000; path=/`;
            document.cookie = `role=${user.role}; max-age=900; path=/`;
            document.cookie = `username=${user.username}; max-age=900; path=/`;
            document.cookie = `fullName=${user.fullName}; max-age=900; path=/`;
            document.cookie = `email=${user.email}; max-age=900; path=/`;
            document.cookie = `id=${user._id}; max-age=900; path=/`;
            window.location.href = '/';
        } else {
            alert("Sai tên tài khoản hoặc mật khẩu")
        }
    }
    return (
        <div className="h-screen">
            <div className="pt-[70px] flex h-full *:text-[#355676] bg-white">
                <div className="md:w-1/2 w-full relative flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold absolute top-1/4">ĐĂNG NHẬP</h1>
                    <form className="flex flex-col w-3/5
                                         *:my-2 *:text-md [&_input]:p-2 [&_input]:pl-4">
                        <label className="" htmlFor="username">Tên tài khoản</label>
                        <input type="text" value={username} onInput={(e) => setUsername(e.target.value)} name="username" placeholder="Tên tài khoản" className="bg-[#F3F4F6] text-[#6C727F] outline-none pl-3 text-[14.5px] w-full  box-border rounded-lg" />
                        <label className="" htmlFor="password">Mật khẩu</label>
                        <input type="password" value={password} onInput={(e) => setPassword(e.target.value)} name="password" placeholder="Mật khẩu" className="bg-[#F3F4F6] text-[#6C727F] outline-none pl-3 text-[14.5px] w-full  box-border rounded-lg" />

                        <button type="submit" onClick={handleDef} className="hover:bg-[#1a65b6]  bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">Đăng nhập</button>
                    </form>
                    <div className="">
                        <p>Chưa có tài khoản?
                            <Link to={"/register"} className="ml-2 font-semibold hover:text-[#122a43]">Đăng kí</Link>
                        </p>
                    </div>
                </div>
                <div className="md:flex md:flex-col justify-center items-center hidden">
                    <h1 className="text-3xl font-bold">Chào mừng bạn đến với EduMarket</h1>
                    <img className="mt-4" src={loginPic} alt="" />
                </div>
            </div>
        </div>

    )
}