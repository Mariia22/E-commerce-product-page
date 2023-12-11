import React, { MouseEvent, useState } from "react"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import { Flex } from "../common/Flex/Flex"
import { Button } from "../common/Button/Button"
import { BasketItem } from "./BasketItem"
import image from "../../assets/images/image-product-1-thumbnail.jpg"

export interface BasketProps {
    left: number
    top: number
    handleMouseEnter: (e: MouseEvent<HTMLElement>) => void
    handleMouseLeave: () => void
}

const BasketStyled = styled.div<Partial<BasketProps>>`
    position: absolute;
    left: ${({ left }) => left || 0}px;
    top: ${({ top }) => top || 0}px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    min-width: 360px;
    min-height: 286px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: transparent;
    box-shadow: 0px 20px 50px -20px ${theme.colors.shadowColor};
`

const BaskedTitle = styled.div`
    font-weight: 700;
    color: ${theme.colors.title};
    height: 43px;
    border-bottom: 1px solid ${theme.colors.borderColor};
    margin-top: 24px;
    text-indent: 24px;
    background: ${theme.colors.primary};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

const BaskedText = styled.p`
    font-weight: 700;
    margin: 77px;
    color: ${theme.colors.font};
    background: ${theme.colors.primary};
`

const BaskedMainLine = styled.div`
    height: 30px;
`

const BaskedDescription = styled.div`
    width: 100%;
    display: "flex";
    flex-direction: "column";
    align-items: "center";
    background: ${theme.colors.primary};
`

export const Basket: React.FC<BasketProps> = ({
    left,
    top,
    handleMouseEnter,
    handleMouseLeave,
}) => {
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
        <BasketStyled
            left={left}
            top={top}
            onMouseEnter={(e: MouseEvent<HTMLElement>) => handleMouseEnter(e)}
            onMouseLeave={handleMouseLeave}
        >
            <BaskedMainLine />
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
                    <BaskedDescription>
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
                    </BaskedDescription>
                )}
            </Flex>
        </BasketStyled>
    )
}
