import { createGlobalStyle } from "styled-components"
import font from "./../assets/fonts/KumbhSans-VariableFont_YOPQ,wght.ttf"
import { device } from "./mediaQueries.styled"

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family:'Kumbh Sans';
  src: local('Kumbh Sans'), local('Kumbh Sans'),
  url(${font}) format('ttf'),
  font-weight: 300;
  font-style: normal;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.font};
  font-family: "Kumbh Sans";
  line-height: 1.66;
  font-size: 16px;
}

#root {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    max-width: 1100px;
    min-width: 375px;
    width: 100vw;
    overflow: hidden;

    @media ${device.tablet} { 
        max-width: 100%;
        margin-top: 0;
    }
}`
