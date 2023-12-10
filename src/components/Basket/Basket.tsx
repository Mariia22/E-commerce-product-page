import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import { Flex } from "../common/Flex/Flex"
import { Button } from "../common/Button/Button"
import { BasketItem } from "./BasketItem"

export interface BasketProps {
    left: number
    top: number
}

const BasketStyled = styled.div<BasketProps>`
    position: absolute;
    left: ${({ left }) => left || 0}px;
    top: ${({ top }) => top || 0}px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    min-width: 360px;
    min-height: 256px;
    border-radius: 10px;
    background: ${theme.colors.primary};
    box-shadow: 0px 20px 50px -20px ${theme.colors.shadowColor};
`

const BaskedTitle = styled.div`
    font-weight: 700;
    color: ${theme.colors.title};
    height: 43px;
    border-bottom: 1px solid ${theme.colors.borderColor};
    margin-top: 24px;
    text-indent: 24px;
`

const BaskedText = styled.p`
    font-weight: 700;
    margin: 77px;
    color: ${theme.colors.font};
`

export const Basket: React.FC<BasketProps> = ({ left, top }) => {
    const [isEmptyCart] = useState(false)
    const goods = [
        { id: 1, name: "Fall Limited Edition Sneakers", price: 125, number: 3 },
    ]

    return (
        <BasketStyled left={left} top={top}>
            <BaskedTitle>Cart</BaskedTitle>
            <Flex direction="column" align="center" justify="center">
                {isEmptyCart ? (
                    <BaskedText>Your cart is empty.</BaskedText>
                ) : (
                    <>
                        {goods.map((item) => (
                            <BasketItem
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                number={item.number}
                            />
                        ))}
                        <Button width="312px" height="56px">
                            Checkout
                        </Button>
                    </>
                )}
            </Flex>
        </BasketStyled>
    )
}
