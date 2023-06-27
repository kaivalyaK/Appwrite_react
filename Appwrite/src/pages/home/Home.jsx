import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"

import "./home.scss"
import React, { Component }  from 'react';


const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
      <Navbar/>
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
       
      </div>
      
      </div>
    </div>
  )
}

export default Home