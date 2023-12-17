import React, { MouseEvent } from "react"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import { Flex } from "../common/Flex/Flex"
import { Button } from "../common/Button/Button"
import { CartItem } from "./CartItem"
import { useAppSelector } from "../../redux/hooks"

export interface CartProps {
    left?: number
    top: number
    handleMouseEnter: (e: MouseEvent<HTMLElement>) => void
    handleMouseLeave: () => void
}

const CartStyled = styled.div<Partial<CartProps>>`
    position: absolute;
    left: ${({ left }) => `${left}px` || `50%`};
    top: ${({ top }) => top || 0}px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    min-width: 360px;
    min-height: 236px;
    border-radius: 10px;
    background: ${theme.colors.primary};
    box-shadow: 0px 20px 50px -20px ${theme.colors.shadowColor};
`

const CartTitle = styled.div`
    font-weight: 700;
    color: ${theme.colors.title};
    height: 43px;
    border-bottom: 1px solid ${theme.colors.borderColor};
    margin-top: 24px;
    text-indent: 24px;
`

const CartText = styled.p`
    font-weight: 700;
    margin: 3.3rem 0 5.3rem;
    color: ${theme.colors.font};
`

const CartDescription = styled.div`
    width: 100%;
    display: "flex";
    flex-direction: "column";
    align-items: "center";
`

export const Cart: React.FC<CartProps> = ({
    left,
    top,
    handleMouseEnter,
    handleMouseLeave,
}) => {
    const { productsInCart } = useAppSelector((state) => state.cartReducer)

    const handleClick = () => {
        console.log("Check the cart")
    }

    return (
        <CartStyled
            left={left}
            top={top}
            onMouseEnter={(e: MouseEvent<HTMLElement>) => handleMouseEnter(e)}
            onMouseLeave={handleMouseLeave}
        >
            <CartTitle>Cart</CartTitle>
            <Flex direction="column" align="center" justify="center">
                {productsInCart[0].number > 0 ? (
                    <CartDescription>
                        {productsInCart.map((item) => (
                            <CartItem
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                number={item.number}
                                image={item.image}
                            />
                        ))}
                        <Button
                            width="312px"
                            height="56px"
                            handleClick={handleClick}
                        >
                            Checkout
                        </Button>
                    </CartDescription>
                ) : (
                    <CartText>Your cart is empty.</CartText>
                )}
            </Flex>
        </CartStyled>
    )
}
