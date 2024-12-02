import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import DashBoard from './pages/DashBoard'
import Coin from './pages/Coin'
import Compare from './pages/Compare'




function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/coin/:id' element={<Coin />} />
        <Route path='/compare' element= {<Compare />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
