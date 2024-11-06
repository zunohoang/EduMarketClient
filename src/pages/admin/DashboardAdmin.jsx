import React, { useEffect, useRef,useState } from 'react'



export function CustomersChart({widthChart,heightChart}) {
  const customerData = [
  { month: "Jan 2024", HN: 190, HCM: 110, HP: 70 },
  { month: "Feb 2024", HN: 150, HCM: 120, HP: 60 },
  { month: "Mar 2024", HN: 140, HCM: 90, HP: 80 },
  { month: "Apr 2024", HN: 190, HCM: 130, HP: 70 },
  { month: "May 2024", HN: 210, HCM: 140, HP: 85 },
  { month: "Jun 2024", HN: 220, HCM: 150, HP: 95 },
  { month: "Jul 2024", HN: 290, HCM: 190, HP: 120 },
  { month: "Aug 2024", HN: 280, HCM: 180, HP: 110 },
  { month: "Sep 2024", HN: 220, HCM: 170, HP: 90 },
  { month: "Oct 2024", HN: 240, HCM: 160, HP: 85 },
  { month: "Nov 2024", HN: 130, HCM: 90, HP: 50 },
]



  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const margin = { top: 30, right: 30, bottom: 30, left: 30 }
  const width = widthChart
  const height = heightChart
  const chartWidth = width - margin.left - margin.right
  const chartHeight = height - margin.top - margin.bottom

  const maxValue = Math.max(...customerData.flatMap(d => [d.HN, d.HCM, d.HP]))
  const xScale = (index) => (index / (customerData.length - 1)) * chartWidth
  const yScale = (value) => chartHeight - (value / maxValue) * chartHeight

  const HNPath = customerData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.HN)}`).join(' ')
  const HCMPath = customerData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.HCM)}`).join(' ')
  const HPPath = customerData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.HP)}`).join(' ')

  return (
    <div className="bg-white w-full h-full flex flex-col overflow-scroll" >
      <svg width={widthChart} height={heightChart} >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {/* X and Y axes */}
          <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="currentColor" />
          <line x1="0" y1="0" x2="0" y2={chartHeight} stroke="currentColor" />

          {/* X-axis labels */}
          {customerData.map((d, i) => (
            <text
              key={i}
              x={xScale(i)}
              y={chartHeight + 20}
              textAnchor="middle"
              className="text-xs fill-gray-500"
            >
              {d.month.split(' ')[0]}
            </text>
          ))}

          {/* Y-axis labels */}
          {[0, 100, 200, 300, 400].map((tick, i) => (
            <text
              key={i}
              x="-10"
              y={yScale(tick)}
              textAnchor="end"
              alignmentBaseline="middle"
              className="text-xs fill-gray-500"
            >
              {tick}
            </text>
          ))}

          {/* Grid lines */}
          {[0, 100, 200, 300, 400].map((tick, i) => (
            <line
              key={i}
              x1="0"
              y1={yScale(tick)}
              x2={chartWidth}
              y2={yScale(tick)}
              stroke="currentColor"
              strokeOpacity="0.1"
            />
          ))}

          {/* Data lines */}
          <path d={HNPath} fill="none" stroke="#3b82f6" strokeWidth="2" />
          <path d={HCMPath} fill="none" stroke="#10b981" strokeWidth="2" />
          <path d={HPPath} fill="none" stroke="#f59e0b" strokeWidth="2" />

          {/* Data points */}
          {customerData.map((d, i) => (
            <g key={i}>
              <circle cx={xScale(i)} cy={yScale(d.HN)} r="4" fill="#3b82f6" />
              <circle cx={xScale(i)} cy={yScale(d.HCM)} r="4" fill="#10b981" />
              <circle cx={xScale(i)} cy={yScale(d.HP)} r="4" fill="#f59e0b" />
            </g>
          ))}
        </g>
      </svg>

      {/* Legend */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center mr-4">
          <div className="w-4 h-4 bg-blue-500 mr-2"></div>
          <span className="text-sm">Người đăng kí mới</span>
        </div>
        <div className="flex items-center mr-4">
          <div className="w-4 h-4 bg-green-500 mr-2"></div>
          <span className="text-sm">Số lượng giao dịch </span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-500 mr-2"></div>
          <span className="text-sm">Số người dùng truy cập</span>
        </div>
      </div>
    </div>
  )
}



export function BarChart({width,height}) {
    const frenqData = [
        { category: "Thứ 2", value: 10 },
        { category: "Thứ 3", value: 20 },
        { category: "Thứ 4", value: 32 },
        { category: "Thứ 5", value: 16 },
        { category: "Thứ 6", value: 5 },
        { category: "Thứ 7", value: 12 },
        { category: "Chủ nhật", value:14 },

    ] 


    const maxValue = Math.max(...frenqData.map(item => item.value))
    const chartHeight = width
    const chartWidth = height
    const barWidth = chartWidth / frenqData.length * 0.8
    const gap = chartWidth / frenqData.length * 0.2

    return (
    <div className="w-full max-w-3xl p-4 bg-white">
        <div className="relative h-[350px]" aria-hidden="true">
        <svg className="w-full h-full" viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
            {/* Bars */}
            {frenqData.map((item, index) => {
            const barHeight = (item.value / maxValue) * chartHeight
            const x = index * (barWidth + gap)
            return (
                <g key={item.category}>
                <rect
                  x={x}
                  y={chartHeight - barHeight}
                  width={barWidth}
                  height={barHeight}
                  fill="currentColor"
                  className="text-red-500 "
                />
                <text
                  x={x + barWidth / 2}
                  y={chartHeight - barHeight - 5}
                  textAnchor="middle"
                  fill="currentColor"
                  className="text-xs font-medium text-gray-700 "
                >
                  {item.value}
                </text>
              </g>
            )
            })}
        </svg>
        
        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between">
            {frenqData.map((item, index) => {
            const labelWidth = chartWidth / frenqData.length
            return (
                <div key={item.category} className="flex justify-center" style={{ width: labelWidth }}>
                <span className="text-xs text-gray-600 text-center">
                    {item.category}
                </span>
                </div>
            )
            })}
        </div>
        </div>
    </div>
  )
}

export default function DashboardAdmin() {
  const stats = [
    { label: 'Đơn hàng mới', value: '20', icon: '📈' },
    { label: 'Tỉ lệ thanh toán', value: '70.24%', icon: '💰' },
    { label: 'Người đăng kí mới', value: '203', icon: '🏦' },
    { label: 'Người truy cập', value: '2935', icon: '📊' }
  ]

  const keyData = [
    { name: 'mất gốc lí', used: 175, quantity: 2458, date: '24 Jan 2021' },
    { name: 'mất gốc hóa', used: 108, quantity: 1485, date: '12 Jun 2021' },
    { name: 'mất gốc sinh', used: 213, quantity: 1024, date: '5 Jan 2021' },
    { name: 'mất gốc toán', used: 315, quantity: 858, date: '7 Mar 2021' },
    { name: 'mất gốc văn', used: 122, quantity: 258, date: '17 Dec 2021' }
  ]

  const courseTable = [
    { name: 'mất gốc lí', status: 'approved', date: '18 Apr 2024', teacher: 'hoang' },
    { name: 'mất gốc văn', status: 'declined', date: '18 Apr 2024', teacher: 'nam' },
    { name: 'mất gốc toán', status: 'declined', date: '20 May 2024', teacher: 'hai' },
    { name: 'mất gốc hóa', status: 'approved', date: '12 Jul 2024', teacher: 'tu' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-medium">Thống kê hoạt động người dùng </h3>
              <CustomersChart widthChart={500} heightChart={300}/>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium">Thống kê đơn hàng</h3>
            <BarChart width={200} height={400}/>

        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Bảng thống kê key và sô lượng sử dụng</h3>
            <button className="text-gray-500 hover:text-gray-700">•••</button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-500">
                  <th className="pb-3 font-medium">Tên khóa học</th>
                  <th className="pb-3 font-medium">Số lượng key đã dùng</th>
                  <th className="pb-3 font-medium">Tổng số key</th>
                  <th className="pb-3 font-medium">Tỉ lệ sử dụng</th>
                </tr>
              </thead>
              <tbody>
                {keyData.map((row, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3">{row.name}</td>
                    <td className="py-3">{row.used}</td>
                    <td className="py-3">{row.quantity}</td>
                    <td className="py-3">{Math.floor(row.used / row.quantity * 100)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Bảng trạng thái khóa học</h3>
            <button className="text-gray-500 hover:text-gray-700">•••</button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-gray-500">
                  <th className="pb-3 font-medium">Tên khóa học</th>
                  <th className="pb-3 font-medium">Trạng thái</th>
                  <th className="pb-3 font-medium">Ngày tạo</th>
                  <th className="pb-3 font-medium">Giáo viên</th>
                </tr>
              </thead>
              <tbody>
                {courseTable.map((row, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3">{row.name}</td>
                    <td className="py-3">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          row.status === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : row.status === 'declined'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3">{row.date}</td>
                    <td className="py-3">{row.teacher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  )
}