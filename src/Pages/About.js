import React from 'react'
import styled from 'styled-components'
import { MainAbout } from '../Components/About/Aboutsection'
import { Footer } from '../Components/Footer'
import { TopBar } from '../Components/TopBar'

export const About = () => {
    return( 
        <>
             <TopBar/>
             <MainAbout/>
            <Footer/>
        </>
       
    )
}