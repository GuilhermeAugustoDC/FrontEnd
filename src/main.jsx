import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import Home from './pages/Home/'
import Tests from './pages/Tests/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tests" element={<Tests />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
