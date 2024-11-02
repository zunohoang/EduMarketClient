
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CourseManager() {
    const navigate = useNavigate();

    const [teacher, setTeacher] = useState({
        name: '',
        born: '',
        image: '',
        phone: '',
        email: '',
        username: '',
        password: '',
        repassword: '',
        address: '',
        description: ''
    });

    const [previewImage, setPreviewImage] = useState(null);
    const fileInputRef = useRef(null);
    const [formValid, setFormValid] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'repassword') {
            if (value !== teacher.password) {
                setFormValid(false);
            } else {
                setFormValid(true);
            }
        }
        setTeacher(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleCreateTeacher = async () => {
        if (!formValid) {
            alert('Mật khẩu không khớp');
            return;
        }

        const formData = new FormData();
        formData.append('file', fileInputRef.current.files[0]);
        formData.append('teacher', JSON.stringify(teacher));
        console.log(teacher);

        const res = await fetch(`${process.env.VITE_API}/api/v1/users/teacher`, {
            method: 'POST',
            body: formData,
        });

        const data = await res.json();
        console.log(data);
        if (data.status) {
            alert('Thêm giáo viên thành công');
            navigate('/admin/teachers');
        } else {
            alert('Thêm giáo viên thất bại');
        }
    }

    return (
        <div className="course-manager bg-gray-100 min-h-screen p-6">
            <h1 className="font-medium text-2xl mb-6 text-gray-800">Giáo viên</h1>
            <div className="mx-auto bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-6">
                    <h1 className="text-xl font-semibold text-gray-800">Thêm giáo viên</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className='flex gap-5'>
                        <div className='w-full'>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ tên</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={teacher.name}
                                onChange={handleChange}
                                placeholder='Họ tên...'
                                className="mt-2 p-2 block w-full rounded-md shadow-sm shadow-gray-300 outline-none focus:border-sky-800 focus:ring focus:ring-sky-700  focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="born" className="block text-sm font-medium text-gray-700">Năm sinh</label>
                            <input
                                type="text"
                                id="born"
                                name="born"
                                value={teacher.born}
                                onChange={handleChange}
                                placeholder='VD: 1999'
                                className="mt-2 p-2 block w-full rounded-md shadow-gray-300 border-gray-300 shadow-sm outline-none focus:border-sky-800 focus:ring focus:ring-sky-700  focus:ring-opacity-50"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Avatar</label>
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
                            required
                        />
                        {previewImage && (
                            <img src={previewImage} alt="preview" className="mt-2 w-20 h-20 object-cover rounded-full" />)}
                    </div>
                    <div className='flex gap-5'>
                        <div className='w-full'>
                            <label htmlFor="phone" className=" block text-sm font-medium text-gray-700">Số điện thoại</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={teacher.phone}
                                onChange={handleChange}
                                placeholder='VD: 0987654321'
                                className="mt-2 p-2 block w-full rounded-md shadow-gray-300 border-gray-300 shadow-sm outline-none focus:border-sky-800 focus:ring focus:ring-sky-700  focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={teacher.email}
                                onChange={handleChange}
                                placeholder='VD: giaovien@gmail.com'
                                className="mt-2 p-2 block w-full rounded-md shadow-gray-300 border-gray-300 shadow-sm outline-none focus:border-sky-800 focus:ring focus:ring-sky-700  focus:ring-opacity-50"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Tài khoản</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={teacher.username}
                            onChange={handleChange}
                            placeholder='VD: giaovien'
                            className="mt-2 p-2 block w-full rounded-md shadow-gray-300 border-gray-300 shadow-sm outline-none focus:border-sky-800 focus:ring focus:ring-sky-700  focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Địa chỉ</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={teacher.address}
                            onChange={handleChange}
                            placeholder='VD: 123, HaNoi'
                            className="mt-2 p-2 block w-full rounded-md shadow-gray-300 border-gray-300 shadow-sm outline-none focus:border-sky-800 focus:ring focus:ring-sky-700  focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div className='flex gap-5'>
                        <div className='w-full'>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={teacher.password}
                                onChange={handleChange}
                                className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-gray-300 shadow-sm outline-none focus:border-sky-800 focus:ring focus:ring-sky-700  focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="repassword" className="block text-sm font-medium text-gray-700">Nhập lại mật khẩu</label>
                            <input
                                type="password"
                                id="repassword"
                                name="repassword"
                                value={teacher.repassword}
                                onChange={handleChange}
                                className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-gray-300 shadow-sm outline-none focus:border-sky-800 focus:ring focus:ring-sky-700  focus:ring-opacity-50"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả</label>
                        <textarea
                            id="description"
                            name="description"
                            value={teacher.description}
                            onChange={handleChange}
                            placeholder='Mô tả...'
                            className="mt-2 p-2 h-32 block w-full rounded-md shadow-sm shadow-gray-300 outline-none focus:border-sky-800 focus:ring focus:ring-sky-700  focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <button onClick={handleCreateTeacher} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                        Thêm giáo viên
                    </button>
                </form>
            </div>
        </div>
    );
}
