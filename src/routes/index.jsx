import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutUser from '../Layouts/LayoutUser';
import Home from '../pages/user/Home';
import Course from '../pages/user/Course';
import CourseVideoPage from '../pages/user/CourseVideoPage';
import VideoHomeCard from '../components/user/Course/Video/VideoHomeCard';
import VideoCard from '../components/user/Course/Video/VideoCard';
import News from '../pages/user/News'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
//Admin
import Administrator from '../pages/admin/Administrator';
import CoursesManagement from '../components/admin/CoursesManagement'
import Dashboard from '../components/admin/Dashboard'
import StudentsManagement from '../components/admin/StudentsManagement'
import TeachersManagement from '../components/admin/TeachersManagement'
import WebSettings from '../components/admin/WebSettings'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutUser />}>
                    <Route index element={<Home />} />
                    <Route path="courses">
                        <Route index element={<Course />} />
                        <Route path=":courseId" element={<CourseVideoPage />}>
                            <Route index element={<VideoHomeCard />} />
                            <Route path=":videoId" element={<VideoCard />} />
                        </Route>
                    </Route>
                    <Route path="/news" element={<News />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="/admin" element={<Administrator />}>
                    <Route index element={<Dashboard />} />
                    <Route path="./dashboard" element={<Dashboard />}/>
                    <Route path="./courses" element={<CoursesManagement />}/>
                    <Route path="./students" element={<studentsManagement />}/>
                    <Route path="./teachers" element={<teachersManagement />}/>
                    <Route path="./settings" element={<WebSettings />}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}