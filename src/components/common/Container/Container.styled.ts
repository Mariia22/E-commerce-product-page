import styled, { css } from "styled-components"
import { theme } from "../../../style/Theme.styled"

type ContainerProps = {
    width: string
    height: string
    background: string
    margin?: string
    $borderradius?: string
    $active?: number
}

export const ContainerStyled = styled.div<ContainerProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin || "0"};
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: ${({ $borderradius }) => $borderradius || "0%"};
    border: 2px solid transparent;

    &:hover {
        border: 2px solid ${theme.colors.secondary};
    }

    ${(props) =>
        props.$active &&
        css`
            border: 2px solid ${theme.colors.secondary};
        `}
`
