// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles.css'
import WeatherDetailsContext from './context/weatherDetailsContext/WeatherDetailsContext.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <WeatherDetailsContext>
    <App />
    </WeatherDetailsContext>
  // {/* </StrictMode>, */}
)
