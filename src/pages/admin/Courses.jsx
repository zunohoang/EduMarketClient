import React, { useState } from 'react'
import { PencilIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import OptionEditor from '../../components/admin/courses/OptionEditor'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'


export default function Courses() {
    const [courses, setCourses] = useState([]);
    const { teacherId } = useParams();
    const [teacherName, setTeacherName] = useState('');

    React.useEffect(() => {
        async function callApi() {
            const response = await fetch(`${process.env.VITE_API}/api/v1/courses${teacherId ? `?teacherId=${teacherId}` : ''}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                }
            });
            const data = await response.json();
            console.log(data);
            setCourses(data.data.courses);
            if (teacherId) {
                setTeacherName(data.data.teacherName);
            }
        }
        callApi();
    }, [teacherId]);

    return (
        <div className="p-6 bg-gray-100">
            <h1 className="font-medium text-2xl mb-6 text-gray-800">Khóa học {teacherId ? 'của giáo viên ' + teacherName : ''}</h1>
            <TableCourse courses={courses} setCourses={setCourses} />
        </div>
    )
}

function TableCourse({ courses, setCourses }) {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const indexOfLastCourse = currentPage * itemsPerPage
    const indexOfFirstCourse = indexOfLastCourse - itemsPerPage
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)

    const totalPages = Math.ceil(filteredCourses.length / itemsPerPage)

    const deleteCourse = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa khóa học này không?')) {
            const response = await fetch(`${process.env.VITE_API}/api/v1/courses/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${Cookies.get('accessToken')}`
                }
            })
            if (response.ok) {
                alert('Xóa khóa học thành công');
                const newCourses = courses.filter(course => course._id !== id)
                setCourses(newCourses);
            }
        }
    }

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Danh sách khóa học</h2>
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Tìm kiếm khóa học..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-blue-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    STT
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Ảnh
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Tên khóa học
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Giáo viên
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Học viên
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Trạng thái
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Giá
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentCourses.map((course, index) => (
                                <tr key={course._id} className="hover:bg-gray-50"

                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">{indexOfFirstCourse + index + 1}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className='w-10 h-10'>
                                            <img src={`${process.env.VITE_API}/${course.image}`} alt={course.name} className="w-full h-full object-cover" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{course.name}</div>
                                        <div className="text-sm text-gray-400">{course._id}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {
                                            course.instructor ? (
                                                <div>
                                                    <div className="text-sm text-gray-600">{course.instructor.fullName}</div>
                                                    <div className="text-sm text-gray-400">{course.instructor.email}</div>
                                                </div>
                                            ) : (
                                                <div className="text-sm text-gray-600">Chưa cập nhật</div>
                                            )
                                        }

                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">{Array.isArray(course.student) ? course.student.length : '0'}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${course.status ? 'bg-green-100 text-green-800' :
                                                course.status ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'}`}>
                                            {course.status ? 'Công khai' : 'Bản nháp'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">{course.fee}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <OptionEditor course={course} />
                                        <button onClick={() => deleteCourse(course._id)} className="text-red-600 hover:text-red-900" aria-label="Xóa">
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Hiển thị <span className="font-medium">{indexOfFirstCourse + 1}</span> đến <span className="font-medium">{Math.min(indexOfLastCourse, filteredCourses.length)}</span> trong tổng số <span className="font-medium">{filteredCourses.length}</span> kết quả
                        </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Trang trước</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium
                                    ${currentPage === i + 1
                                            ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Trang sau</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
