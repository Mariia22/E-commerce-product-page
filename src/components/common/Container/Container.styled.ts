import styled from "styled-components"

type ContainerProps = {
    width: number
    height: number
    background: string
    margin?: string
}

export const ContainerStyled = styled.div<ContainerProps>`
    width: ${({ width }) => width + "px"};
    height: ${({ height }) => height + "px"};
    margin: ${({ margin }) => margin || "0"};
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-size: cover;
`
