import React from "react"
import { menu } from "../../../utils/constants"
import styled from "styled-components"

export const NavBarStyled = styled.div`
    display: flex;
`

export const NavLinkStyled = styled.a`
    font-size: 0.94rem;
    margin: 0 1rem;
    color: "black";

    &:hover {
        cursor: pointer;
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
