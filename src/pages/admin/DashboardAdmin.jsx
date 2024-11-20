import React, { useEffect, useRef, useState } from 'react'
import Cookies from 'js-cookie'



export function BarChart({ width, height }) {
  const data = [
    { category: "Thứ 2", value: 100 },
    { category: "Thứ 3", value: 200 },
    { category: "Thứ 4", value: 300 },
    { category: "Thứ 5", value: 400 },
    { category: "Thứ 6", value: 450 },
  ]


  const maxValue = Math.max(...data.map(item => item.value))
  const chartHeight = width
  const chartWidth = height
  const barWidth = chartWidth / data.length * 0.8
  const gap = chartWidth / data.length * 0.2

  return (
    <div className="w-full max-w-3xl p-4 bg-white  rounded-lg shadow-md">
      <div className="relative h-[350px]" aria-hidden="true">
        <svg className="w-full h-full" viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
          {/* Bars */}
          {data.map((item, index) => {
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
          {data.map((item, index) => {
            const labelWidth = chartWidth / data.length
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
  const [selectedDate, setSelectedDate] = useState(new Date())
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
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium">Chart</h3>
          <BarChart width={200} height={400} />
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium">Chart</h3>
          <BarChart width={200} height={400} />

        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Check Table</h3>
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
            <h3 className="text-lg font-medium">Bảng khóa học</h3>
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
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${row.status === 'approved'
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