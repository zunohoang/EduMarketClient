import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PencilIcon } from 'lucide-react';
import { TrashIcon } from 'lucide-react';


function CourseOptions({ student, setStudents }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCourse = () => {
        setMenuOpen(false);
        setIsOpen(true);
    }

    const handleDetail = () => {
        setMenuOpen(false);
        alert('Chức năng này sẽ cập nhật trong tương lai');
    }

    // Đóng menu khi click bên ngoài
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const deleteCourse = async (courseId) => {
        if (confirm('Bạn có chắc chắn muốn hủy quyền truy cập khóa học này cho học viên này?')) {
            try {
                const response = await fetch(`${process.env.API}/api/v1/courses/${courseId}/students/${student._id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const data = await response.json();
                if (data.status) {
                    alert('Xóa khóa học thành công khỏi học viên');
                    const newCourses = student.coursesJoined.filter(course => course._id !== courseId);
                    setStudents((prev) => {
                        const newStudents = prev.map((item) => {
                            if (item._id === student._id) {
                                return { ...item, coursesJoined: newCourses };
                            }
                            return item;
                        });
                        return newStudents;
                    });
                    setIsOpen(true);
                } else {
                    alert('Xóa khóa học thất bại');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    return (
        <div className="relative inline-block">
            {
                isOpen && (
                    <div
                        className={`fixed z-10 w-full h-screen top-0 left-0 flex items-center justify-center bg-opacity-50 transition-all bg-black ${isOpen ? '' : 'hidden'} duration-500 ease-in-out`}
                        onClick={() => { isOpen && setIsOpen(false) }}
                    >
                        <div className={`w-[80%] bg-[#FFFFFF] rounded-lg p-5`} onClick={(e) => e.stopPropagation()}>
                            <div className="text-sky-900 flex flex-col gap-3 pb-10">
                                <b className="text-sky-900 font-medium text-xl">Học viên: {student.fullName} - {student.email}</b>
                                <div>-</div>
                                <div className="overflow-x-auto pb-4">
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
                                                    Giá
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                                    Thao tác
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {student.coursesJoined.map((course, index) => (
                                                <tr key={course._id} className="hover:bg-gray-50"

                                                >
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-600">{index + 1}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className='w-10 h-10'>
                                                            <img src={`${process.env.API}/${course.image}`} alt={course.name} className="w-full h-full object-cover" />
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900">{course.name}</div>
                                                        <div className="text-sm text-gray-400">{course._id}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-600">{course.instructor.fullName}</div>
                                                        <div className="text-sm text-gray-400">{course.instructor.email}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-600">xx-xx-2024</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-600">{course.fee}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        <button onClick={() => deleteCourse(course._id)} className="text-red-600 hover:text-red-900" aria-label="Xóa">
                                                            <TrashIcon className="h-5 w-5" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <button
                onClick={toggleMenu}
                className="text-blue-600 hover:text-blue-900 mr-4"
                aria-label="Chỉnh sửa"
            >
                <PencilIcon className="h-5 w-5" />
            </button>

            {menuOpen && (
                <div ref={menuRef} className="fixed mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <button
                        onClick={handleCourse}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                        Khóa học
                    </button>
                    <button
                        onClick={handleDetail}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                        Thông tin chi tiết
                    </button>
                </div>
            )}
        </div>
    );
}

export default CourseOptions;


