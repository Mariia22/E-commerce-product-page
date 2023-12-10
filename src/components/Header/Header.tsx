import React, { MouseEvent, useState } from "react"
import { Flex } from "../common/Flex/Flex"
import { User } from "./User/User"
import { Nav } from "./Nav/Nav"
import CartIcon from "../../assets/icons/icon-cart.svg"
import LogoIcon from "../../assets/icons/logo.svg"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import { Portal } from "../Portal/Portal"
import { Basket, BasketProps } from "../Basket/Basket"
import { BasketWrapper } from "../Basket/BasketWrapper"

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
    fill: ${theme.colors.font};
    width: 22px;
    height: 20px;
    &:hover {
        cursor: pointer;
    }
`

export const Header: React.FC = () => {
  const [coords, setCoords] = useState<BasketProps>({ left: 0, top: 0 })
  const [isCartOn, setCartOn] = useState(false);


  const handleMouseEnter = (e: MouseEvent<HTMLElement>): void => {
    const element = e.target as HTMLElement
    console.log(element)
    const rect = element.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2,
      top: rect.y + window.scrollY + 50
    });
    setCartOn(true)
  }

  const handleMouseLeave = () => {
    setCartOn(false)
  }

  return (
    <HeaderStyle>
      <LogoIconStyled />
      <Nav />
      <Flex align="center" width="15%" justify="space-around">
        <BasketWrapper handleMouseEnter={(e: MouseEvent<HTMLElement>) => handleMouseEnter(e)} handleMouseLeave={handleMouseLeave}>
          <CartIconStyled />
        </BasketWrapper>
        <User />
      </Flex>
      {isCartOn && <Portal><Basket left={coords.left} top={coords.top} /></Portal>}
    </HeaderStyle>
  )
}
