import styled from "styled-components";
const TextHolder = styled.article`
margin-top: 5%;
grid-column: 7 / 12;
grid-row: 2 / 12;
color: rgba(0,0,0,0.5);
background-position: center;
background-size: cover;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 0.75rem;
transition: all 0.7s ease-in-out;
background-color: #f4f4f4;
box-shadow: 20px 15px 5px 2px rgba(244,244,244,1);
-webkit-box-shadow: 20px 15px 5px 2px rgba(244,244,244,1);
-moz-box-shadow: 20px 15px 5px 2px rgba(244,244,244,1);
&:hover{
    cursor: pointer;
    transform: scale(1.05);
    color: rgba(0,0,0,1);
    background-color: white;
}`



export const AboutText = () => {
    return(
        <>
        <TextHolder>
            <h1>Jørgen Nikolaisen</h1>
            <br></br>
            <p>Filler Filler Filler Filler</p>
        </TextHolder>
        </>
    )
}