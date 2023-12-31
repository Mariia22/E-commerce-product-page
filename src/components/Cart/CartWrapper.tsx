import React, { MouseEvent, ReactNode, TouchEvent } from "react"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"

interface CartWrapperProps {
    handleMouseEnter: (e: MouseEvent<HTMLElement> | TouchEvent) => void
    handleMouseLeave: () => void
    children: ReactNode
    $sumincart?: number
}

export const CartWrapperStyled = styled.div<Partial<CartWrapperProps>>`
    position: relative;
    &::after {
        content: "${({ $sumincart }) => ($sumincart === 0 ? "" : $sumincart)}";
        display: block;
        position: absolute;
        top: -8px;
        right: -5px;
        width: 19px;
        height: ${({ $sumincart }) => ($sumincart === 0 ? "0px" : "15px")};
        font-size: 0.625rem;
        font-weight: 700;
        border-radius: 6.5px;
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        text-align: center;
    }
`

export const CartWrapper: React.FC<CartWrapperProps> = ({
    children,
    handleMouseEnter,
    handleMouseLeave,
    $sumincart,
}) => {
    return (
        <CartWrapperStyled
            onMouseEnter={(e: MouseEvent<HTMLElement>) => handleMouseEnter(e)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={(e: TouchEvent) => handleMouseEnter(e)}
            onTouchEnd={handleMouseLeave}
            $sumincart={$sumincart}
        >
            {children}
        </CartWrapperStyled>
    )
}
