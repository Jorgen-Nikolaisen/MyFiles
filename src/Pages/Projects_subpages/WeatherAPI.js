import styled from "styled-components";
import axios from "axios";
import React, {useState, useEffect} from 'react'
import { TopBar } from "../../Components/TopBar";
import { Footer } from "../../Components/Footer";
import Weather from "./WeatherApp/Weather.jpg"
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const WeatherArticle = styled.section`
height: 70vh;
width: 100%;
background-color: rgba(224,242,227, 0.3);
border-radius: 1rem;
font-weight: bold;
background-image: url(${Weather});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
const WeatherContainer = styled.section`
max-width: 700px;
max-height: 700px;
margin: auto;
padding: 0 1rem;
position: relative;
top: 10%;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: repeat(12, 1fr);
`
const Description = styled.article`
   
`
const Top = styled.article`
grid-column: 4 / 10;
grid-row: 2 / 4;
width: 100%;
margin: 1rem auto;
display: flex;
flex-direction: column;
`
const Location = styled.article`

`
const Temp = styled.article`
font-size: 35px;
display: flex;
`
const Feels = styled.article`

`
const Humidity = styled.article`

`
const Wind = styled.article`

`

const Bottom = styled.article`
grid-column: 2 / 12;
grid-row: 7 / 10;
display: flex;
justify-content: space-evenly;
text-align: center;
width: 100%;
margin: 1rem auto;
padding: 1rem;
border-radius: 12px;
background-color: rgba(255, 255,255, 0.3);
`
const Search = styled.input`
grid-column: 4 / 8;
border-radius: 1rem;
background-color: rgba(255, 255,255, 0.6);
border: none;
padding-left:10px;
height: 85%;
`


export const WeatherData = () => {

    const [data,setData] = useState({})
    const [location, setLocation] = useState("")

    //const apiKey = "8db9061c41b9c04132194de69ccd7c0f"
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8db9061c41b9c04132194de69ccd7c0f`

    const searchLocation = (event) => {
        if(event.key === "Enter"){
            axios.get(url).then((response) =>{
                setData(response.data)
                console.log(response.data);
            })
        }
    }

    return(
         <>
         <TopBar></TopBar>
         <WeatherArticle>
            <WeatherContainer>
                <Search value={location}
                 onChange={event => setLocation(event.target.value)}
                 onKeyPress={searchLocation}
                 placeholder="Enter Location"
                 type="text"   
                ></Search>
                <Top>
                <Location>
                    <p>Oslo</p>
                </Location>
                <Temp>
                    <p>27 Celsius</p>
                </Temp>
                <Description>
                    <p>Sol</p>
                </Description>
                </Top>
                
                <Bottom>
                    <Feels>
                        <h1>35 Celsius</h1>
                        <p>Feels like</p>
                    </Feels>
                    <Humidity>
                        <h1>20%</h1>
                        <p>Humidity</p>
                    </Humidity>
                    <Wind>
                        <h1>7 m/s</h1>
                        <p>Wind speed</p>
                    </Wind>
                </Bottom>
            </WeatherContainer>
           
         </WeatherArticle>
         <Footer></Footer>
         </>   

    )
}