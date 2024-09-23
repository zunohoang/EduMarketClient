import Categories from "../../components/user/Categories/Categories.jsx";
import CourseCatalog from "../../components/user/Course/CourseCatalog.jsx";
import CourseTabs from "../../components/user/Course/CourseTabs.jsx";

export default function Course() {
    return (
        <div className="pt-[70px] m-3">
            <Categories />
            <CourseCatalog />
        </div>
    )
}