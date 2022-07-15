import React from 'react'
import { Carousel } from './Carousel_Files/Carousel'
import styled from 'styled-components'
import Book from "./Main_Files/Main_Images/Book.jpg"
import Gaming from "./Main_Files/Main_Images/Gaming.jpg"
import Alma from "./Main_Files/Main_Images/Alma.jpg"
import { FillerText } from './Filler'
import Store from "./Main_Files/Main_Images/Store.jpg"

const Content = styled.main`
height: 230vh;
width: 100%;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: repeat(10, 1fr);
background-color:#f4f4f4;
`
const HeroContent = styled.section`
margin-top: 5%;
grid-column: 2 / 8;
grid-row: 2 / 6;
background-position: center;
background-size: cover;
border-radius: 0.75rem;
transition: all 0.6s ease-in-out;
color: white;
display: flex;
justify-content: center;
z-index: 2;
&:hover{
    cursor: pointer;
    transform: scale(1.05);
}
`
const HeroText = styled.section`
margin-top: 5%;
margin-left: 5%;
padding: 5% 5% 5% 5%;
grid-column: 8 / 12;
grid-row: 2 / 6;
background-position: center;
background-size: cover;
opacity: 0.9;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 0.75rem;
transition: all 0.7s ease-in-out;
background-color: white;
&:hover{
    cursor: pointer;
    transform: scale(1.05);
    opacity:1;
}

`
const BlogPosts = styled.section`
margin-top: 40px;
margin-bottom: 50px;
grid-column: 2 / 12;
grid-row: 6 / 11;
background-position: center;
background-size: cover;
border-radius: 0.75rem;
color: white;
display: flex;
align-items: flex-end;
justify-content: center;
line-height: 55px;
transition: all 1s ease-in-out;
&:hover{
    cursor: pointer;
    font-size: 55px;
}
`
const Posts = styled.article`
`

export function Main() {
  return (
    <Content>
        <Carousel/>
        <HeroContent style={{backgroundImage: `url(${Store})`}}>
            <h2>Redux store</h2>
        </HeroContent>

        <HeroText>
            <FillerText/>
        </HeroText>

        <BlogPosts style={{backgroundImage: `url(${Gaming})`}}>
            <h2>Latest Gaming news</h2>
        </BlogPosts>

    </Content>
  )
}



