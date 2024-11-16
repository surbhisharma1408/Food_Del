import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/Explore Menu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Footer from '../../Components/Footer/Footer'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
  const [category,setCategory]= useState("All");
  return (
    <>
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
      
    </div>
    <Footer/>
    </>
  )
}

export default Home
