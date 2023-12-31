import styled from "styled-components"
import { theme } from "../../../style/Theme.styled"
import { device } from "../../../style/mediaQueries.styled"

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
        cursor: pointer;
    }

    @media ${device.mobile} {
        width: 24px;
        height: 24px;
    }
`
