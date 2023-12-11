import React, { MouseEvent, ReactNode } from "react"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"

export const BasketWrapperStyled = styled.div`
    position: relative;
    &:after {
        contain: "* * *";
        width: 19px;
        height: 13px;
        border-radius: 6.5px;
        background-color: ${theme.colors.secondary};
    }
`
interface BasketWrapperProps {
    handleMouseEnter: (e: MouseEvent<HTMLElement>) => void
    handleMouseLeave: () => void
    children: ReactNode
}

export const BasketWrapper: React.FC<BasketWrapperProps> = ({
    children,
    handleMouseEnter,
    handleMouseLeave,
}) => {
    return (
        <BasketWrapperStyled
            onMouseEnter={(e: MouseEvent<HTMLElement>) => handleMouseEnter(e)}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </BasketWrapperStyled>
    )
}
