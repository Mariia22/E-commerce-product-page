import React from "react"
import { FlexStyled } from "./Flex.styled.ts"
import { FlexProps } from "./types.ts"

export const Flex: React.FC<FlexProps> = ({
  children,
  direction,
  align,
  justify,
  margin,
  width,
}) => {
  return (
    <FlexStyled
      direction={direction}
      align={align}
      justify={justify}
      margin={margin}
      width={width}
    >
      {children}
    </FlexStyled>
  )
}
