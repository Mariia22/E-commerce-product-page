import React from "react"
import { WrapperStyled } from "./Wrapper.styled.ts"
import { FlexProps } from "./types.ts"

export const Wrapper: React.FC<FlexProps> = ({
  children,
  direction,
  align,
  justify,
  margin,
  width
}) => {
  return (
    <WrapperStyled
      direction={direction}
      align={align}
      justify={justify}
      margin={margin}
      width={width}
    >
      {children}
    </WrapperStyled>
  )
}
