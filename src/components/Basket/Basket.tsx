import React from "react"
import styled from "styled-components"

export interface BasketProps {
    left: number
    top: number
}

const BasketStyled = styled.div<BasketProps>`
    position: absolute;
    left: ${({ left }) => left || 0}px;
    top: ${({ top }) => top || 0}px;
    transform: translateX(-50%);
    display: flex;
    min-width: 360px;
    min-height: 256px;
    border: 1px solid red;
`

export const Basket: React.FC<BasketProps> = ({ left, top }) => {
    return (
        <BasketStyled left={left} top={top}>
            r
        </BasketStyled>
    )
}
