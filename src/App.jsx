import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import LoginPage from './pages/LoginPage'
import './App.css'
import RegisterPage from './pages/RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage></LoginPage>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
