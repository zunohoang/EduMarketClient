import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SvgIcon = ({ d }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
    </svg>
);

function ItemOption({ item, activeItem, setActiveItem, toggleSection, openSections }) {
    return (
        <div>
            <div
                className={`flex items-center mb-1 p-2 rounded-lg cursor-pointer ${activeItem === item.name ? 'bg-sky-900 text-white' : 'hover:bg-gray-800'
                    }`}
                onClick={() => {
                    toggleSection(item.name);
                }}
            >
                <SvgIcon d={item.icon} />
                <span className="ml-3">{item.name}</span>
            </div>

            {openSections[item.name] && item.subItems && (
                <ul className="ml-8 flex flex-col gap-1">
                    {item.subItems.map((subItem) => (
                        <NavLink key={subItem.title}
                            className={({ isActive }) => `${isActive ? 'text-white' : ''} rounded-md p-3 block text-gray-400 hover:text-white py-1`}
                            to={`${subItem.url}`}
                            onClick={() => {
                                setActiveItem(item.name);
                            }}
                        >
                            <div>{subItem.title}</div>
                        </NavLink>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function SideBar() {
    const [activeItem, setActiveItem] = useState('Home');
    const [openSections, setOpenSections] = useState({}); // Trạng thái hiển thị các sub-options

    const menuItems = [
        {
            name: 'Bảng điều khiển',
            icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', // Biểu tượng Bảng điều khiển
            section: 'CHÍNH', subItems: []
        },
        {
            name: 'Khóa học',
            icon: 'M12 0C8.686 0 6 2.686 6 6v6H2c-1.104 0-2 .896-2 2v1c0 1.104.896 2 2 2h4v2c0 1.104.896 2 2 2s2-.896 2-2v-2h4c1.104 0 2-.896 2-2v-1c0-1.104-.896-2-2-2h-4V6c0-3.314-2.686-6-6-6zm0 2c2.209 0 4 1.791 4 4v6h-8V6c0-2.209 1.791-4 4-4z', // Biểu tượng Khóa học
            section: 'CHÍNH',
            subItems: [
                { title: 'Danh sách khóa học', url: '/admin/courses' },
                { title: 'Thêm khóa học', url: '/admin/add-course' }
            ]
        },
        {
            name: 'Giáo viên',
            icon: 'M12 0C8.686 0 6 2.686 6 6v6H2c-1.104 0-2 .896-2 2v1c0 1.104.896 2 2 2h4v2c0 1.104.896 2 2 2s2-.896 2-2v-2h4c1.104 0 2-.896 2-2v-1c0-1.104-.896-2-2-2h-4V6c0-3.314-2.686-6-6-6zm0 2c2.209 0 4 1.791 4 4v6h-8V6c0-2.209 1.791-4 4-4z', // Biểu tượng Giáo viên
            section: 'CHÍNH', subItems: [
                { title: 'Danh sách giáo viên', url: '/admin/teachers' },
                { title: 'Thêm giáo viên', url: '/admin/add-teacher' }
            ]
        },
        {
            name: 'Học sinh',
            icon: 'M12 0C8.686 0 6 2.686 6 6v6H2c-1.104 0-2 .896-2 2v1c0 1.104.896 2 2 2h4v2c0 1.104.896 2 2 2s2-.896 2-2v-2h4c1.104 0 2-.896 2-2v-1c0-1.104-.896-2-2-2h-4V6c0-3.314-2.686-6-6-6zm0 2c2.209 0 4 1.791 4 4v6h-8V6c0-2.209 1.791-4 4-4z', // Biểu tượng Học sinh
            section: 'CHÍNH',
            subItems: [
                { title: 'Danh sách học viên', url: '/admin/students' }
            ]
        },
        ,
        {
            name: 'Người dùng',
            icon: 'M12 0C8.686 0 6 2.686 6 6v6H2c-1.104 0-2 .896-2 2v1c0 1.104.896 2 2 2h4v2c0 1.104.896 2 2 2s2-.896 2-2v-2h4c1.104 0 2-.896 2-2v-1c0-1.104-.896-2-2-2h-4V6c0-3.314-2.686-6-6-6zm0 2c2.209 0 4 1.791 4 4v6h-8V6c0-2.209 1.791-4 4-4z', // Biểu tượng Học sinh
            section: 'CHÍNH',
            subItems: [
                { title: 'Danh sách người dùng', url: '/admin/users' },
                { title: 'Thêm người dùng', url: '/admin/add-user' }
            ]
        },
        {
            name: 'Tin tức',
            icon: 'M20 6v14H4V6z', // Biểu tượng Tin tức
            section: 'CHÍNH',
            subItems: [
                { title: 'Danh sách tin tức', url: '/admin/news' },
                { title: 'Thêm tin tức', url: '/admin/add-news' }
            ]
        },
        {
            name: 'Key & Giao dịch',
            icon: 'M12 0C8.686 0 6 2.686 6 6v6H2c-1.104 0-2 .896-2 2v1c0 1.104.896 2 2 2h4v2c0 1.104.896 2 2 2s2-.896 2-2v-2h4c1.104 0 2-.896 2-2v-1c0-1.104-.896-2-2-2h-4V6c0-3.314-2.686-6-6-6zm0 2c2.209 0 4 1.791 4 4v6h-8V6c0-2.209 1.791-4 4-4z', // Biểu tượng Giao dịch
            section: 'CHÍNH',
            subItems: [
                { title: 'Mã truy cập (Giao dịch)', url: '/admin/access-keys' },
                { title: 'Tạo mã', url: '/admin/add-key' }
            ]
        },
        {
            name: 'Cài đặt',
            icon: "M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z",
            section: 'KHÁC', subItems: [
                { title: 'Cài đặt trang web', url: '/admin/settings' },
                { title: 'Bảo mật', url: '/admin/users' }
            ]
        },
    ];


    const toggleSection = (name) => {
        setOpenSections((prev) => ({
            ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
            [name]: true,
        }));
    };

    return (
        <div className="h-screen w-full bg-[#1C1C28] text-gray-300 p-4 flex flex-col">
            <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-sky-900 rounded-lg mr-3"></div>
                <div>
                    <h1 className="text-white font-semibold">EduMarket</h1>
                    <p className="text-xs text-gray-400">Admin Dashboard</p>
                </div>
            </div>

            <nav className="flex-1">
                {['CHÍNH', 'KHÁC'].map((section) => (
                    <div key={section} className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">{section}</p>
                        <ul>
                            {menuItems
                                .filter((item) => item.section === section)
                                .map((item) => (
                                    <ItemOption
                                        key={item.name}
                                        item={item}
                                        activeItem={activeItem}
                                        setActiveItem={setActiveItem}
                                        toggleSection={toggleSection}
                                        openSections={openSections}
                                    />
                                ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </div>
    );
}
