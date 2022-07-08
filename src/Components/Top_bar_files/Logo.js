import styled from "styled-components"
import Doggo from "../Images/Doggo.jpg"

const Doglogo = styled.div`
grid-column: 1 / 3;
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

export const Logoframe = () => {
    return(
        <Doglogo style={{backgroundImage: `url(${Doggo})`}}></Doglogo>
    )
}