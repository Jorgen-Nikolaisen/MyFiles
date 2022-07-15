import styled from "styled-components";

const Holder = styled.article`
margin-top: 5%;
color: rgba(0,0,0,0.1);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 0.75rem;
transition: all 0.7s ease-in-out;

&:hover{
    cursor: pointer;
    transform: scale(1.05);
    color: rgba(0,0,0,1);
    
}
`

const Title = styled.h1`
    margin-top: 20%;
    line-height: 55px;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
`
const Text = styled.p`
    line-height: 35px;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
`

export const FillerText = () => {
    return(
        <Holder>
            <Title>
            Cornerstone project
            </Title>
            <Text>
            <p>This is my main project. Where I showcase an fake-store by using API's and Redux. <br></br>
                
            </p>
            </Text>
        </Holder>
        
    )
}