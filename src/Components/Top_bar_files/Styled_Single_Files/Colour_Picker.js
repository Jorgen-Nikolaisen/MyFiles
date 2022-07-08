import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const lightTheme = {
    body: "#fff",
    fontColor: "#000"
}

export const darkTheme = {
    body: "#f3f3",
    fontColor: "#fff"
}

export const GlobalStyles = createGlobalStyle`
    body {

        background-color: ${(props) => props.theme.body};
    }
`