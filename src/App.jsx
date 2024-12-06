import { useState } from 'react'
import Header from './components/Header'
import Content from './layout/Contents'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Content/>
      
      <Footer/>
    </>
  )
}

export default App
