import React from 'react'
import { Logo } from '../Logo/Logo'
import { Wrapper } from '../common/Wrapper/Wrapper'
import { User } from '../User/User'
import { HeaderStyle } from './Header.style'
import { Nav } from './Nav/Nav'
import { BasketIcon } from '../Basket/BasketIcon'

export const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Logo />
      <Nav />
      <Wrapper align="center" width="15%" justify="space-around">
        <BasketIcon />
        <User />
      </Wrapper>
    </HeaderStyle>
  )
}

