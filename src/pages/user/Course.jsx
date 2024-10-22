import Categories from "../../components/user/Categories/Categories.jsx";
import CourseCatalog from "../../components/user/Course/CourseCatalog.jsx";
import FilterSidebar from "../../components/user/Course/FilterSidebar.jsx";
import CourseTabs from "../../components/user/Course/CourseTabs.jsx";


export default function Course() {
    return (
        <div className="pt-[70px]">
            <Categories />
            <div className="m-6 mt-12">
                <h3 className="text-[#355676] text-[17.5px] font-bold">DANH MỤC</h3>
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-3 col-span-12 flex justify-center">
                        <FilterSidebar />
                    </div>
                    <div className="lg:col-span-9 col-span-12 flex justify-center">
                        <CourseTabs />
                    </div>
                </div>
            </div>
        </div>
    )
}