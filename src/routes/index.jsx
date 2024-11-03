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

import NewsList from '../components/user/News/NewsList';
import NewsDetail from '../components/user/News/NewsDetail';
import Profile from '../pages/user/Profile';
import Teacher from '../pages/user/Teacher';
import TeacherList2 from '../components/user/Teacher/TeacherList';
import TeacherDetail from '../components/user/Teacher/TeacherDetail';
import CourseCategories from '../pages/user/CourseCategories';
import Schedule from '../pages/user/Schedule';

//Admin
import LayoutAdmin from '../Layouts/LayoutAdmin';
import CourseListAdmin from '../pages/admin/Courses';
import AddCourseAdmin from '../pages/admin/AddCourses';
import EditCourse from '../pages/admin/EditCourse';
import CourseStudents from '../pages/admin/CourseStudents';
import TeacherListAdmin from '../pages/admin/TeacherListAdmin'
import AddTeacher from '../pages/admin/AddTeacher'
import StudentsListAdmin from '../pages/admin/StudentsListAdmin';
import DashboardAdmin from '../pages/admin/DashboardAdmin';
import UsersListAdmin from '../pages/admin/UsersListAdmin';
import AddUsers from '../pages/admin/AddUsers';
import AccessKeys from '../pages/admin/AccessKeys';
import Dashboard from '../pages/admin/DashboardAdmin';
import AddAccessKey from '../pages/admin/AddAccessKey';

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
                    <Route index element={<DashboardAdmin />} />
                    
                    <Route path="dashboard" element={<DashboardAdmin />} />
                    <Route path="courses" element={<CourseListAdmin />} />
                    <Route path="courses/:courseId/edit" element={<EditCourse />} />
                    <Route path="add-course" element={<AddCourseAdmin />} />
                    <Route path="courses/:courseId/students" element={<CourseStudents />} />

                    <Route path="teachers" element={<TeacherListAdmin />} />
                    <Route path="add-teacher" element={<AddTeacher />} />
                    <Route path="teachers/:teacherId/courses" element={<CourseListAdmin />} />

                    <Route path="students" element={<StudentsListAdmin />} />

                    <Route path="users" element={<UsersListAdmin />} />
                    <Route path='add-user' element={<AddUsers />} />

                    <Route path="news" element={<Schedule />} />
                    <Route path="add-news" element={<Schedule />} />

                    <Route path="access-keys" element={<AccessKeys />} />
                    <Route path="add-key" element={<AddAccessKey />} />

                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}