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
import LayoutAdmin from '../Layouts/LayoutAdmin';
import CourseList from '../components/admin/CourseManagement/CourseList';
import AddCourse from '../components/admin/CourseManagement/AddCourse';
import Dashboard from '../components/admin/Dashboard'
import StudentList from '../components/admin/StudentManagement/StudentList';
import TeacherList from '../components/admin/TeacherManagement/TeacherList';
import AddTeacher from '../components/admin/TeacherManagement/AddTeacher';
import WebSettings from '../components/admin/WebSettings'
import SideBar from '../components/admin/SideBar';
import NewsList from '../components/user/News/NewsList';
import NewsDetail from '../components/user/News/NewsDetail';
import Profile from '../pages/user/Profile';
import Teacher from '../pages/user/Teacher';
import TeacherList2 from '../components/user/Teacher/TeacherList';
import TeacherDetail from '../components/user/Teacher/TeacherDetail';
import CourseCategories from '../pages/user/CourseCategories';
import Schedule from '../pages/user/Schedule';

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
                        <Route path="categories/:category" element={<CourseCategories />} />
                    </Route>
                    <Route path="news" element={<News />} >
                        <Route index element={<NewsList />} />
                        <Route path=":newsId" element={<NewsDetail />} />
                    </Route>
                    <Route path="teachers" element={<Teacher />}>
                        <Route index element={<TeacherList2 />} />
                        <Route path=":teacherId" element={<TeacherDetail />} />
                    </Route>
                    <Route path="future" element={<Schedule />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<Dashboard />} />
                    <Route path='dashboard' element={<Dashboard />} />

                    <Route path='courses/list' element={<CourseList />} />
                    <Route path='courses/add' element={<AddCourse />} />

                    <Route path='students/list' element={<StudentList />} />

                    <Route path='teachers/list' element={<TeacherList />} />
                    <Route path='teachers/add' element={<AddTeacher />} />

                    <Route path='settings' element={<WebSettings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}