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
        height: 2rem;
        width: 8rem;
        padding: 0 0 0.55em 0;
        padding-bottom: 6px;
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
