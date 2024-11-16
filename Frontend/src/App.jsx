import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
   { showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
       
      </Routes>
      
    </div>
    </>
  )
}

export default App