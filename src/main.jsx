import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import App from './components/App'
import { GymProvider } from './contexts/GymContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GymProvider>
    <HashRouter>
    <App />
    </HashRouter>
    </GymProvider>
  </StrictMode>
)
