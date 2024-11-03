import React, { useState } from 'react'
import { PencilIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import OptionEditor from '../../components/admin/teachers/OptionEditor'

export default function Teachers() {
    const [teachers, setTeachers] = React.useState([]);

    React.useEffect(() => {
        async function callApi() {
            const response = await fetch(`${process.env.VITE_API}/api/v1/users/teachers`);
            const data = await response.json();
            console.log(data);
            if (data.data.teachers)
                setTeachers(data.data.teachers);
            else setTeachers([]);
        }
        callApi();
    }, []);

    return (
        <div className="p-6 bg-gray-100">
            <h1 className="font-medium text-2xl mb-6 text-gray-800">Giáo viên</h1>
            <TableTeacher teachers={teachers} setTeachers={setTeachers} />
        </div>
    )
}

function TableTeacher({ teachers, setTeachers }) {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    const filteredTeachers = teachers.filter(teacher =>
        teacher.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const indexOfLastTeacher = currentPage * itemsPerPage
    const indexOfFirstTeacher = indexOfLastTeacher - itemsPerPage
    const currentTeachers = filteredTeachers.slice(indexOfFirstTeacher, indexOfLastTeacher)

    const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage)

    const deleteTeacher = async (id) => {
        const isConfirmed = confirm("Bạn có chắc chắn muốn xóa giáo viên này không?");
        if (!isConfirmed) return;

        const res = await fetch(`${process.env.VITE_API}/api/v1/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.ok) {
            const newTeachers = teachers.filter(teacher => teacher._id !== id);
            setTeachers(newTeachers);
            alert("Xóa thành công");
        } else {
            alert("Xóa thất bại");
        }
    }

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Danh sách giáo viên</h2>
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Tìm kiếm giáo viên..."
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
                                    Họ tên
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Năm sinh
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Khóa học
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentTeachers.map((teacher, index) => (
                                <tr key={teacher._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">{indexOfFirstTeacher + index + 1}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{teacher.fullName}</div>
                                        <div className="text-sm text-gray-400">{teacher._id}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">199x</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">{teacher.courseManagement ? teacher.courseManagement.length : '0'}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <OptionEditor teacher={teacher} />
                                        <button onClick={() => deleteTeacher(teacher._id)} className="text-red-600 hover:text-red-900" aria-label="Xóa">
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
                            Hiển thị <span className="font-medium">{indexOfFirstTeacher + 1}</span> đến <span className="font-medium">{Math.min(indexOfLastTeacher, filteredTeachers.length)}</span> trong tổng số <span className="font-medium">{filteredTeachers.length}</span> kết quả
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
