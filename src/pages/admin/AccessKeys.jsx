import React, { useState, useEffect } from 'react'
import { PencilIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function AccessKey() {
    const [accessKeys, setAccessKeys] = useState([])

    useEffect(() => {
        const fetchAccessKey = async () => {
            const response = await fetch(`${process.env.VITE_API}/api/v1/access-keys`)
            if (response.ok) {
                const data = await response.json()
                if (data.status)
                    setAccessKeys(data.data);
            }
        }
        fetchAccessKey()
    }, []);


    return (
        <div className="p-6 bg-gray-100">
            <h1 className="font-medium text-2xl mb-6 text-gray-800">Mã truy cập - Giao dịch</h1>
            <TableAccessKey accessKeys={accessKeys} setAccessKeys={setAccessKeys} />
        </div>
    )
}

function TableAccessKey({ accessKeys, setAccessKeys }) {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    const filteredAccesskeys = accessKeys.filter(accessKey =>
        accessKey.key.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const indexOfLastAccesskey = currentPage * itemsPerPage
    const indexOfFirstAccesskey = indexOfLastAccesskey - itemsPerPage
    const currentAccesskeys = filteredAccesskeys.slice(indexOfFirstAccesskey, indexOfLastAccesskey)

    const totalPages = Math.ceil(filteredAccesskeys.length / itemsPerPage)

    const deleteAccesskey = async (id) => {
        const response = await fetch(`${process.env.VITE_API}/api/v1/access-keys/${id}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            const data = await response.json()
            if (data.status) {
                setAccessKeys(prev => prev.filter(Accesskey => AccessKey._id !== id))
            }
        }
    }

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Danh sách mã truy cập (giao dịch)</h2>
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Tìm kiếm mã..."
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
                                    Mã
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Người tạo
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Ngày tạo
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Giá
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Trạng thái
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Hóa đơn
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {accessKeys.map((accessKey, index) => (
                                <tr key={accessKey._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">{indexOfFirstAccesskey + index + 1}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{accessKey.key}</div>
                                        <div className="text-sm text-gray-400">{accessKey._id}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{accessKey.createdBy.fullName}</div>
                                        <div className="text-sm text-gray-400">{accessKey.createdBy._id}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">{new Date(accessKey.createdAt).toLocaleString()}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">{accessKey.price} VND</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${accessKey.status ? 'bg-green-100 text-green-800' :
                                                accessKey.status ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'}`}>
                                            {accessKey.status ? 'Đã sử dụng' : 'Chưa sử dụng'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className='w-10 h-10'>
                                            {accessKey.bill && (
                                                <img
                                                    src={`${process.env.VITE_API}/${accessKey.bill}`}
                                                    alt={accessKey.key}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => { e.target.style.display = 'none'; }}
                                                />
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">

                                        <button onClick={() => deleteAccesskey(accessKey._id)} className="text-red-600 hover:text-red-900" aria-label="Xóa">
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
                            Hiển thị <span className="font-medium">{indexOfFirstAccesskey + 1}</span> đến <span className="font-medium">{Math.min(indexOfLastAccesskey, filteredAccesskeys.length)}</span> trong tổng số <span className="font-medium">{filteredAccesskeys.length}</span> kết quả
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
