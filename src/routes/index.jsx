import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutUser from '../Layouts/LayoutUser';
import Home from '../pages/user/Home';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutUser />}>
                    <Route index element={<Home />} />
                    <Route path="courses" element={<Home />} />
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