import React from "react"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"

interface SwiperButtonProps {
    children: React.ReactNode
    handleClick: () => void
    width: string
    height: string
    right?: string
    left?: string
}

const ButtonStyled = styled.div<Partial<SwiperButtonProps>>`
    position: absolute;
    top: 50%;
    left: ${({ left }) => left || "auto"};
    right: ${({ right }) => right || "auto"};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width || "0"};
    height: ${({ height }) => height || "0"};
    border-radius: 50%;
    background-color: ${theme.colors.primary};
    stroke: ${theme.colors.title};
    &:hover {
        stroke: ${theme.colors.secondary};
        cursor: pointer;
    }
`

export const SwiperButton: React.FC<SwiperButtonProps> = ({
    left,
    right,
    handleClick,
    children,
    width,
    height,
}) => {
    return (
        <ButtonStyled
            onClick={handleClick}
            left={left}
            right={right}
            width={width}
            height={height}
        >
            {children}
        </ButtonStyled>
    )
}
