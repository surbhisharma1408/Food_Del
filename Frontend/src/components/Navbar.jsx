import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets '
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'


const Navbar = ({setShowLogin}) => {
  const [menu,setMenu]=useState("home");
  const {getTotalCartAmount,token,setToken}= useContext(StoreContext);

  return (
    <div className='navbar'>
       <Link to='/'><img src={assets.mainlogo} alt='' className='logo'/></Link>
       <ul className='navbar-menu'>
        
        <Link to="/" onClick={()=>setMenu ("home")}className={menu==="home"?"active":''}>Home</Link>
        <a href='#explore-menu'  onClick={()=>setMenu ("menu")}className={menu==="menu"?"active":''}>Menu</a>
        <a href='#app-download'  onClick={()=>setMenu ("mobile-app")}className={menu==="mobile-app"?"active":''}>Moble-App</a>
        <a href='#footer' onClick={()=>setMenu ("contact-us")} className={menu==="contact-us"?"active":''}>Contact-Us</a>
       </ul>
       <div className='navbar-right'>
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?
        <button className='navbar-button' onClick={()=> setShowLogin(true)}>Sign In</button>
            :<div className='navbar-profile'>
              <img src={assets.parcel_icon} alt="" />
              <ul className='nav-profile-dropdown'>
                <li></li>
                <hr />
                <li></li>
                </ul>
                </div>}
       </div>
      
    </div>
  )
}

export default Navbar