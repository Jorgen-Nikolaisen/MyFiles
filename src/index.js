import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet} from "react-router-dom"
import { Home } from './Pages/Home';
import { Projects } from './Pages/Projects';
import {Coaching} from "./Pages/Coaching";
import { About } from './Pages/About';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Coaching" element={<Coaching/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
  </Router>,
  
);

