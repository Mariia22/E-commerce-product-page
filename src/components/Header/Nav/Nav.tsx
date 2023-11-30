import React from 'react'
import { NavBarStyled, NavLinkStyled } from './Nav.styled'
import { menu } from '../../../utils/constants'

export const Nav: React.FC = () => {
  return (
    <NavBarStyled>
      {menu.length > 0 && menu.map(item =>
        <NavLinkStyled key={item.id}>{item.name}</NavLinkStyled>
      )}
    </NavBarStyled>
  )
}

