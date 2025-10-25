import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const version = 2
import ImmortalityHub from './v2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImmortalityHub />
  </StrictMode>,
)
