import { StyledLink, LinkContainer } from "./Styled_Single_Files/Styled_Links";
import {Navigate, Link, Outlet} from "react-router-dom"
export const Links = () =>{
    return(
    <LinkContainer>
   
    <StyledLink to="/">01 - Home</StyledLink>
    <StyledLink to="/Projects">02 - Projects</StyledLink>
    <StyledLink to="/Coaching">03 - Coaching</StyledLink>
    <StyledLink to="/About">04 - About</StyledLink>
    </LinkContainer>
    );
}


