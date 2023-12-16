import React, { useState } from "react"
import { Button } from "../common/Button/Button"
import { Counter } from "../Counter/Counter"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import { ProductDescriptionType } from "../../utils/types"
import CartIcon from "../../assets/icons/icon-shape.svg"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { cartSlice } from "../../redux/reducers/CartSlice"
import { device } from "../../style/mediaQueries.styled"
import { Flex } from "../common/Flex/Flex"

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.75em 2.94rem 0px 5%;

    @media ${device.mobile} {
        margin: 0 1.5rem;
    }
`

const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
        display: none;
    }
`
const PriceMobileWrapper = styled.div`
    display: none;

    @media ${device.tablet} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1.75rem 0 2rem;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media ${device.tablet} {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`

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
    line-height: 3rem;
    margin: 1.7rem 0 2rem;
    color: ${theme.colors.title};

    @media ${device.mobile} {
        font-size: 1.75rem;
        line-height: 2rem;
        margin: 1.19rem 0 0.94rem;
    }
`

const DescriptionStyled = styled.p`
    font-weight: 400;
    line-height: 1.625rem;

    @media ${device.mobile} {
        font-size: 0.94rem;
        line-height: 1.6rem;
    }
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
    font-style: normal;
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.paleSecondary};
    text-align: center;
    border-radius: 6px;
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
        <DescriptionWrapper>
            <CompanyTitleStyled>{company}</CompanyTitleStyled>
            <TitleStyled>{title}</TitleStyled>
            <DescriptionStyled>{description}</DescriptionStyled>
            {/* For desktop  */}
            <PriceWrapper>
                <Flex width="40%" justify="space-between" align="center">
                    <PriceStyled>{price}</PriceStyled>
                    <DiscountStyled>{discount}</DiscountStyled>
                </Flex>
                <PrevPriceStyled>{prevPrice}</PrevPriceStyled>
            </PriceWrapper>
            {/* For mobile  */}
            <PriceMobileWrapper>
                <Flex width="50%" justify="space-between" align="center">
                    <PriceStyled>{price}</PriceStyled>
                    <DiscountStyled>{discount}</DiscountStyled>
                </Flex>
                <PrevPriceStyled>{prevPrice}</PrevPriceStyled>
            </PriceMobileWrapper>
            <ButtonWrapper>
                <Counter
                    counter={counter}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                />
                <Button
                    width={"272px"}
                    height="56px"
                    $isshadow={true}
                    handleClick={handleClick}
                >
                    <CartIconStyled />
                    Add to cart
                </Button>
            </ButtonWrapper>
        </DescriptionWrapper>
    )
}
