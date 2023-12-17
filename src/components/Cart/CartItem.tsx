import React from "react"
import { Flex } from "../common/Flex/Flex"
import DeleteIcon from "../../assets/icons/icon-delete.svg"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import { useAppDispatch } from "../../redux/hooks"
import { cartSlice } from "../../redux/reducers/CartSlice"

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

const IconWrapper = styled.div`
    display: flex;
    width: 10%;
    height: 100%;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`

const DeleteIconStyled = styled(DeleteIcon)`
    fill: ${theme.colors.iconDeleteColor};
    width: 14px;
    height: 16px;
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
    const dispatch = useAppDispatch()
    const { removeFromCart } = cartSlice.actions

    const handleClick = () => {
        dispatch(removeFromCart())
    }

    return (
        <Flex justify="space-evenly" align="center" margin="1.5rem">
            <ImageStyled image={image} />
            <Flex direction="column">
                <p>{name}</p>
                <Flex>
                    <p>${price}x</p>
                    <p>{number}</p>
                    <BoldTextStyled>${price * number}</BoldTextStyled>
                </Flex>
            </Flex>
            <IconWrapper onClick={handleClick} onTouchEnd={handleClick}>
                <DeleteIconStyled />
            </IconWrapper>
        </Flex>
    )
}
