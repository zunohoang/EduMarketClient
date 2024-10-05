
function ClassCard({ title, isActive }) {
    return (
        <div className="flex items-center justify-center p-6 h-12 cursor-pointer"
            style={{
                color: isActive ? "#2D5D90" : "#9CA3AF",
                borderBottom: isActive ? "2px solid #2D5D90" : "none"
            }}
        >
            <p className="text-lg font-semibold">{title}</p>
        </div>
    )
}

export default function CourseTabs() {
    return (
        <div className="mt-8 pl-12 w-full">
            <div className="flex">
                <ClassCard title={"Tất cả"} isActive={true} />
                <ClassCard title={"Lớp 12"} isActive={false} />
                <ClassCard title={"Lớp 11"} isActive={false} />
                <ClassCard title={"Lớp 10"} isActive={false} />
                <ClassCard title={"Lớp 9"} isActive={false} />
            </div>
            <div className=" h-[1px] w-full bg-[rgba(0,0,0,0.1)]"></div>
        </div>
    )
}