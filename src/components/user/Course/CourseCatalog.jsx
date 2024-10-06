import FilterSidebar from "./FilterSidebar";
import CourseTabs from "./CourseTabs";

export default function Course() {
    return (
        <div className="m-6 mt-12">
            <h3 className="text-[#355676] text-[17.5px] font-bold">DANH MỤC</h3>
            <div className="flex gap-6">
                <FilterSidebar />
                <div className="course-content">
                    <CourseTabs />
                </div>
            </div>
        </div>
    )
}