import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

if (process.env.NODE_ENV === 'production') {
  console.log = () => { };
  console.debug = () => { };
  console.warn = () => { };
  console.error = () => { };
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
