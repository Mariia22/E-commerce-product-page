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

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 375px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.font};
  font-family: "Kumbh Sans";
  line-height: 1.66;
}

#root {
  max-width: 1110px;
  width: 100vw;
  overflow: hidden;
    @media ${device.mobile} { 
        max-width: 100%;
    }
}`
