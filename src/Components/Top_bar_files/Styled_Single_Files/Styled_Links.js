import styled from "styled-components";
import {Navigate, Link, Outlet} from "react-router-dom"
export const StyledLink = styled(Link)`
display: flex;
color: white;
outline: none;
text-decoration: none;
font-size: 1.2rem;
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
export const LinkContainer = styled.section`
grid-column: 5 / 10;
display: flex;
align-items: flex-end;
gap: 10%;
height: 13vh;
`

