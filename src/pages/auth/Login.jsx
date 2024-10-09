import { Link, useNavigate } from "react-router-dom"
import NavBar from "../../components/user/NavBar"
import loginPic from "../../assets/loginpicture.gif"
import { useState } from "react"
export default function Login() {
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const navigate = useNavigate()
    const handleDef = async (e) => {
        e.preventDefault();
        if (username == "admin" && password == "123") {
            const token = "2222";
            await localStorage.setItem("acesstoken", token);
            navigate("/")
        }
    }
    return ( 
        <div className="h-screen">
            <div className="pt-[70px] flex h-full *:text-[#355676]">
            
                <div className="w-1/2 relative flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold absolute top-1/4">ĐĂNG NHẬP</h1>
                        <form className="flex flex-col w-3/5
                                                        *:my-2 *:text-md [&_input]:p-2 [&_input]:pl-4">
                            <label className="" htmlFor="username">Tên tài khoản</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  name="username" placeholder="Tên tài khoản" class="bg-[#F3F4F6] text-[#6C727F] outline-none pl-3 text-[14.5px] w-full  box-border rounded-lg"/>
                            <label className="" htmlFor="password">Mật khẩu</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  name="password" placeholder="Mật khẩu" class="bg-[#F3F4F6] text-[#6C727F] outline-none pl-3 text-[14.5px] w-full  box-border rounded-lg"/>
                        
                            <button type="submit" onClick={handleDef} class="hover:bg-[#1a65b6]  bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">Đăng nhập</button>
                        </form>
                        <div className="">
                            <p>Chưa có tài khoản? 
                                <Link className="ml-2 font-semibold hover:text-[#122a43]">Đăng kí</Link>
                            </p>
                        </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold">Chào mừng bạn đến với EduMarket</h1>  
                    <img className="mt-4" src={loginPic} alt="" />
  
                </div>
                
                
            </div>
        </div>
        
    )
}