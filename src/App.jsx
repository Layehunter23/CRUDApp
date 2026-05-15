import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import LoginPage from './pages/LoginPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage></LoginPage>
    </>
  )
}

export default App
