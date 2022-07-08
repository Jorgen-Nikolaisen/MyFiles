import styled from "styled-components";
import { FooterLinks } from "./Footer_files/Single_files/F_Links";
import { LogoframeFooter } from "./Footer_files/Single_files/Single_files/Logo_Footer";


const Container = styled.footer`
width: 100%;
height: 15vh;
background: rgb(0,0,0);
background: linear-gradient(76deg, rgba(0,0,0,1) 13%, rgba(1,86,181,1) 77%);
display: grid;
grid-template-columns: repeat(12, 1fr);
color: white;
`

export const Footer = () => {
    return (
        <Container>
            <LogoframeFooter></LogoframeFooter>
            <FooterLinks></FooterLinks>
        </Container>
        
    );
}
