
function Categories({ title }) {
    return (
        <div

            className="text-[#2E5E97] bg-[#F3F5F6] text-[13.125px] px-4 pt-2 pb-1.5  rounded-lg shadow-sm"
        >
            {title}
        </div>
    )

}

export default function SearchCategories() {
    return (
        <div className="bg-[#FFFFFF] rounded-xl p-5 mt-8">
            <h3 className="text-[#355676] text-[15.75px] font-bold">Bạn đang tìm kiếm gì ?</h3>
            <div className="flex flex-wrap gap-3 mt-3">
                <Categories title="Lớp học" />
                <Categories title="Khóa học" />
                <Categories title="Giáo viên" />
                <Categories title="Trung tâm" />
                <Categories title="Tài liệu" />
                <Categories title="Sự kiện" />
                <Categories title="Thầy Mạnh Dũng" />
                <Categories title="Khóa học" />
                <Categories title="Giáo viên" />
                <Categories title="Trung tâm" />
            </div>
        </div>
    )
}