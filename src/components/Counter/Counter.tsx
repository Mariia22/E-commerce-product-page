import React, { useState } from "react"
import styled from "styled-components"
import IconMinus from "../../assets/icons/icon-minus.svg"
import IconPlus from "../../assets/icons/icon-plus.svg"
import { theme } from "../../style/Theme.styled"

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

export const Counter: React.FC = () => {
    const [counter, setCounter] = useState(0)

    return (
        <CounterStyled>
            <IconWrapper onClick={() => setCounter(counter - 1)}>
                <IconMinus />
            </IconWrapper>
            <CounterValueStyled>{counter}</CounterValueStyled>
            <IconWrapper onClick={() => setCounter(counter + 1)}>
                <IconPlus />
            </IconWrapper>
        </CounterStyled>
    )
}
