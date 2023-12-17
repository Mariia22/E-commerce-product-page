import React from "react"
import { menu } from "../../../utils/constants"
import styled from "styled-components"
import { theme } from "../../../style/Theme.styled"
import { device } from "../../../style/mediaQueries.styled"

const NavBarMobileStyled = styled.div`
    display: none;

    @media ${device.mobile} {
        display: flex;
        flex-direction: column;
        margin-top: 8px;
    }
`

export const NavLinkMobileStyled = styled.a`
    display: none;

    @media ${device.mobile} {
        display: block;
        width: 8rem;
        margin: 0 0 1.25rem 1.5rem;
        color: ${theme.colors.title};
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.625rem;

        &:hover {
            cursor: pointer;
            border-bottom: 4px solid ${theme.colors.secondary};
        }
    }
`

export const NavMobileLink: React.FC = () => {
    return (
        <NavBarMobileStyled>
            {menu.length > 0 &&
                menu.map((item) => (
                    <NavLinkMobileStyled key={item.id}>
                        {item.name}
                    </NavLinkMobileStyled>
                ))}
        </NavBarMobileStyled>
    )
}
