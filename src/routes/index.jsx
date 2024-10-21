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
import CoursesManagement from '../components/admin/CourseManagement/CoursesManagement'
import CourseList from '../components/admin/CourseManagement/CourseList';
import AddCourse from '../components/admin/CourseManagement/AddCourse';
import Dashboard from '../components/admin/Dashboard'
import StudentsManagement from '../components/admin/StudentManagement/StudentsManagement'
import StudentList from '../components/admin/StudentManagement/StudentList';
import AddStudent from '../components/admin/StudentManagement/AddStudent';
import TeachersManagement from '../components/admin/TeacherManagement/TeachersManagement'
import TeacherList from '../components/admin/TeacherManagement/TeacherList';
import AddTeacher from '../components/admin/TeacherManagement/AddTeacher';
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
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />}/>
                    <Route path="courses" element={<CoursesManagement />}/>
                        <Route index element={<CourseList />} />
                        <Route path='./list' element={<CourseList />} />
                        <Route path='./add' element={<AddCourse />} />
                    <Route />
                    <Route path="students" element={<StudentsManagement />}/>
                        <Route index element={<StudentList />} />
                        <Route path='./list' element={<StudentList />} />
                        <Route path='./add' element={<AddStudent />} />
                    <Route />
                    <Route path="teachers" element={<TeachersManagement />}/>
                        <Route index element={<TeacherList />} />
                        <Route path='./list' element={<TeacherList />} />
                        <Route path='./add' element={<AddTeacher />} />
                    <Route />
                    <Route path="settings" element={<WebSettings />}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}