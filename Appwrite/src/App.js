import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { categoryInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext} from "react";
import { DarkModeContext} from "./context/darkModeContext";
import React, { Component }  from 'react';
// import { detectOverflow } from '@popperjs/core';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {  
  
  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
  <BrowserRouter>
    <Routes>
      <Route path="/"> 
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login/>}/>
      <Route path="users">
        <Route index element={<List/>}/>
        <Route path=":userId" element={<Single/>}/>
        <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
      </Route>
      <Route path="categories">
        <Route index element={<List/>}/>
        <Route path=":categoryId" element={<Single/>}/>
        <Route path="new" element={<New inputs={categoryInputs} title="Add New Category"/>}/>
      </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
