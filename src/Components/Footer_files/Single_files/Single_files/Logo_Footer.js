import styled from "styled-components"
import Doggo from "../Single_files/Doggo.jpg"

const Doglogo = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
width: 160px;
height: 15vh;
border-radius: 50%;
`

export const LogoframeFooter = () => {
    return(
        <Doglogo style={{backgroundImage: `url(${Doggo})`}}></Doglogo>
    )
}