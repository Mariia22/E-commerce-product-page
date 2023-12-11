import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import { Flex } from "../common/Flex/Flex"
import { Button } from "../common/Button/Button"
import { BasketItem } from "./BasketItem"
import image from "../../assets/images/image-product-1-thumbnail.jpg"

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
        {
            id: 1,
            name: "Fall Limited Edition Sneakers",
            price: 125.0,
            number: 3,
            image: image,
        },
    ]

    return (
        <BasketStyled left={left} top={top}>
            <BaskedTitle>Cart</BaskedTitle>
            <Flex
                direction="column"
                align="center"
                justify="center"
                margin="24px 0 0 0"
            >
                {isEmptyCart ? (
                    <BaskedText>Your cart is empty.</BaskedText>
                ) : (
                    <Flex direction="column" width="100%" align="center">
                        {goods.map((item) => (
                            <BasketItem
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                number={item.number}
                                image={item.image}
                            />
                        ))}
                        <Button width="312px" height="56px">
                            Checkout
                        </Button>
                    </Flex>
                )}
            </Flex>
        </BasketStyled>
    )
}
