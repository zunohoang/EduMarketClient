import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutUser from '../Layouts/LayoutUser';
import Home from '../pages/user/Home';
import Course from '../pages/user/Course';
import News from '../pages/user/News'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutUser />}>
                    <Route index element={<Home />} />
                    <Route path="courses" element={<Course />} />
                    <Route path="news" element={<News />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                {/* <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<Home />} />
                </Route> */}
            </Routes>
        </BrowserRouter>
    )
}