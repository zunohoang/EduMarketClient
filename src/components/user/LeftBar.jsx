import React from "react";
import { Link } from 'react-router-dom'
import Line from './Line'
import FB from '../../assets/facebook-circle.png'
import YT from '../../assets/youtube-circle.png'
import MS from '../../assets/messenger-circle.png'

export default function SideBar() {

    return (
        <div className="[&_p]:text-[#155e94] [&_h1]:text-[#155e94]">
            <Link className="flex items-center justify-start  
                            hover:bg-[rgba(26,79,140,0.06)] 
                            rounded-lg px-4 py-2.5 
                            cursor-pointer 
                            "
                            to="/login">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><path fill="#4491CE" d="M16.8 2.667h-2.6c-3.2 0-5.2 2-5.2 5.2v4.05h4.44l-2.07-2.07a.742.742 0 0 1-.22-.53c0-.19.07-.38.22-.53.29-.29.77-.29 1.06 0l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2.07-2.07H9v4.05c0 3.2 2 5.2 5.2 5.2h2.59c3.2 0 5.2-2 5.2-5.2v-9.6c.01-3.2-1.99-5.2-5.19-5.2ZM2.75 11.917c-.41 0-.75.34-.75.75s.34.75.75.75H9v-1.5H2.75Z"></path></svg>
                <p className="ml-4 font-medium h-full text-center">Đăng nhập</p>
            </Link>

            <Line />

            <Link className="flex items-center justify-start  
                            hover:bg-[rgba(26,79,140,0.06)] 
                            rounded-lg px-4 py-2.5 
                            cursor-pointer 
                            "
                            to="/courses">
                <svg width="25" height="25" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8"><g opacity="0.4" filter="url(#filter0_d_151_13879)"><path d="M19.805 14.563v5.258c0 1.355-1.056 2.806-2.325 3.232l-3.403 1.131c-.597.203-1.568.203-2.154 0l-3.403-1.13c-1.28-.427-2.325-1.878-2.325-3.233l.01-5.258 4.715 3.072c1.152.757 3.05.757 4.203 0l4.682-3.072z" fill="#23282C"></path><path d="M13.92 23.71h0-.003a3.039 3.039 0 01-.921.126c-.356 0-.686-.047-.91-.124h0l-.006-.002-3.402-1.13c-.522-.175-1.023-.57-1.395-1.087-.372-.517-.588-1.118-.588-1.671 0 0 0 0 0 0l.008-4.338 3.942 2.568.001.001c.675.444 1.54.65 2.375.65.837 0 1.7-.206 2.376-.65 0 0 0 0 0 0l3.908-2.564v4.332c0 .553-.218 1.154-.592 1.672s-.875.912-1.392 1.086c0 0 0 0 0 0l-3.401 1.13z" stroke="#000"></path></g><path d="M14.848 3.983h0l6.389 4.192s0 0 0 0c1.14.751 1.52 2.11 1.152 3.296l-.022.072v5.324c0 .161-.14.3-.3.3a.306.306 0 01-.3-.3v-4.191l-.775.509-1.46.96h-.001l-4.683 3.072h0c-.477.313-1.138.486-1.827.486-.688 0-1.35-.173-1.826-.486l-.002-.001-4.715-3.072h0l-1.706-1.11s0 0 0 0c-1.758-1.147-1.755-3.721-.002-4.857h.002l6.421-4.193h.002c.476-.314 1.138-.487 1.826-.487.689 0 1.35.173 1.827.486z" fill="#23282C" stroke="#000"></path><defs><filter id="filter0_d_151_13879" x="2.19466" y="14.5627" width="21.6107" height="17.7733" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_151_13879"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_151_13879" result="shape"></feBlend></filter></defs></svg>                <p className="ml-4 font-medium h-full text-center">Khóa học</p>
            </Link>

            <Link className="flex items-center justify-start  
                            hover:bg-[rgba(26,79,140,0.06)] 
                            rounded-lg px-4 py-2.5 
                            cursor-pointer 
                            " href="./">
                <svg width="25" height="25" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8"><path d="M22.067 8.333v8.534H6.973a3.045 3.045 0 00-3.04 3.04V8.333C3.933 4.067 5 3 9.267 3h7.466C21 3 22.067 4.067 22.067 8.333z" fill="#FDB4BA"></path><path d="M22.067 16.867V20.6a3.737 3.737 0 01-3.734 3.733H7.667A3.737 3.737 0 013.933 20.6v-.693a3.045 3.045 0 013.04-3.04h15.094zM17.267 9.133H8.733a.806.806 0 01-.8-.8c0-.437.363-.8.8-.8h8.534c.437 0 .8.363.8.8 0 .438-.363.8-.8.8zM14.067 12.867H8.733a.806.806 0 01-.8-.8c0-.438.363-.8.8-.8h5.334c.437 0 .8.362.8.8 0 .437-.363.8-.8.8z" fill="red"></path></svg>
                <p className="ml-4 font-medium h-full text-center">Thi online</p>
            </Link>

            <Link className="flex items-center justify-start  
                            hover:bg-[rgba(26,79,140,0.06)] 
                            rounded-lg px-4 py-2.5 
                            cursor-pointer 
                            " 
                            to="/news">
                <svg width="25" height="25" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8"><path opacity="0.4" d="M23.304 12.003l-1.045 4.459c-.896 3.85-2.667 5.407-5.995 5.087a11.224 11.224 0 01-1.728-.287l-1.792-.427c-4.448-1.056-5.824-3.254-4.779-7.712l1.046-4.47c.213-.906.469-1.696.789-2.346 1.248-2.582 3.37-3.275 6.933-2.432l1.782.416c4.469 1.045 5.834 3.253 4.789 7.712z" fill="#007668"></path><path d="M16.264 21.55c-.661.447-1.493.82-2.506 1.151l-1.686.555c-4.235 1.366-6.464.224-7.84-4.01l-1.365-4.214c-1.366-4.235-.235-6.475 4-7.84l1.685-.555c.437-.138.853-.256 1.248-.33-.32.65-.576 1.44-.79 2.346l-1.045 4.47c-1.045 4.458.331 6.656 4.78 7.712l1.791.427c.619.149 1.195.245 1.728.287zM18.856 12.078c-.064 0-.128-.011-.202-.022l-5.174-1.312a.8.8 0 01-.576-.97.8.8 0 01.97-.577l5.174 1.313a.797.797 0 01-.192 1.568z" fill="#007668"></path><path d="M15.73 15.683c-.063 0-.127-.01-.202-.021l-3.104-.79a.8.8 0 01.395-1.547l3.104.79a.8.8 0 01.576.97.777.777 0 01-.768.598z" fill="#007668"></path></svg>                <p className="ml-4 font-medium h-full text-center">Tin tức</p>
            </Link>

            <Link className="flex items-center justify-start  
                            hover:bg-[rgba(26,79,140,0.06)] 
                            rounded-lg px-4 py-2.5 
                            cursor-pointer 
                            " href="./">
                <svg width="25" height="25" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8"><path d="M18.067 4.664V3c0-.437-.363-.8-.8-.8-.438 0-.8.363-.8.8v1.6H9.533V3c0-.437-.362-.8-.8-.8-.437 0-.8.363-.8.8v1.664c-2.88.267-4.277 1.984-4.49 4.533a.536.536 0 00.533.566h18.048c.31 0 .565-.267.533-.566-.213-2.549-1.61-4.266-4.49-4.533z" fill="#186EAD"></path><path opacity="0.4" d="M21.533 11.363c.587 0 1.067.48 1.067 1.066V19c0 3.2-1.6 5.333-5.333 5.333H8.733C5 24.333 3.4 22.2 3.4 19v-6.57c0-.587.48-1.067 1.067-1.067h17.066z" fill="#186EAD"></path><path d="M9.267 16.867c-.278 0-.555-.118-.758-.31A1.122 1.122 0 018.2 15.8c0-.277.117-.555.31-.757a1.065 1.065 0 011.162-.224.997.997 0 01.352.224c.192.202.31.48.31.757s-.118.555-.31.757c-.203.192-.48.31-.757.31zM13 16.867c-.277 0-.555-.118-.757-.31a1.122 1.122 0 01-.31-.757c0-.277.118-.555.31-.757a.996.996 0 01.352-.224c.394-.17.864-.075 1.162.224.192.202.31.48.31.757s-.118.555-.31.757l-.16.128a.805.805 0 01-.192.096.676.676 0 01-.192.064c-.074.011-.138.022-.213.022zM16.733 16.867c-.277 0-.554-.118-.757-.31a1.121 1.121 0 01-.31-.757c0-.277.118-.555.31-.757a1.1 1.1 0 01.352-.224 1.02 1.02 0 01.619-.064c.064.01.128.032.192.064a.805.805 0 01.192.096l.16.128c.192.203.309.48.309.757s-.117.555-.31.757l-.16.128a.81.81 0 01-.191.097.679.679 0 01-.192.064c-.075.01-.15.02-.214.02zM9.267 20.6c-.139 0-.278-.032-.406-.085a1.1 1.1 0 01-.352-.224 1.122 1.122 0 01-.309-.758c0-.277.117-.554.31-.757a1.1 1.1 0 01.351-.224 1.02 1.02 0 01.619-.064c.064.01.128.032.192.064a.809.809 0 01.192.096l.16.128c.192.203.31.48.31.757 0 .278-.118.555-.31.758-.053.042-.107.096-.16.128a.809.809 0 01-.192.096.679.679 0 01-.192.064c-.075.01-.139.021-.213.021zM13 20.6c-.277 0-.555-.117-.757-.31a1.122 1.122 0 01-.31-.757c0-.277.118-.554.31-.757.394-.395 1.12-.395 1.514 0 .192.203.31.48.31.757 0 .278-.118.555-.31.758-.202.192-.48.31-.757.31zM16.733 20.6c-.277 0-.554-.117-.757-.31a1.122 1.122 0 01-.31-.757c0-.277.118-.554.31-.757.395-.395 1.12-.395 1.515 0 .192.203.309.48.309.757 0 .278-.117.555-.31.758-.202.192-.48.31-.757.31z" fill="#186EAD"></path></svg>                <p className="ml-4 font-medium h-full text-center">Lịch học</p>
            </Link>

            <Line />

            <h1 className="flex items-center justify-start font-medium ml-2 px-4">Liên kết</h1>

            <Link className="flex items-center justify-start  
                            hover:bg-[rgba(26,79,140,0.06)] 
                            rounded-lg px-4 py-2.5 
                            cursor-pointer 
                            " href="./">
                <img src={FB} width='35px' height="35px" alt="" srcset="" />
                <p className="ml-4 font-medium h-full text-center">Facebook</p>
            </Link>

            <Link className="flex items-center justify-start  
                            hover:bg-[rgba(26,79,140,0.06)] 
                            rounded-lg px-4 py-2.5 
                            cursor-pointer 
                            " href="./">
                <img src={MS} width='35px' height="35px" alt="" srcset="" />
                <p className="ml-4 font-medium h-full text-center">Messenger</p>
            </Link>

            <Link className="flex items-center justify-start  
                            hover:bg-[rgba(26,79,140,0.06)] 
                            rounded-lg px-4 py-2.5 
                            cursor-pointer 
                            " href="./">
                <img src={YT} width='35px' height="35px" alt="" srcset="" />
                <p className="ml-4 font-medium h-full text-center">Youtube</p>
            </Link>
        </div>
    )
}