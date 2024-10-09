import NewsList from "../../components/user/NewsList";

export default function News() {
    return (
        <div className="pt-[80px] overflow-x-hidden flex flex-wrap mx-4 text-[#355676]">
            <div className="w-2/3 h-96 bg-slate-400 rounded-2xl
                            flex justify-end flex-col
                            bg-[url(../../assets/banner.png)]">
                <h1 className="text-3xl bg-gray-200 py-4 px-5 rounded-b-2xl">FLASH SALE - BUY 2 PAY 1</h1>
            </div>
            
            <div className="w-1/3 h-96">
                <NewsList 
                    itemCount={4}
                    itemMargin="0 16px 0 0"
                    itemWidth="144px"
                    itemHeight="80px"
                />
            </div>

            <div className="w-full h-full mt-10 ">
                <h1 className="ml-3 mb-1 text-[17.5px] font-bold">KHÓA HỌC MỚI</h1>

                <div className="w-full h-[1px] bg-slate-600 mb-5 mx-3"></div>
                <div className="flex overflow-x-scroll">
                    <NewsList 
                        itemCount={8}
                        itemMargin="4px 16px 4px 4px"
                        itemWidth="144px"
                        itemHeight="121px"
                    />
                    
                </div>
            </div>
            
            
        </div>
    )
}