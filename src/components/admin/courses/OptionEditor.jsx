import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PencilIcon } from 'lucide-react';

function CourseOptions({ course }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleEdit = () => {
        navigate(`/admin/courses/${course._id}/edit`);
        setMenuOpen(false);
    };

    const handleStudents = () => {
        navigate(`/admin/courses/${course._id}/students`);
        setMenuOpen(false);
    };

    const handlePublic = async () => {
        if (!course.status) {
            const res = await fetch(`${process.env.API}/api/v1/courses/${course._id}/public`, {
                method: "PUT"
            });
            const data = await res.json();
            if (data.status) {
                alert("Đã công khai khóa học")
            }
            course.status = true;
            navigate(``);
            setMenuOpen(false);
        } else {
            handleUnpublic();
        }
    };

    const handleUnpublic = async () => {
        const res = await fetch(`${process.env.API}/api/v1/courses/${course._id}/unpublic`, {
            method: "PUT"
        });
        const data = await res.json();
        if (data.status) {
            alert("Đã ẩn khóa học")
        }
        course.status = false;
        navigate(``);
        setMenuOpen(false);
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
                <div ref={menuRef} className="fixed right-10 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <button
                        onClick={handleEdit}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                        Chỉnh sửa
                    </button>
                    <button
                        onClick={handleStudents}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                        Học viên
                    </button>
                    <button
                        onClick={handlePublic}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                        {course.status ? "Để bản nháp" : "Phát hành"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default CourseOptions;
