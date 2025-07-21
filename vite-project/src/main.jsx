import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

createRoot(document.getElementById('root')).render(
    <>               {/* here we have to wrap up the function calls in a "<> </>", if we render multiple functions, so this is called "fragment" */}
    <Chai/>
    <App />
    </>
)


