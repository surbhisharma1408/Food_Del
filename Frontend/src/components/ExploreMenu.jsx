import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets '

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit, explicabo eos officiis quod pariatur dicta minima provident praesentium fugit libero exercitationem culpa natus ea veritatis, sed dolore sunt nobis?</p>
        <div className='explore-menu-list'> 
            {menu_list.map((menuitem,index)=>
               ( 
               <div onClick={()=>setCategory(prev=>prev==menuitem.menu_name?"All":menuitem.menu_name)}key={index} className='explore-menu-list-item'>
                    <img className={category===menuitem.menu_name?"active":""} src= {menuitem.menu_image} alt=''/>
                    <p>{menuitem.menu_name}</p>
                </div>
               )
            )}
        </div>
         <hr/>     
    </div>
  )
}

export default ExploreMenu
