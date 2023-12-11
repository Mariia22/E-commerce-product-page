import React, { MouseEvent, ReactNode } from "react"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"

interface BasketWrapperProps {
    handleMouseEnter: (e: MouseEvent<HTMLElement>) => void
    handleMouseLeave: () => void
    children: ReactNode
    sumInCart?: number
}

export const BasketWrapperStyled = styled.div<Partial<BasketWrapperProps>>`
    position: relative;
    &::after {
        content: "${({ sumInCart }) => (sumInCart ? sumInCart : "3")}";
        display: block;
        position: absolute;
        top: -8px;
        right: -5px;
        width: 19px;
        height: ${({ sumInCart }) => (sumInCart ? "15px" : "15px")};
        font-size: 0.625rem;
        font-weight: 700;
        border-radius: 6.5px;
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        text-align: center;
    }
`

export const BasketWrapper: React.FC<BasketWrapperProps> = ({
    children,
    handleMouseEnter,
    handleMouseLeave,
    sumInCart,
}) => {
    return (
        <BasketWrapperStyled
            onMouseEnter={(e: MouseEvent<HTMLElement>) => handleMouseEnter(e)}
            onMouseLeave={handleMouseLeave}
            sumInCart={sumInCart}
        >
            {children}
        </BasketWrapperStyled>
    )
}
