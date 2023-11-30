import { FC } from 'react'
import { StyledFlex } from './Flex.styled.ts'
import { FlexProps } from './types'

export const Flex: FC<FlexProps> = ({
    children,
    direction,
    align,
    justify,
    margin,
}) => {
    return (
        <StyledFlex
            direction={direction}
            align={align}
            justify={justify}
            margin={margin}
        >
            {children}
        </StyledFlex>
    )
}
