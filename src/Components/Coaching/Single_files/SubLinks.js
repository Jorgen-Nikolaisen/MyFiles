import React from 'react'
import {Navigate, Link, Outlet} from "react-router-dom"
import styled from 'styled-components'

export const CoachingLinks = styled(Link)`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
color: rgba(255, 255,255, 1);
outline: none;
text-decoration: none;
font-size: 1.5rem;
font-family: sans-serif;
cursor: pointer;
transition: all 0.8s ease-in-out;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
border-radius: 1rem;
&:hover{
        flex: 2;
        opacity: 0.95;
        text-decoration: wavy;
        font-size: 2.5rem;
    }`