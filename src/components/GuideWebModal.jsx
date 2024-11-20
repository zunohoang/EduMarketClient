import { useState, useEffect } from 'react'

export default function UserGuideModal() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(true);
    }, [])

    const closeModal = () => setIsOpen(false)

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-xl w-full">
                <div className="p-6">
                    <h2 className="text-2xl font-extrabold mb-4 text-sky-800">Chào mừng tới với Edumarket :&gt;</h2>
                    <p className="text-gray-600 mb-4">Hosting free nên có thể data load hơi chậm ạ. Em xin lỗi vì sự bất tiện này.
                    </p>
                    <ul className="list-disc pl-5 mb-6 space-y-2">
                        <li>GITHUB của dự án: <a className='text-blue-700' href='https://github.com/zunohoang/EduMarketClient'>Mã nguồn</a></li>
                        <li>Anh chị có thể đăng nhập vào với tài khoản quyền admin là:
                            <ul className="list-disc pl-5 text-sky-700">
                                <li>Username: admin</li>
                                <li>Password: 123456</li>
                                <li>Sau đấy vào profile để chuyển qua quyền admin</li>
                            </ul>
                        </li>
                        <li>Em cảm ơn ạ</li>
                    </ul>
                    <p className="text-gray-600 mb-4 text-sm">*Để xem lại thông báo này anh chị chỉ cần việc load lại trang home ạ.</p>
                    <p className="text-gray-600 mb-4 text-sm">Em một lần nữa cảm ơn anh chị đã trải nghiệm ạ.</p>
                    <button
                        onClick={closeModal}
                        className="w-full bg-sky-700 text-white py-2 px-4 rounded hover:bg-sky-500 transition duration-200"
                    >
                        Trải nghiệm - Bắt đầu
                    </button>
                </div>
            </div>
        </div>
    )
}