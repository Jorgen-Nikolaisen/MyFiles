import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet} from "react-router-dom"
import { Home } from './Pages/Home';
import { Projects } from './Pages/Projects';
import {Coaching} from "./Pages/Coaching";
import { About } from './Pages/About';
import { CatFacts } from './Pages/Projects_subpages/Catfatcs';
import { WeatherData } from './Pages/Projects_subpages/WeatherAPI';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Projects" element={<Projects/>}>
        
      </Route>
      <Route path="/CatFacts" element={<CatFacts/>}/>
      <Route path="/WeatherAPI" element={<WeatherData/>}/>
      <Route path="/Coaching" element={<Coaching/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
  </Router>,
  
);

