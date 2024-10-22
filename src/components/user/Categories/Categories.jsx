import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

export default function Categories() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="m-6">
            <div className="flex">
                <h3 className="text-[#355676] text-[17.5px] font-bold">DANH MỤC</h3>
                <div className="ml-auto flex gap-2 items-center cursor-pointer" onClick={() => setShowMore(!showMore)}>
                    <p className="text-sm">{!showMore ? 'Xem thêm' : 'Thu gọn'}</p>
                    <svg className={`size-5 duration-500  ${(showMore ? `-rotate-180` : ` `)}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            <div className={`mt-6 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-hidden transition-all duration-1500 ease-in-out ${!showMore ? `h-48` : `h-auto`}`}>
                <CategoryCard title="KHÓA HỌC LỚP 12" />
                <CategoryCard title="KHÓA HỌC LỚP 11" />
                <CategoryCard title="KHÓA HỌC LỚP 9" />
                <CategoryCard title="KHÓA HỌC LỚP 8" />
                <CategoryCard title="KHÓA HỌC LỚP 7" />
                <CategoryCard title="KHÓA HỌC LỚP 8" />
            </div>
        </div>
    )
}