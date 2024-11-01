import { Link, useNavigate } from "react-router-dom"
import loginPic from "../../assets/loginpicture.gif"
import { useState } from "react"
import InputMessage from "../../components/user/InputMessage"

export default function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")

    const [usernameTouched, setUsernameTouched] = useState(false)
    const [emailTouched, setEmailTouched] = useState(false)
    const [passwordTouched, setPasswordTouched] = useState(false)
    const [rePasswordTouched, setRePasswordTouched] = useState(false)
    const [fullNameTouched, setFullNameTouched] = useState(false)

    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/

    // Validate Email
    const validateEmail = () => {
        return emailRegex.test(email)
    }

    // Validate Password
    const validatePassword = () => {
        return password === rePassword
    }

    // Check Empty
    const isEmpty = (value) => value.trim() === ""

    const navigate = useNavigate()
    const handleDef = async (e) => {
        e.preventDefault();

        const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fullName, username, email, password })
        });

        if (res.ok) {
            const response = await res.json();
            navigate("/login")
        } else {
            alert("Đăng kí thất bại")
        }
    }

    return (
        <div className="h-screen">
            <div className="pt-[70px] flex h-full *:text-[#355676] bg-white">
                <div className="lg:w-1/2 flex w-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold ">ĐĂNG KÍ</h1>
                    <form className="flex flex-col w-3/5 *:text-md [&_input]:p-2 [&_input]:pl-4">

                        <label className="my-2" htmlFor="username">Họ và Tên</label>
                        <input
                            type="text"
                            name="fullName"
                            value={fullName}
                            onChange={(e) => { setFullName(e.target.value); setFullNameTouched(true); }}
                            onBlur={() => setFullNameTouched(true)}
                            placeholder="VD:Nguyễn Văn A"
                            className="bg-[#F3F4F6] text-[#6C727F] outline-none pl-3 text-[14.5px] w-full box-border rounded-lg my-2"
                        />
                        {fullNameTouched && isEmpty(fullName) && <InputMessage check={false} message="Họ và Tên không được để trống!" />}


                        <label className="my-2" htmlFor="username">Tên tài khoản</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value); setUsernameTouched(true); }}
                            onBlur={() => setUsernameTouched(true)}
                            placeholder="VD:namkhuc"
                            className="bg-[#F3F4F6] text-[#6C727F] outline-none pl-3 text-[14.5px] w-full box-border rounded-lg my-2"
                        />
                        {usernameTouched && isEmpty(username) && <InputMessage check={false} message="Tên tài khoản không được để trống!" />}


                        <label className="my-2" htmlFor="email">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setEmailTouched(true); }}
                            onBlur={() => setEmailTouched(true)}
                            name="email"
                            placeholder="VD: namkhuc@gmail.com"
                            className="bg-[#F3F4F6] text-[#6C727F] outline-none pl-3 text-[14.5px] w-full box-border rounded-lg my-2"
                        />
                        {emailTouched && isEmpty(email) && <InputMessage check={false} message="Email không được để trống!" />}
                        {emailTouched && !isEmpty(email) && !validateEmail() && <InputMessage check={validateEmail()} message="Email không hợp lệ!" />}
                        {emailTouched && !isEmpty(email) && validateEmail() && <InputMessage check={validateEmail()} message="Email hợp lệ!" />}


                        <label className="my-2" htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setPasswordTouched(true); }}
                            onBlur={() => setPasswordTouched(true)}
                            placeholder="Mật khẩu"
                            className="bg-[#F3F4F6] text-[#6C727F] outline-none pl-3 text-[14.5px] w-full box-border rounded-lg my-2"
                        />
                        {passwordTouched && isEmpty(password) && <InputMessage check={false} message="Mật khẩu không được để trống!" />}


                        <label className="my-2" htmlFor="rePassword">Nhập lại mật khẩu</label>
                        <input
                            type="password"
                            name="rePassword"
                            value={rePassword}
                            onChange={(e) => { setRePassword(e.target.value); setRePasswordTouched(true); }}
                            onBlur={() => setRePasswordTouched(true)}
                            placeholder="Nhập lại mật khẩu"
                            className="bg-[#F3F4F6] text-[#6C727F] outline-none pl-3 text-[14.5px] w-full box-border rounded-lg my-2"
                        />
                        {rePasswordTouched && isEmpty(rePassword) && <InputMessage check={false} message="Vui lòng nhập lại mật khẩu!" />}
                        {rePasswordTouched && !isEmpty(rePassword) && !validatePassword() && <InputMessage check={validatePassword()} message="Mật khẩu không khớp!" />}
                        {rePasswordTouched && !isEmpty(rePassword) && validatePassword() && <InputMessage check={validatePassword()} message="Mật khẩu khớp!" />}

                        <button type="submit" onClick={handleDef} className="hover:bg-[#1a65b6]  bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">Đăng kí</button>
                    </form>
                </div>
                <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold">Chào mừng bạn đến với EduMarket</h1>
                    <img className="mt-6" src={loginPic} alt="" />
                </div>
            </div>
        </div>
    )
}
