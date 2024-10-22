import { Link } from 'react-router-dom'

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

function TableRes({ cnt }) {
    const answerKey = [
        ['B', 'D', 'C', 'C', 'A', 'A', 'B', 'D', 'C', 'A'],
        ['A', 'C', 'C', 'B', 'C', 'D', 'A', 'C', 'A', 'B'],
        ['A', 'A', 'A', 'C', 'B', 'D', 'B', 'C', 'D', 'D'],
        ['D', 'C', 'B', 'B', 'A', 'B', 'D', 'A', 'B', 'D'],
        ['C', 'D', 'A', 'A', 'A', 'D', 'B', 'C', 'D', 'C'],
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Mã đề {cnt}</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <tbody>
                        {answerKey.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((answer, colIndex) => (
                                    <td key={colIndex} className="border border-gray-300 p-2 text-center">
                                        {rowIndex * 10 + colIndex + 1}. {answer}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function NewsCard({ title, time, id }) {
    return (
        <Link to={`/news/${id}`} className="flex gap-3 items-center p-2 m-2 rounded-md hover:shadow-md">
            <img className="w-16 h-16 rounded-md" src="https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4mwau00f3a/sse7j1h006jt-1718867788325.jpg" alt="" />
            <div className="text-md">
                <p>{title}</p>
                <div className="flex gap-2 text-sm items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    <p>{time}</p>
                </div>
            </div>
        </Link>
    );
}

export default function NewsDetail() {
    return (
        <div className="w-full">
            <div className="flex items-center text-[#2D5D90] gap-3 w-full">
                <HomeIcon />
                <div className="text-lg">&gt;</div>
                <span className="font-medium cursor-pointer">Tin tức</span>
            </div>
            <div className="mt-6 flex gap-6 w-full flex-wrap">
                <div className="bg-[#FFFFFF] xl:w-[70%] w-full rounded-lg p-5">
                    <div className="flex gap-2 text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                        <p>14:41 - 27/6/2024</p>
                    </div>
                    <div className="my-4">
                        <h1 className="text-2xl font-bold text-center">Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2024</h1>
                        <p className="text-center">(Đã cập nhật đầy đủ gợi ý đáp án 24 mã đề môn Toán)</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <p> Kỳ thi tốt nghiệp THPT năm 2024 diễn ra vào cuối tháng 6. Trong đó, ngày 26/6/2024 là ngày làm thủ tục dự thi tốt nghiệp THPT năm 2024. Tổ chức coi thi tốt nghiệp THPT vào 2 ngày 27 và 28/6/2024.</p>
                        <p>Kỳ thi tốt nghiệp THPT năm 2024 tổ chức thi 5 bài thi, gồm: 3 bài thi độc lập là Toán, Ngữ văn, Ngoại ngữ; 1 bài thi tổ hợp Khoa học Tự nhiên gồm các môn thi thành phần Vật lí, Hóa học, Sinh học; 1 bài thi tổ hợp Khoa học Xã hội gồm các môn thi thành phần Lịch sử, Địa lí, Giáo dục công dân.</p>
                        <p>Mapstudy sẽ cập nhật đáp án đầy đủ các môn Toán, Lý, Hoá, Anh, Sinh nhanh nhất, chính xác nhất ngay sau khi kết thúc bài thi. Truy cập trang thường xuyên để theo dõi thông tin nhé !</p>
                    </div>
                    <div className="">
                        <h1 className="text-2xl font-bold text-center my-10">Gợi ý đáp án 24 mã đề môn Toán</h1>
                        <TableRes cnt={'101'} />
                        <TableRes cnt={'102'} />
                        <TableRes cnt={'103'} />
                    </div>
                </div>
                <div className="bg-[#FFFFFF] xl:w-[28%] w-full rounded-xl p-4">
                    <h1 className="text-lg font-bold">Các tin tức khác</h1>
                    <div className="my-6">
                        <NewsCard title="Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2024" time="14:41 - 27/6/2024" id={1} />
                        <NewsCard title="Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2024" time="14:41 - 27/6/2024" id={2} />
                        <NewsCard title="Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2024" time="14:41 - 27/6/2024" id={3} />
                        <NewsCard title="Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2024" time="14:41 - 27/6/2024" id={1} />
                        <NewsCard title="Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2024" time="14:41 - 27/6/2024" id={2} />
                        <NewsCard title="Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2024" time="14:41 - 27/6/2024" id={3} />
                        <NewsCard title="Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2024" time="14:41 - 27/6/2024" id={1} />
                        <NewsCard title="Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2024" time="14:41 - 27/6/2024" id={2} />
                        <NewsCard title="Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2024" time="14:41 - 27/6/2024" id={3} />
                    </div>
                </div>
            </div>
        </div>
    );
}