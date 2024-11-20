import { useCourse } from "../../../../contexts/CourseContext"

export default function VideoHomeCard() {
    const course = useCourse();

    return (
        <div className="relative w-full flex justify-center items-center aspect-video text-white text-2xl font-medium rounded-lg">
            <img
                className="absolute z-0 blur-3xl w-[70%] h-[50%]"
                src={process.env.VITE_API + "/" + course.image}
                alt="KHOÁ O - THỰC CHIẾN LUYỆN ĐỀ VẬT LÝ NĂM 2025"
            />
            <div className="z-10 w-full h-full flex items-center p-8 tab:p-16 gap-8 bg-[rgb(26,75,138,0.25)] rounded-lg justify-center">
                <img
                    className="h-[128px] rounded-lg shadow-md"
                    src={process.env.VITE_API + "/" + course.image}
                    alt="KHOÁ O - THỰC CHIẾN LUYỆN ĐỀ VẬT LÝ NĂM 2025"
                />
                <div className="col-span-8">
                    <h1 className="font-medium text-xl">{course.name}</h1>
                </div>
            </div>
        </div>
    )
}