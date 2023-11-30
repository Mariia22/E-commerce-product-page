import { createGlobalStyle } from "styled-components"
import font from "./../assets/fonts/KumbhSans-VariableFont_YOPQ,wght.ttf"

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
        font-family: 'Kumbh Sans';
        src: local('Kumbh Sans'), local('Kumbh Sans'),
        url(${font}) format('ttf'),
        font-weight: 300;
        font-style: normal;
    }

body {
  margin: 20px 0 88px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.font};
  font-family: "Kumbh Sans";
  line-height: 1.66;
  font-size: 15px;
  overflow-x: hidden;
}`
