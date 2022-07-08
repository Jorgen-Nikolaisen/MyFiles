import styled from "styled-components";

export const PictureHolder = styled.section`
   margin-top: 5%;
   grid-column: 2 / 7;
   grid-row: 2 / 12;
   background-position: center;
    background-size: cover;
    border-radius: 0.75rem;
    transition: all 0.6s ease-in-out;
&:hover{
    cursor: pointer;
    transform: scale(1.05);
}
`
