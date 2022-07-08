import React from 'react'
import {Navigate, Link, Outlet} from "react-router-dom"
import styled from 'styled-components'
import { MainCoaching } from '../Components/Coaching/Main_Coaching'
import { Footer } from '../Components/Footer'
import { TopBar } from '../Components/TopBar'

export const Coaching = () => {
    return( 
        <>
            <TopBar/> <br></br>
            <MainCoaching/>
            <Footer/>
        </>
        
    )
}


