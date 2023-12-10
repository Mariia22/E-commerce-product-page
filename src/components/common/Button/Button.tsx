import React from "react"
import styled from "styled-components"
import { theme } from "../../../style/Theme.styled"

const ButtonStyled = styled.button<ButtonType>`
    font-family: "Kumbh Sans";
    font-weight: 700;
    line-height: normal;
    font-size: 1rem;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ width }) => width || "300px"};
    height: ${({ height }) => height || "50px"};
    border: none;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    border-radius: 10px;
    box-shadow: 0px 20px 50px -20px ${theme.colors.secondary};
`

type ButtonType = {
    width: string
    height: string
    children?: React.ReactNode
}

export const Button: React.FC<ButtonType> = ({ width, height, children }) => {
    return (
        <ButtonStyled width={width} height={height}>
            {" "}
            {children}
        </ButtonStyled>
    )
}
