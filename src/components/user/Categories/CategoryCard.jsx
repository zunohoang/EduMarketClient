import React, { useMemo } from 'react';

function getRandomColor() {
    const colors = [
        '#C62828', // Đỏ đậm
        '#1565C0', // Xanh đậm
        '#2E7D32', // Xanh lá đậm
        '#FBC02D', // Vàng đậm
        '#6A1B9A', // Tím đậm
        '#D84315', // Cam đậm
        '#AD1457', // Hồng đậm
        '#009688', // Xanh teal đậm
        '#5E35B1', // Tím nhạt
        '#7CB342', // Xanh lá nhạt
        '#424242'   // Xám đậm
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}
export default function CategoryCard({ title }) {
    const color1 = useMemo(() => getRandomColor(), []);
    const color2 = useMemo(() => getRandomColor(), []);


    return (
        <div>
            <div
                className="h-40 rounded-lg flex justify-center items-center text-lg text-white text-opacity-70 font-bold"
                style={{ background: `linear-gradient(to bottom right, ${color1}, ${color2}50)` }} // Sử dụng gradient
            >
                {title}
            </div>
            <h3 className="text-[#355676] font-semibold text-sm mt-2 ml-1">{title}</h3>
        </div>
    );
}