import { StrictMode, useState } from 'react'
import AppRoutes from './routes'

function App() {

  return (
    <StrictMode>
      <div className="h-screen bg-gradient-to-b from-blue-100">
        <AppRoutes />
      </div>
    </StrictMode>
  )
}

export default App
