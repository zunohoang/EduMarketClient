import React, { useState } from 'react';
import { PencilIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Students() {
    const { courseId } = useParams();
    const [students, setStudents] = useState([]);
    const [course, setCourse] = useState([]);

    React.useEffect(() => {
        async function callApi() {
            console.log('fetching students');
            try {
                const response = await fetch(`${process.env.VITE_API}/api/v1/courses/${courseId}/students`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const data = await response.json();
                console.log(data)
                setStudents(data.data.students);
                setCourse(data.data.course);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        callApi();
    }, [courseId]);

    return (
        <div className="p-6 bg-gray-100">
            <div className='flex items-center mb-6'>
                <Link to={'/admin/courses'} className="mr-4 text-blue-600 hover:text-blue-800" aria-label="Quay lại">
                    <ChevronLeft className="h-6 w-6" />
                </Link>
                <h1 className="font-medium text-2xl text-gray-800">Học viên khóa {course.name}</h1>
            </div>
            <TableStudent students={students} setStudents={setStudents} />
        </div>
    );
}

function TableStudent({ students, setStudents, courseId }) {
    const navigate = useNavigate();
    const students2 = [
        { id: 1, name: 'Nguyễn Văn A', email: 'u', enrollmentDate: '2023-08-01', accessKey: '389rueifh' },
        { id: 2, name: 'Trần Thị B', email: '10A2', enrollmentDate: '2023-08-15', accessKey: 'ewife9390' },
        { id: 3, name: 'Lê Văn C', email: '10A3', enrollmentDate: '2023-08-20', accessKey: 'saasifdsijf' },
        { id: 4, name: 'Phạm Thị D', email: '10A4', enrollmentDate: '2023-09-01', accessKey: 'ferferf9r9' },
        { id: 5, name: 'Hoàng Văn E', email: '10A5', enrollmentDate: '2023-09-05', accessKey: 'f9e0fer989' },
        { id: 6, name: 'Phạm Thị D', email: '10A4', enrollmentDate: '2023-09-01', accessKey: 'ferferf9r9' },
        { id: 7, name: 'Hoàng Văn E', email: '10A5', enrollmentDate: '2023-09-05', accessKey: 'f9e0fer989' },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const filteredStudents = students.filter(student =>
        student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastStudent = currentPage * itemsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - itemsPerPage;
    const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

    const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

    function randomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    async function deleteUserOfCourse(studentId) {
        confirm('Bạn có chắc chắn muốn xóa học viên này khỏi khóa học?');
        try {
            const response = await fetch(`${process.env.VITE_API}/api/v1/courses/${courseId}/students/${studentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            if (data.status) {
                const newStudents = students.filter(student => student._id !== studentId);
                setStudents(newStudents);
                alert('Xóa học viên thành công');
            } else {
                alert('Xóa học viên thất bại');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Danh sách học viên</h2>
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Tìm kiếm học viên..."
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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">STT</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Tên</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Ngày đăng ký</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Mã truy cập</th>
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
                                        <div className="text-sm text-gray-600">{student.email}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">**-**-2024</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-md bg-yellow-300" >
                                            {randomString(8)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button onClick={() => deleteUserOfCourse(student._id)} className="text-red-600 hover:text-red-900 ml-4">
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
    );
}
