import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';

// import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
// import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import {Link} from "react-router-dom";
import { useContext} from "react";
import { DarkModeContext} from "../../context/darkModeContext";
// import React, { Component }  from 'react';

const Sidebar = () => {

  // const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar"> 
    <div className="top">
      <Link to="/" style={{textDecoration: "none"}}>

     <span className="logo">Phalam Admin</span>
     </Link>
    </div>
    <hr />
    <div className="center">
        <ul>
           <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration: "none"}}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
            </li>
            </Link>
            <Link to="/categories" style={{textDecoration: "none"}}>
            <li>
              <StoreIcon className="icon" />
            <span>Categories</span>
            </li>
            </Link>
            <Link to="/fruits" style={{textDecoration: "none"}}>
            <li>
              <StoreIcon className="icon" />
            <span>Fruits</span>
            </li>
            </Link>
            <Link to="/vegitables" style={{textDecoration: "none"}}>
            <li>
              <StoreIcon className="icon" />
            <span>Vegitables</span>
            </li>
            </Link>
            <Link to="/greens" style={{textDecoration: "none"}}>
            <li>
              <StoreIcon className="icon" />
            <span>Greens</span>
            </li>
            </Link>
            <Link to="/grocery" style={{textDecoration: "none"}}>
            <li>
              <StoreIcon className="icon" />
            <span>Grocery</span>
            </li>
            </Link>
            <li>
              <LocalShippingIcon className="icon" />
            <span>Delivery</span>
            </li>
            
        </ul>

    </div>
   
    </div>
  )
}

export default Sidebar
