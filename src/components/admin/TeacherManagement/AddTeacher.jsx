import { useState } from "react"
import { Link } from "react-router-dom"
import InputMessage from "../../user/InputMessage"
export default function AddTeacher() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [email, setEmail] = useState("")
    const [realName, setRealName] = useState("")

    const [usernameTouched, setUsernameTouched] = useState(false)
    const [realNameTouched, setRealNameTouched] = useState(false)
    const [emailTouched, setEmailTouched] = useState(false)
    const [passwordTouched, setPasswordTouched] = useState(false)
    const [rePasswordTouched, setRePasswordTouched] = useState(false)
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/
    const [confirm, setConfirm] = useState('hidden');

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

    // Handle form submission
    const handleDef = (e) => {
        e.preventDefault();

        setUsernameTouched(true)
        setRealNameTouched(true)
        setEmailTouched(true)
        setPasswordTouched(true)
        setRePasswordTouched(true)

        if (!isEmpty(username) && 
            !isEmpty(realName) && 
            !isEmpty(email) && validateEmail() &&
            !isEmpty(password) &&
            !isEmpty(rePassword) && validatePassword()) {
            setConfirm('') 
        } else {
            setUsernameTouched(true)
            setRealNameTouched(true)
            setEmailTouched(true)
            setPasswordTouched(true)
            setRePasswordTouched(true)
        }
    }

    const handleConfirm = () => {
        console.log(password, username, realName, email)
    }

    return (
        <div className="relative flex justify-center items-center h-screen">
            <div className="p-5 flex flex-col items-center justify-center bg-white rounded-2xl w-4/5">
                <h1 className="text-3xl font-bold">TẠO TÀI KHOẢN GIẢNG VIÊN</h1>
                <form onSubmit={handleDef} className="w-full flex flex-col w- *:text-md [&_input]:p-2 [&_input]:pl-4">
                    {/* Username Input */}
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

                    {/* Real Name Input */}
                    <label className="my-2" htmlFor="realname">Họ và tên</label>
                    <input
                        type="text"
                        name="realname"
                        value={realName}
                        onChange={(e) => { setRealName(e.target.value); setRealNameTouched(true); }}
                        onBlur={() => setRealNameTouched(true)}
                        placeholder="VD:namkhuc"
                        className="bg-[#F3F4F6] text-[#6C727F] outline-none pl-3 text-[14.5px] w-full box-border rounded-lg my-2"
                    />
                    {realNameTouched && isEmpty(realName) && <InputMessage check={false} message="Họ và tên không được để trống" />}

                    {/* Email Input */}
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
                    {emailTouched && !isEmpty(email) && !validateEmail() && <InputMessage check={false} message="Email không hợp lệ!" />}
                    {emailTouched && !isEmpty(email) && validateEmail() && <InputMessage check={true} message="Email hợp lệ!" />}

                    {/* Password Input */}
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

                    {/* Re-Password Input */}
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
                    {rePasswordTouched && !isEmpty(rePassword) && !validatePassword() && <InputMessage check={false} message="Mật khẩu không khớp!" />}
                    {rePasswordTouched && !isEmpty(rePassword) && validatePassword() && <InputMessage check={true} message="Mật khẩu khớp!" />}

                    {/* Submit Button */}
                    <button type="submit" className="hover:bg-[#1a65b6]  bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">+ Tạo tài khoản</button>
                </form>
            </div>
            {/* Confirm Box */}
            <div className={`${confirm} absolute w-full h-screen flex justify-center items-center bg-black bg-opacity-15`}>
                <div className="relative bg-white p-8 rounded-xl">
                    <div onClick={() => { setConfirm('hidden') }} className="absolute top-2 right-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h1 className="text-center mb-5">XÁC NHẬN TẠO TÀI KHOẢN</h1>
                    <div className="flex justify-center items-center gap-3">
                        <Link to={'../teachers/list'}>
                            <button onClick={() => { handleConfirm(); setConfirm('hidden'); }} type="submit" className="hover:bg-[#1a65b6]  border-2 border-solid border-gray-300  bg-[#2D5D90] text-sm text-white px-5 py-2 rounded-lg">Có</button>
                        </Link>
                        <button onClick={() => { setConfirm('hidden') }} type="submit" className="hover:bg-gray-300 border-2 border-solid border-gray-300 bg-white text-sm text-[#2D5D90] px-5 py-2 rounded-lg">Không</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
