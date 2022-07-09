import React from 'react'
import styled from 'styled-components'
import { StyledLink } from '../Top_bar_files/Styled_Single_Files/Styled_Links'


const Content = styled.main`
height: 100vh;
width: 100%;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: repeat(10, 1fr);
background-color:#f4f4f4 ;
`


export function MainProjects() {
  return (
    <Content>
        <h1>Projects goes here</h1>
        <StyledLink to={"Projects/CatFacts"}>To CatFacts</StyledLink>
    </Content>
  )
}