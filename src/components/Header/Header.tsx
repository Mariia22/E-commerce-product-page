import React from "react"
import { Logo } from "./Logo/Logo"
import { Flex } from "../common/Flex/Flex"
import { User } from "./User/User"
import { Nav } from "./Nav/Nav"
import { BasketIcon } from "../Basket/BasketIcon"
import styled from "styled-components"

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0 34px 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`

export const Header: React.FC = () => {
    return (
        <HeaderStyle>
            <Logo />
            <Nav />
            <Flex align="center" width="15%" justify="space-around">
                <BasketIcon />
                <User />
            </Flex>
        </HeaderStyle>
    )
}
