import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dasboard from './pages/Dasboard'
import Login from './pages/Login'
import Menu from './pages/Menu'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dasboard/>} pa />
        <Route path='/login' element={<Login/>} />
        <Route path='/menu' element={<Menu/>} />
      </Routes>
    </Router>
  )
    
}

export default App
