import styled from "styled-components";

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
        <article>
            <Title>
            Jørgen Nikolaisen
            </Title>
            <Text>
            The hsla() function define colors using the Hue-saturation-lightness-alpha model (HSLA). <br></br>
            HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity of the color. <br></br>
            Hue value of its Hsl is 0, Saturation value is 0, Lightness value is 0.95686274509804 and alpha value is 1.
            </Text>
        </article>
        
    )
}