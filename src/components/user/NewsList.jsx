import banner from "../../assets/banner.png"

function NewsItem({ margin, width, height }) {
    return (
        <div className="flex " >
            <li className="bg-slate-400 rounded-xl" style={{ margin, width, height }}>
                <img  className="w-full h-full object-cover rounded-xl" src={banner} alt="" />
            </li>
            <div className="">
                <h2 className="text-lg">Học Vật lí để không bị Lí vật</h2>
                <p>Giảm giá 50%</p>
            </div>
        </div>
    )
}

export default function NewsList({ itemCount, itemMargin, itemWidth, itemHeight }) {
    const items = Array.from({ length: itemCount }, (_, index) => (
        <NewsItem 
            key={index} 
            margin={itemMargin} 
            width={itemWidth} 
            height={itemHeight} 
        />
    ));
    return (
        <ul className="w-full h-96 flex flex-col justify-between ml-3">
            {items}
        </ul>
    )
}