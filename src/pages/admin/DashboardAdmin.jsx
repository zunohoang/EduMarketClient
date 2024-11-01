import { Home, BookMarked, Diamond } from "lucide-react"

const data = [
    { name: 'Jan', CHN: 400, USA: 240, UK: 320 },
    { name: 'Feb', CHN: 300, USA: 139, UK: 221 },
    { name: 'Mar', CHN: 200, USA: 980, UK: 229 },
    { name: 'Apr', CHN: 278, USA: 390, UK: 200 },
    { name: 'May', CHN: 189, USA: 480, UK: 281 },
    { name: 'Jun', CHN: 239, USA: 380, UK: 250 },
    { name: 'Jul', CHN: 349, USA: 430, UK: 210 },
]

const trafficData = [
    { name: 'Search Engines', value: 30 },
    { name: 'Direct Click', value: 30 },
    { name: 'Bookmarks Click', value: 40 },
]

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <header className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Home className="text-white" size={20} />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                </div>
                <button className="text-gray-600 hover:text-gray-800">Overview</button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-br from-orange-400 to-pink-500 text-white rounded-lg">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm opacity-80">Weekly Sales</p>
                            <h2 className="text-3xl font-bold mt-2">$ 15,0000</h2>
                            <p className="text-sm mt-2">Increased by 60%</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm opacity-80">Weekly Orders</p>
                            <h2 className="text-3xl font-bold mt-2">45,6334</h2>
                            <p className="text-sm mt-2">Decreased by 10%</p>
                        </div>
                        <BookMarked className="w-6 h-6 opacity-80" />
                    </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-lg">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm opacity-80">Visitors Online</p>
                            <h2 className="text-3xl font-bold mt-2">95,5741</h2>
                            <p className="text-sm mt-2">Increased by 5%</p>
                        </div>
                        <Diamond className="w-6 h-6 opacity-80" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">Visit And Sales Statistics</h3>
                    <div className="space-y-2">
                        {data.map((item) => (
                            <div key={item.name} className="flex items-center justify-between text-gray-700">
                                <span>{item.name}</span>
                                <div className="flex space-x-2">
                                    <div
                                        className="bg-blue-500 h-4"
                                        style={{ width: `${item.CHN / 10}%` }}
                                    ></div>
                                    <div
                                        className="bg-green-500 h-4"
                                        style={{ width: `${item.USA / 10}%` }}
                                    ></div>
                                    <div
                                        className="bg-yellow-500 h-4"
                                        style={{ width: `${item.UK / 10}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-6 bg-white rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">Traffic Sources</h3>
                    <div className="flex justify-around items-center">
                        {trafficData.map((item, index) => (
                            <div key={index} className="text-center">
                                <div
                                    className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white"
                                    style={{ backgroundColor: ["#0088FE", "#00C49F", "#FFBB28"][index] }}
                                >
                                    {item.value}%
                                </div>
                                <p className="mt-2 text-gray-600">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
