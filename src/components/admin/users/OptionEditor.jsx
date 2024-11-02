import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PencilIcon } from 'lucide-react';

function CourseOptions({ student, setStudents }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleChangeRole = async (ROLE) => {
        console.log(ROLE)
        const res = await fetch(`${process.env.VITE_API}/api/v1/users/${student._id}/change-role`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                role: ROLE
            })
        })

        const data = await res.json();
        console.log(res)
        if (data.status) {
            setStudents(prev => prev.map(studentItem =>
                studentItem._id == student._id ? { ...studentItem, role: ROLE } : studentItem
            ));
            console.log(data);
            alert("Thay đổi quyền cho người dùng thành công");
        } else {
            alert("Tiến trình thất bại");
        }
    }

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
                <div ref={menuRef} className={`absolute right-0  ml-3 mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg z-10`}>
                    <button
                        onClick={() => handleChangeRole("ADMIN")}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                        Cấp QTV
                    </button>
                    <button
                        onClick={() => handleChangeRole("TEACHER")}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                        Cấp giảng viên
                    </button>
                    <button
                        onClick={() => handleChangeRole("COLLABORATOR")}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                        Cấp cộng tác viên
                    </button>
                    <button
                        onClick={() => handleChangeRole("STUDENT")}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                        Xóa quyền
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
