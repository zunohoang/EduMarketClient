import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutUser from '../Layouts/LayoutUser';
import Home from '../pages/user/Home';
import Course from '../pages/user/Course';
import CourseVideoPage from '../pages/user/CourseVideoPage';
import VideoHomeCard from '../components/user/Course/Video/VideoHomeCard';
import VideoCard from '../components/user/Course/Video/VideoCard';
import News from '../pages/user/News'
import NewsList from '../components/user/News/NewsList'
import NewsDetail from '../components/user/News/NewsDetail'

import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
//Admin
import LayoutAdmin from '../Layouts/LayoutAdmin';
import AdminCourseList from '../components/admin/CourseManagement/CourseList';
import AdminAddCourse from '../components/admin/CourseManagement/AddCourse';
import AdminDashboard from '../components/admin/Dashboard'
import AdminStudentList from '../components/admin/StudentManagement/StudentList';
import AdminTeacherList from '../components/admin/TeacherManagement/TeacherList';
import AdminAddTeacher from '../components/admin/TeacherManagement/AddTeacher';
import AdminWebSettings from '../components/admin/WebSettings'
//Teacher
import LayoutTeacher from '../Layouts/LayoutTeacher';
import TeacherCourseList from '../components/teacher/CourseManagement/CourseList';
import TeacherAddCourse from '../components/teacher/CourseManagement/AddCourse';
import TeacherDashboard from '../components/teacher/Dashboard'
import TeacherStudentList from '../components/teacher/StudentManagement/StudentList';
//CTV
import CollaboratorCourseList from '../components/collaborator/CourseManagement/CourseList';
import CollaboratorCodeHistory from '../components/collaborator/CourseManagement/CodeHistory';
import CollaboratorDashboard from '../components/collaborator/Dashboard'
import CollaboratorStudentList from '../components/collaborator/StudentManagement/StudentList';

import LayoutCollab from '../Layouts/LayoutCollab';



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
                        <Route index element={<NewsList />}/>
                        <Route path=':newsId' element={<NewsDetail />}/>

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<AdminDashboard />}/>
                    <Route path='dashboard' element={<AdminDashboard />}/>

                    <Route path='courses/list' element={<AdminCourseList />}/>
                    <Route path='courses/add' element={<AdminAddCourse/>}/>

                    <Route path='students/list' element={<AdminStudentList />}/>

                    <Route path='teachers/list' element={<AdminTeacherList />}/>
                    <Route path='teachers/add' element={<AdminAddTeacher />}/>

                    <Route path='settings' element={<AdminWebSettings />}/>
                </Route>

                <Route path="/teacher" element={<LayoutTeacher />}>
                    <Route index element={<TeacherDashboard />}/>
                    <Route path='dashboard' element={<TeacherDashboard />}/>

                    <Route path='courses/list' element={<TeacherCourseList />}/>
                    <Route path='courses/add' element={<TeacherAddCourse/>}/>

                    <Route path='students/list' element={<TeacherStudentList />}/>

                </Route>

                <Route path="/collaborator" element={<LayoutCollab />}>
                    <Route index element={<CollaboratorDashboard />}/>
                    <Route path='dashboard' element={<CollaboratorDashboard/>}/>

                    <Route path='courses/list' element={<CollaboratorCourseList />}/>
                    <Route path='courses/code-history' element={<CollaboratorCodeHistory/>}/>

                    <Route path='students/list' element={<CollaboratorStudentList />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}