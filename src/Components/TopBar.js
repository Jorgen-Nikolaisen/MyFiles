import {Logoframe } from "./Top_bar_files/Logo"
import styled, { ThemeConsumer } from "styled-components"
import { Links } from "./Top_bar_files/Links"
import { Component } from "react"
import Projects from "../Pages/Projects"



const Navbar = styled.nav`
width: 100%;
height: 15vh;
display: grid;
grid-template-columns: repeat(12, 1fr);
background: rgb(0,0,0);
background: linear-gradient(76deg, rgba(0,0,0,1) 13%, rgba(1,86,181,1) 77%);

`
const ThemeChanger = styled.section`
display: flex;
align-items: flex-end;
grid-column: 11 / 11;
height: 13vh;
`

export const TopBar = () => {


    return(
    <Navbar>
        <Logoframe></Logoframe>
        <Links></Links>
        <ThemeChanger>
        </ThemeChanger>
        
    </Navbar>
    )
}   
