import React, { MouseEvent, useState } from "react"
import { Portal } from "../../Portal/Portal"
import styled from "styled-components"
import { Nav } from "./Nav"
import CloseIcon from "../../../assets/icons/icon-close.svg"
import { theme } from "../../../style/Theme.styled"

interface NavProps {
    children: React.ReactNode
}

const MenuWrapper = styled.div`
    display: block;
`

const NavWrapper = styled.div`
    position: absolute;
    width: 250px;
    height: 200%;
    padding: 25px 0 0 25px;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.primary};
`

const CloseIconStyled = styled.div`
    width: 13px;
    height: 13px;
    fill: ${theme.colors.font};
    margin-bottom: 3.375rem;

    &:hover {
        cursor: pointer;
    }
`

export const NavMobile: React.FC<NavProps> = ({ children }) => {
    const [isMenuOn, setMenuOn] = useState(false)

    const handleClick = () => {
        setMenuOn(true)
    }

    const handleClose = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setMenuOn(false)
    }

    return (
        <MenuWrapper onClick={handleClick}>
            {children}
            {isMenuOn && (
                <Portal>
                    <NavWrapper>
                        <CloseIconStyled
                            onClick={(event) => handleClose(event)}
                        >
                            <CloseIcon />
                        </CloseIconStyled>
                        <Nav />
                    </NavWrapper>
                </Portal>
            )}
        </MenuWrapper>
    )
}
