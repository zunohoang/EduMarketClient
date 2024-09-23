import { StrictMode, useState } from 'react'
import AppRoutes from './routes'

function App() {

  return (
    <StrictMode>
      <div className="bg-gradient-to-b from-blue-100 to-[#F7F8F9]">
        <AppRoutes />
      </div>
    </StrictMode>
  )
}

export default App
