import React, { useState } from 'react';
import { PencilIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import OptionEditor from '../../components/admin/users/OptionEditor';

export default function Users() {
    const [students, setStudents] = useState([]);

    React.useEffect(() => {
        async function callApi() {
            console.log('fetching students');
            try {
                const response = await fetch(`${process.env.API}/api/v1/users`, {
                    method: 'GET',
                });
                const data = await response.json();
                console.log(data)
                setStudents(data.data.users);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        callApi();
    }, []);

    return (
        <div className="p-6 bg-gray-100">
            <div className='flex items-center mb-6'>
                <h1 className="font-medium text-2xl text-gray-800">Người dùng</h1>
            </div>
            <TableStudent students={students} setStudents={setStudents} />
        </div>
    );
}

function TableStudent({ students, setStudents }) {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const filteredStudents = students.filter(student =>
        student.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastStudent = currentPage * itemsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - itemsPerPage;
    const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

    const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

    async function deleteStudent(studentId) {
        confirm('Bạn có chắc chắn muốn xóa người này này khỏi hệ thống?');
        try {
            const response = await fetch(`${process.env.API}/api/v1/users/${studentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            console.log(data);
            if (data.status) {
                const newStudents = students.filter(student => student._id !== studentId);
                setStudents(newStudents);
                alert('Xóa người dùng thành công');
            } else {
                alert('Xóa người dùng thất bại');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Danh sách người dùng</h2>
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Tìm kiếm người dùng..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>
                <div className=''>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-blue-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">STT</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Tên</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Tài khoản</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Số điện thoại</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Năm sinh</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Quyền</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currentStudents.map((student, index) => (
                                    <tr key={student._id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">{indexOfFirstStudent + index + 1}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{student.fullName}</div>
                                            <div className="text-sm text-gray-400">{student._id}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">{student.username}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">{student.email}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">{student.phone}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">{student.born}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">
                                                {student.role == "STUDENT" && (<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {student.role}
                                                </span>)}
                                                {student.role == "ADMIN" && (<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                    {student.role}
                                                </span>)}
                                                {student.role == "TEACHER" && (<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                    {student.role}
                                                </span>)}
                                                {student.role == "COLLABORATOR" && (<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                    {student.role}
                                                </span>)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <OptionEditor student={student} setStudents={setStudents} />
                                            <button onClick={() => deleteStudent(student._id)} className="text-red-600 hover:text-red-900 ml-4">
                                                <TrashIcon className="h-5 w-5" aria-label="Xóa" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm text-gray-700">
                            Hiển thị <span className="font-medium">{indexOfFirstStudent + 1}</span> đến <span className="font-medium">{Math.min(indexOfLastStudent, filteredStudents.length)}</span> trong tổng số <span className="font-medium">{filteredStudents.length}</span> kết quả
                        </p>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span className="sr-only">Trang trước</span>
                                <ChevronLeftIcon className="h-5 w-5" />
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button key={i} onClick={() => setCurrentPage(i + 1)} className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === i + 1 ? 'z-10 bg-blue-50 border-blue-500 text-blue-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}>
                                    {i + 1}
                                </button>
                            ))}
                            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span className="sr-only">Trang sau</span>
                                <ChevronRightIcon className="h-5 w-5" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
