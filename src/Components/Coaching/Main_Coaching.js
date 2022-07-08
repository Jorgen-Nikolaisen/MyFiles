import React from "react";
import styled from "styled-components";
import Powerlifting from "./Coaching_Images/Powerlifting.jpg"
import BodyBuilding from "./Coaching_Images/Bodybuilding.jpg"
import Nutrition from "./Coaching_Images/Nutrition.jpg"
import Coaching from "./Coaching_Images/Coaching.jpg"
import { CoachingLinks } from "./Single_files/SubLinks";

const CoachingContent = styled.section`
margin-left: 5%;
height: 37vh;
width: 90%;
display: flex;
flex: repeat(2, 1fr);
justify-content: center;
gap: 3%;
`
const BackgroundStyled = styled.main`

`


export const MainCoaching = () => {
    return (
        <>
        <CoachingContent>
            <CoachingLinks to="/" style={{backgroundImage: `url(${Powerlifting})`}}>
                <h2>Powerlifting</h2>
            </CoachingLinks>
            <CoachingLinks to="/" style={{backgroundImage: `url(${BodyBuilding})`}}>
            <h2>BodyBuilding</h2>
            </CoachingLinks>
        </CoachingContent> <br></br>
        <CoachingContent>
            <CoachingLinks to="/" style={{backgroundImage: `url(${Nutrition})`}}>
                <h2>Nutrition</h2>
            </CoachingLinks>
            <CoachingLinks to="/" style={{backgroundImage: `url(${Coaching})`}}>
                <h2>Lifestyle</h2>
            </CoachingLinks>
        </CoachingContent>
        <br></br>
        </>
       
        
    )
}

