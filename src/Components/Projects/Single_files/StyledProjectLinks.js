import styled from "styled-components";
import {Navigate, Link, Outlet} from "react-router-dom"
export const StyledLinkProject = styled(Link)`
margin: 2% 2% 2% 2%;
display: flex;
justify-content: center;
align-items: flex-end;
color: white;
outline: none;
text-decoration: none;
font-size: 1.2rem;
font-family: sans-serif;
cursor: pointer;
transition: all 0.3s ease-in-out;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 1rem;
&:hover{
    color: dodgerblue;
    transform: scale(1.03);
    opacity: 0.95;
    text-decoration: underline;
}`