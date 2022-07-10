import React, {useState} from 'react'
import styled from 'styled-components'
import { DataImages} from './Single_Files/Carousel_Data'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const ImageRoller = styled.section`
grid-column: 2 / 12;
height: 60vh;
margin-top: 10%;
`
const InnerImages = styled.article`
width: 100%;
height: 100%;
background-color: white;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
`
const CarouselLeft = styled.div`
  padding-left: 5px;
  flex: 5%;
  height: 100%;
  background-color: rgba(0,0,0, 0.4);
  display: grid;
  place-items: center;
  color: white;
  &:hover{
    cursor: pointer;
  }
`
const CarouselRight = styled.div`
  flex: 5%;
  height: 100%;
  background-color: rgba(0,0,0, 0.4);
  display: grid;
  place-items: center;
  color: white;
  &:hover{
    cursor: pointer;
  }
`
const CarouselCenter = styled.div`
  flex: 90%;
  height: 100%;
  display: grid;
  place-items: center;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  text-align: justify;
  text-align-last: center;
`


export function Carousel() {

  const [currImg, setCurrImg] = useState(0)

  return (
    <ImageRoller>
      <InnerImages style={{backgroundImage: `url(${DataImages[currImg].img})`}}>
     
      <CarouselLeft onClick={() => {
        currImg > 0 && setCurrImg(currImg - 1)
      }}><ArrowBackIosIcon style={{fontSize: 45}}/></CarouselLeft>
     
      <CarouselCenter>
        <h1>{DataImages[currImg].title}</h1>
        <p>{DataImages[currImg].subtitle}</p>
      </CarouselCenter>

      <CarouselRight onClick={() => {
        currImg < DataImages.length - 1 && setCurrImg(currImg + 1)
      }}><ArrowForwardIosIcon style={{fontSize: 42}}/></CarouselRight>
      </InnerImages>
      
    </ImageRoller>
  )
}

