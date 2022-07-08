import styled from "styled-components";

export const StyledLinkFooter = styled.a`
display: flex;
color: white;
outline: none;
text-decoration: none;
font-size: 18px;
font-family: sans-serif;
cursor: pointer;
transition: all 0.3s ease-in-out;
&:hover{
    color: dodgerblue;
    transform: scale(1.03);
    opacity: 0.95;
    text-decoration: underline;
}
`
export const LinkContainerFooter = styled.section`
grid-column: 5 / 10;
display: flex;
align-items: center;
gap: 20%;
height:2 15vh;
`