import React, { MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'


export const BasketWrapperStyled = styled.div`
position: relative;
`

interface BasketWrapperProps {
  handleMouseEnter: (e: MouseEvent<HTMLElement>) => void
  handleMouseLeave: () => void
  children: ReactNode
}



export const BasketWrapper: React.FC<BasketWrapperProps> = ({ children, handleMouseEnter, handleMouseLeave }) => {
  return (
    <BasketWrapperStyled onMouseEnter={(e: MouseEvent<HTMLElement>) => handleMouseEnter(e)} onMouseLeave={handleMouseLeave}>{children}</BasketWrapperStyled>
  )
}

