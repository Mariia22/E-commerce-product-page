import React from "react"
import { Flex } from "../common/Flex/Flex"
import DeleteIcon from "../../assets/icons/icon-delete.svg"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"

interface CartItemProps {
    name: string
    price: number
    number: number
    image: string
}

export const ImageStyled = styled.div<Partial<CartItemProps>>`
    width: 50px;
    height: 50px;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
`

const DeleteIconStyled = styled(DeleteIcon)`
    fill: ${theme.colors.iconDeleteColor};
    width: 14px;
    height: 16px;
    &:hover {
        cursor: pointer;
    }
`

const BoldTextStyled = styled.p`
    color: ${theme.colors.title};
    font-weight: 700;
    text-indent: 4px;
`

export const CartItem: React.FC<CartItemProps> = ({
    name,
    price,
    number,
    image,
}) => {
    return (
        <Flex
            width="100%"
            justify="space-evenly"
            align="center"
            margin="0 0 1.5rem 0"
        >
            <ImageStyled image={image} />
            <Flex direction="column">
                <p>{name}</p>
                <Flex>
                    <p>${price}x</p>
                    <p>{number}</p>
                    <BoldTextStyled>${price * number}</BoldTextStyled>
                </Flex>
            </Flex>
            <DeleteIconStyled />
        </Flex>
    )
}
