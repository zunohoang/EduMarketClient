import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function CourseCategories() {
    const navigate = useNavigate();

    const [category, setCategory] = React.useState();

    useEffect(() => {
        // Call api to get category
        // setCategory(response.data);
    }, []);

    return (
        <div className="pt-[70px]">
            <div className="grid grid-cols-12 p-5">
                <div className="lg:col-span-8 col-span-12 p-4 bg-white rounded-md order-2 lg:order-1">
                    <p className='font-medium text-sky-900'>Danh sách khóa học</p>
                    <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 p-1 mt-4'>
                        <CourseItem
                            name="Vật lý siêu tốc"
                            img="/subject1_1.jpg"
                            teacher="Nguyễn Văn Hoàng"
                            id="1"
                        />
                        <CourseItem
                            name="Vật lý siêu tốc"
                            img="/subject1_1.jpg"
                            teacher="Nguyễn Văn Hoàng"
                            id="1"
                        />
                        <CourseItem
                            name="Vật lý siêu tốc"
                            img="/subject1_1.jpg"
                            teacher="Nguyễn Văn Hoàng"
                            id="1"
                        />
                        <CourseItem
                            name="Vật lý siêu tốc"
                            img="/subject1_1.jpg"
                            teacher="Nguyễn Văn Hoàng"
                            id="1"
                        />
                        <CourseItem
                            name="Vật lý siêu tốc"
                            img="/subject1_1.jpg"
                            teacher="Nguyễn Văn Hoàng"
                            id="1"
                        />
                    </div>
                </div>
                <div className="lg:col-span-4 lg:ml-10 lg:mb-0 mb-5 p-4 col-span-12 bg-white rounded-md order-1 lg:order-2">
                    <div className="rounded-lg flex justify-center items-center h-52 bg-gradient-to-br from-indigo-900 via-indigo-600 to-indigo-900">
                        <p className="text-white uppercase">Xuất phát sớm 2k5</p>
                    </div>
                    <p className=" mt-3 font-bold text-sky-950 uppercase">Xuất phát sớm 2k5</p>
                </div>
            </div >
        </div >
    )
}

function CourseItem({ name, img, teacher, id }) {
    return (
        <Link className="course__item min-w-[150px] text-[#395978] m-2" key={id} to={`/courses/${id}`}>
            <img className="rounded-xl" src={img} alt={name} />
            <div className="uppercase mt-2 text-[15px] font-medium">
                <h2>{name}</h2>
            </div>
            <div className="flex items-center text-[13px] gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
                <p>{teacher}</p>
            </div>
        </Link>
    );
}