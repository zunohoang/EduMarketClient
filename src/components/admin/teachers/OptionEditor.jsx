import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PencilIcon } from 'lucide-react';

function CourseOptions({ teacher }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCoursesOfTeacher = () => {
        navigate(`/admin/teachers/${teacher._id}/courses`);
        setMenuOpen(false);
    };

    const handelProfile = () => {
        alert('Tính năng này sẽ được cập nhật trong tương lai');
        setMenuOpen(false);
    };

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

    return (
        <div className="relative inline-block">
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
                        onClick={handleCoursesOfTeacher}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                        Các khóa học
                    </button>
                    <button
                        onClick={handelProfile}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                        Thông tin
                    </button>
                </div>
            )}
        </div>
    );
}

export default CourseOptions;
