import React from "react"
import { menu } from "../../../utils/constants"
import styled from "styled-components"
import { theme } from "../../../style/Theme.styled"
import { device } from "../../../style/mediaQueries.styled"

const NavBarStyled = styled.div`
    display: flex;
    margin-top: 8px;

    @media ${device.mobile} {
        display: none;
    }
`

export const NavLinkStyled = styled.a`
    font-size: 0.94rem;
    margin: 0 1rem;
    height: 4.4rem;
    &:hover {
        cursor: pointer;
        border-bottom: 4px solid ${theme.colors.secondary};
    }

    @media ${device.mobile} {
        display: none;
    }
`

export const Nav: React.FC = () => {
    return (
        <NavBarStyled>
            {menu.length > 0 &&
                menu.map((item) => (
                    <NavLinkStyled key={item.id}>{item.name}</NavLinkStyled>
                ))}
        </NavBarStyled>
    )
}
