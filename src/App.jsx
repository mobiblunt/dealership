import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cars from './pages/Cars';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="flex flex-col justify-start h-screen">
    <Navbar />
    <main>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cars" element={<Cars />}></Route>
    </Routes>
    </main>
   
    </div>
    </Router>
  )
}

export default App
