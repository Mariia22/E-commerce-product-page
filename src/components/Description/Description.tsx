import React from "react"
import { Flex } from "../common/Flex/Flex"
import { Button } from "../common/Button/Button"
import { Counter } from "../Counter/Counter"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import { ProductDescriptionType } from "../../utils/types"

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

export const Description: React.FC<ProductDescriptionType> = ({
    company,
    title,
    description,
    price,
    discount,
    prevPrice,
}) => {
    return (
        <Flex direction="column" margin="62px 47px 0px 77px">
            <CompanyTitleStyled>{company}</CompanyTitleStyled>
            <TitleStyled>{title}</TitleStyled>
            <DescriptionStyled>{description}</DescriptionStyled>
            <Flex width="40%" justify="space-between" align="center">
                <PriceStyled>{price}</PriceStyled>
                <DiscountStyled>{discount}</DiscountStyled>
            </Flex>
            <PrevPriceStyled>{prevPrice}</PrevPriceStyled>
            <Flex>
                <Counter />
                <Button />
            </Flex>
        </Flex>
    )
}
