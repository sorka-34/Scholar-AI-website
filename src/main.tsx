import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import Scholarships from './components/Scholarships.tsx';
import Profile from './components/Profile.tsx';
import Services from './components/Services.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='scholarships' element={<Scholarships />} />
        <Route path='profile' element={<Profile />} />
        <Route path='services' element={<Services />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
