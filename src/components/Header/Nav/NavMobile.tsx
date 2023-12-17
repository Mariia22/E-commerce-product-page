import React, { MouseEvent, useState } from "react"
import styled from "styled-components"
import CloseIcon from "../../../assets/icons/icon-close.svg"
import { theme } from "../../../style/Theme.styled"
import { NavMobileLink } from "./NavMobileLink"

interface NavProps {
    children: React.ReactNode
}

interface NavWrapperProps {
    active: string
}

const MenuWrapper = styled.div`
    display: block;
`

const NavWrapper = styled.div<NavWrapperProps>`
    position: absolute;
    width: 250px;
    height: 200%;
    padding: 1.5rem 0 0 0;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.primary};
    transform: ${({ active }) =>
        active === "true" ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
`

const CloseIconStyled = styled(CloseIcon)`
    width: 15px;
    height: 15px;
    fill: ${theme.colors.font};

    &:hover {
        cursor: pointer;
    }
`

const CloseIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.375rem;
    padding: 0.4rem 0 2rem 0.3rem;
    z-index: 5;

    &:hover {
        cursor: pointer;
    }
`

export const NavMobile: React.FC<NavProps> = ({ children }) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(true)
    }

    const handleClose = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setActive(false)
    }

    return (
        <MenuWrapper onClick={handleClick}>
            {children}
            <NavWrapper active={active.toString()}>
                <CloseIconWrapper onClick={(event) => handleClose(event)}>
                    <CloseIconStyled />
                </CloseIconWrapper>
                <NavMobileLink />
            </NavWrapper>
        </MenuWrapper>
    )
}
