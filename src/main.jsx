/** 
 * @copyright 2025 G S S Nikhil Chowdary
 * @license Apache-2.0
*/

// Node Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//CSS
import './index.css'
import 'lenis/dist/lenis.css'

//Components
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
