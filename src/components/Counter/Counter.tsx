import React from "react"
import styled from "styled-components"
import IconMinus from "../../assets/icons/icon-minus.svg"
import IconPlus from "../../assets/icons/icon-plus.svg"
import { theme } from "../../style/Theme.styled"

interface CounterProps {
    counter: number
    handleIncrement: () => void
    handleDecrement: () => void
}

const CounterStyled = styled.div`
    width: 157px;
    height: 56px;
    margin-top: 32px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.palePrimary};
    border-radius: 10px;
`

const CounterValueStyled = styled.p`
    color: ${theme.colors.title};
`
const IconWrapper = styled.div`
    color: ${theme.colors.primary};

    &:hover {
        cursor: pointer;
    }
`

export const Counter: React.FC<CounterProps> = ({
    counter,
    handleDecrement,
    handleIncrement,
}) => {
    return (
        <CounterStyled>
            <IconWrapper onClick={handleDecrement}>
                <IconMinus />
            </IconWrapper>
            <CounterValueStyled>{counter}</CounterValueStyled>
            <IconWrapper onClick={handleIncrement}>
                <IconPlus />
            </IconWrapper>
        </CounterStyled>
    )
}
