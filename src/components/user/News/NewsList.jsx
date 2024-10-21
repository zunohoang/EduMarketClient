import React from 'react';
import { Link } from 'react-router-dom';

function HomeIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 18V15"
                stroke='#2D5D90'
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
            <path
                d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
                strokeWidth="2"
                stroke='#2D5D90'
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </svg>
    );
}

function NewsCard({ title, time, id, img }) {
    return (
        <Link
            to={`/news/${id}`}
            className="p-4 border border-[#E0E0E0] bg-[#FFFFFF] rounded-lg cursor-pointer flex gap-4 shadow-xs hover:shadow-md">
            <img src={img} alt="news" className="w-16 h-16 object-cover rounded-lg" />
            <div className="flex flex-col justify-between">
                <div className="text-md font-semibold">{title}</div>
                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    <div className="text-xs text-[#9B9B9B]">{time}</div>
                </div>
            </div>
        </Link>
    );
}

export default function NewsList() {
    return (
        <div className="w-full">
            <div className="flex items-center text-[#2D5D90] gap-3 w-full">
                <HomeIcon />
                <div className="text-lg">&gt;</div>
                <span className="font-medium cursor-pointer">Tin tức</span>
            </div>

            <div className="w-full p-6 flex justify-center">
                <div className="w-full grid lg:grid-cols-3 gap-3 grid-cols-1 md:grid-cols-2">
                    <NewsCard
                        title={"Gợi ý đáp án đề thi môn Vật Lý tốt nghiệp THPT 2024"}
                        time={"16:00 01/01/2024"}
                        img={"https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4cz9w00ew1/sse7ts8006kv-1718867802248.jpg"}
                        id={1}
                    />
                    <NewsCard
                        title={"Gợi ý đáp án đề thi môn Vật Lý tốt nghiệp THPT 2024"}
                        time={"16:00 01/01/2024"}
                        img={"https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4cz9w00ew1/sse7ts8006kv-1718867802248.jpg"}
                        id={1}
                    />
                    <NewsCard
                        title={"Gợi ý đáp án đề thi môn Vật Lý tốt nghiệp THPT 2024"}
                        time={"16:00 01/01/2024"}
                        img={"https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4cz9w00ew1/sse7ts8006kv-1718867802248.jpg"}

                        id={1}
                    />
                    <NewsCard
                        title={"Gợi ý đáp án đề thi môn Vật Lý tốt nghiệp THPT 2024"}
                        time={"16:00 01/01/2024"}
                        img={"https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4cz9w00ew1/sse7ts8006kv-1718867802248.jpg"}
                        id={1}
                    />
                    <NewsCard
                        title={"Gợi ý đáp án đề thi môn Vật Lý tốt nghiệp THPT 2024"}
                        time={"16:00 01/01/2024"}
                        img={"https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4cz9w00ew1/sse7ts8006kv-1718867802248.jpg"}
                        id={1}
                    />

                    <NewsCard
                        title={"Gợi ý đáp án đề thi môn Vật Lý tốt nghiệp THPT 2024"}
                        time={"16:00 01/01/2024"}
                        img={"https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4cz9w00ew1/sse7ts8006kv-1718867802248.jpg"}
                        id={1}
                    />
                    <NewsCard
                        title={"Gợi ý đáp án đề thi môn Vật Lý tốt nghiệp THPT 2024"}
                        time={"16:00 01/01/2024"}
                        img={"https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4cz9w00ew1/sse7ts8006kv-1718867802248.jpg"}
                        id={1}
                    />
                </div>
            </div>
        </div>
    );
}