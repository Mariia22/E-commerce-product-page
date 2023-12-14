import React, { useState } from "react"
import { Flex } from "../common/Flex/Flex"
import { Button } from "../common/Button/Button"
import { Counter } from "../Counter/Counter"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import { ProductDescriptionType } from "../../utils/types"
import CartIcon from "../../assets/icons/icon-shape.svg"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { cartSlice } from "../../redux/reducers/CartSlice"

const CompanyTitleStyled = styled.h2`
    font-size: 0.81rem;
    font-weight: 700;
    color: ${theme.colors.secondary};
    letter-spacing: 2px;
    text-transform: uppercase;
`

const TitleStyled = styled.h1`
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 48px;
    margin: 27px 0 32px;
    color: ${theme.colors.title};
`

const DescriptionStyled = styled.p`
    font-weight: 400;
    line-height: 1.625rem;
`

const PriceStyled = styled.p`
    color: ${theme.colors.title};
    font-size: 28px;
    font-weight: 700;
`

const DiscountStyled = styled.div`
    width: 51px;
    height: 27px;
    font-weight: 700;
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.paleSecondary};
    text-align: center;
`

const PrevPriceStyled = styled.p`
    font-weight: 700;
    line-height: 1.625rem;
    text-decoration: line-through;
    color: ${theme.colors.paleFont};
`

const CartIconStyled = styled(CartIcon)`
    fill: white;
    text-align: center;
    margin-right: 3px;
    width: 17.5px;
    height: 16px;
`

export const Description: React.FC<ProductDescriptionType> = ({
    company,
    title,
    description,
    price,
    discount,
    prevPrice,
}) => {
    const [counter, setCounter] = useState(0)
    const { productsInCart } = useAppSelector((state) => state.cartReducer)
    const { increment } = cartSlice.actions
    const dispatch = useAppDispatch()

    const handleIncrement = () => {
        if (counter < productsInCart[0].stock) {
            setCounter(counter + 1)
        }
    }

    const handleDecrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const handleClick = () => {
        dispatch(increment(counter))
        setCounter(0)
    }

    return (
        <Flex direction="column" margin="12px 47px 0px 5%">
            <CompanyTitleStyled>{company}</CompanyTitleStyled>
            <TitleStyled>{title}</TitleStyled>
            <DescriptionStyled>{description}</DescriptionStyled>
            <Flex width="40%" justify="space-between" align="center">
                <PriceStyled>{price}</PriceStyled>
                <DiscountStyled>{discount}</DiscountStyled>
            </Flex>
            <PrevPriceStyled>{prevPrice}</PrevPriceStyled>
            <Flex align="flex-end" justify="space-between">
                <Counter
                    counter={counter}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                />
                <Button
                    width="272px"
                    height="56px"
                    $isshadow={true}
                    handleClick={handleClick}
                >
                    <CartIconStyled />
                    Add to cart
                </Button>
            </Flex>
        </Flex>
    )
}
