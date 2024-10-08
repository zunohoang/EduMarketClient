import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutUser from '../Layouts/LayoutUser';
import Home from '../pages/user/Home';
import Course from '../pages/user/Course';
import CourseVideoPage from '../pages/user/CourseVideoPage';
import VideoHomeCard from '../components/user/Course/Video/VideoHomeCard';
import VideoCard from '../components/user/Course/Video/VideoCard';

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
                    <Route path="news" element={<Home />} />
                </Route>
                {/* <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<Home />} />
                </Route> */}
                {/* <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> */}
            </Routes>
        </BrowserRouter>
    )
}