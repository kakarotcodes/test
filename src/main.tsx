import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Styles for animation and gallery libraries
import 'aos/dist/aos.css'
import 'lightgallery/css/lightgallery.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
