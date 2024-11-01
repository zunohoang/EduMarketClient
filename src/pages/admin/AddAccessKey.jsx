
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddAccessKey() {
    const navigate = useNavigate();

    const [accessKey, setAccessKey] = useState({
        title: '',
        role: '',
        bill: '',
        expired: '86400000',
        courses: []
    });

    const [courses, setCourses] = useState([]);

    React.useEffect(() => {
        async function fetchCourses() {
            const response = await fetch(`${process.env.VITE_API}/api/v1/courses`);
            const data = await response.json();
            console.log(data);
            setCourses(data.data.courses);
        }
        fetchCourses();
    }, []);

    const [previewImage, setPreviewImage] = useState(null);
    const fileInputRef = useRef(null);
    const [formValid, setFormValid] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccessKey(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleCreateKey = () => {
        console.log(accessKey);
    }


    return (
        <div className="course-manager bg-gray-100 min-h-screen p-6">
            <h1 className="font-medium text-2xl mb-6 text-gray-800">Mã truy cập</h1>
            <div className="mx-auto bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-6">
                    <h1 className="text-xl font-semibold text-gray-800">Tạo mã truy cập</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Tiêu đề</label>
                        <input type="text" name="title" id="title" onChange={handleChange} value={accessKey.title} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="expired" className="block text-sm font-medium text-gray-700">Thời hạn</label>
                        <select name="expired" id="expired" onChange={handleChange} value={accessKey.expired} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option value="86400000">24 giờ</option>
                            <option value="172800000">48 giờ</option>
                            <option value="604800000">1 tuần</option>
                            <option value="2592000000">1 tháng</option>
                            <option value="31104000000">1 năm</option>
                        </select>
                    </div>
                    <CourseSelector courses={courses} accessKey={accessKey} setAccessKey={setAccessKey} />
                    <div className='flex'>
                        <div>
                            <label htmlFor="bill" className="block text-sm font-medium text-gray-700">Hóa đơn</label>
                            <input
                                type="file"
                                id="image"
                                name="imgae"
                                ref={fileInputRef}
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            setPreviewImage(reader.result);
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                                className="mt-2 p-2 block w-full rounded-md shadow-sm outline-none focus:border-sky-800 focus:ring focus:ring-sky-700  focus:ring-opacity-50"
                            />
                            {previewImage && (
                                <img src={previewImage} alt="preview" className="mt-2 w-20 h-20 object-cover rounded-md" />
                            )}
                        </div>
                        <div className='flex ml-auto'>
                            <p className='text-lg font-medium'>
                                Tổng chi phí: {formatCurrency(
                                    accessKey.courses.reduce((sum, courseId) => {
                                        const course = courses.find(c => c._id === courseId);
                                        const fee = course ? Number(course.fee) : 0;
                                        return sum + (isNaN(fee) ? 0 : fee);
                                    }, 0)
                                )}
                            </p>
                        </div>
                    </div>
                    <button onClick={handleCreateKey} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                        Tạo mã truy cập
                    </button>
                    <div className="text-sm text-gray-500 mt-2">
                        <p>Lưu ý: Mỗi mã truy cập chỉ có thể sử dụng một lần duy nhất.</p>
                        <p>Mã truy cập sẽ hiển thị sau khi biểu mẫu được gửi đi.</p>
                    </div>
                </form>
            </div>
        </div>
    );
}


function CourseSelector({ courses, accessKey, setAccessKey }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddCourse = (courseId) => {
        if (!accessKey.courses.includes(courseId)) {
            setAccessKey(prev => ({ ...prev, courses: [...prev.courses, courseId] }));
        }
    };

    const handleRemoveCourse = (courseId) => {
        setAccessKey(prev => ({ ...prev, courses: prev.courses.filter(id => id !== courseId) }));
    };

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <label htmlFor="courseSearch" className="block text-sm font-medium text-gray-700">Tìm kiếm khóa học</label>
            <div className="flex gap-4 justify-center items-center">
                <input
                    type="text"
                    id="courseSearch"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Nhập tên khóa học..."
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>

            <div className="mt-2 max-h-40 overflow-auto border border-gray-300 rounded-md">
                {filteredCourses.map(course => (
                    course.status == true &&
                    <div
                        key={course._id}
                        className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-100"
                    >
                        <img src={` ${process.env.VITE_API}/${course.image}`} alt={course.name} className="w-8 h-8 object-cover rounded-md" />
                        <span>{course.name}</span>
                        <span>{formatCurrency(course.fee)}</span>
                        <button
                            onClick={() => handleAddCourse(course._id)}
                            className="px-3 w-fit py-1 ml-auto bg-green-600 text-white rounded-md text-xs"
                        >
                            Thêm
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <h3 className="text-xs ml-5 font-semibold">Khóa học đã chọn:</h3>
                <ul>
                    {accessKey.courses.map(courseId => {
                        const course = courses.find(c => c._id === courseId);
                        return <div
                            key={course._id}
                            className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-100"
                        >
                            <img src={` ${process.env.VITE_API}/${course.image}`} alt={course.name} className="w-8 h-8 object-cover rounded-md" />
                            <span>{course.name}</span>
                            <span>{formatCurrency(course.fee)}</span>
                            <button
                                onClick={() => handleRemoveCourse(course._id)}
                                className="px-3 py-1 ml-auto bg-red-600 text-white rounded-md text-xs"
                            >
                                Xóa
                            </button>
                        </div>
                    })}
                </ul>
            </div>
        </div>
    );
}

export const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' ₫';
};
