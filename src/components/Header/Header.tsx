import React from "react"
import { Flex } from "../common/Flex/Flex"
import { User } from "./User/User"
import { Nav } from "./Nav/Nav"
import CartIcon from "../../assets/icons/icon-cart.svg"
import LogoIcon from "../../assets/icons/logo.svg"
import styled from "styled-components"

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0 34px 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`

const LogoIconStyled = styled(LogoIcon)`
    &:hover {
        cursor: pointer;
    }
`

const CartIconStyled = styled(CartIcon)`
    &:hover {
        cursor: pointer;
    }
`

export const Header: React.FC = () => {
    return (
        <HeaderStyle>
            <LogoIconStyled />
            <Nav />
            <Flex align="center" width="15%" justify="space-around">
                <CartIconStyled />
                <User />
            </Flex>
        </HeaderStyle>
    )
}
