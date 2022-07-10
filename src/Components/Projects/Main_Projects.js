import React from 'react'
import styled from 'styled-components'
import { StyledLink } from '../Top_bar_files/Styled_Single_Files/Styled_Links'
import CoolCat from "./CatApi/CoolCat.jpg"
import { StyledLinkProject } from './Single_files/StyledProjectLinks'

const Content = styled.main`
height: 100vh;
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
background-color:#f4f4f4 ;
`


export function MainProjects() {
  return (
    <Content>
        <StyledLinkProject to={"/CatFacts"} style={{backgroundImage: `url(${CoolCat})`}}>To CatFacts</StyledLinkProject>
        <StyledLinkProject to={"/CatFacts"} style={{backgroundImage: `url(${CoolCat})`}}>To CatFacts</StyledLinkProject>
        <StyledLinkProject to={"/CatFacts"} style={{backgroundImage: `url(${CoolCat})`}}>To CatFacts</StyledLinkProject>
        <StyledLinkProject to={"/CatFacts"} style={{backgroundImage: `url(${CoolCat})`}}>To CatFacts</StyledLinkProject>
        <StyledLinkProject to={"/CatFacts"} style={{backgroundImage: `url(${CoolCat})`}}>To CatFacts</StyledLinkProject>
        <StyledLinkProject to={"/CatFacts"} style={{backgroundImage: `url(${CoolCat})`}}>To CatFacts</StyledLinkProject>
    </Content>
  )
}