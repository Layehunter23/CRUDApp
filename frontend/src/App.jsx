import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import LoginPage from './pages/LoginPage'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import Patients from './pages/Patients'
import AddPatient from './pages/AddPatient'
import UpdatePatient from './pages/UpdatePatient'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Patients></Patients>}></Route>
           <Route path='/addPatient' element={<AddPatient></AddPatient>}></Route>
           <Route path='/updatePatient/:id' element={<UpdatePatient></UpdatePatient>}></Route>
        </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
