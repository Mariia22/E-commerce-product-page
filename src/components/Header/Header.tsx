import React, { MouseEvent, useState } from "react"
import { Flex } from "../common/Flex/Flex"
import { User } from "./User/User"
import { Nav } from "./Nav/Nav"
import CartIcon from "../../assets/icons/icon-cart.svg"
import LogoIcon from "../../assets/icons/logo.svg"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import { Portal } from "../Portal/Portal"
import { Cart, CartProps } from "../Cart/Cart"
import { CartWrapper } from "../Cart/CartWrapper"
import { useAppSelector } from "../../redux/hooks"

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`

const LogoIconStyled = styled(LogoIcon)`
    margin-top: 8px;
    &:hover {
        cursor: pointer;
    }
`

const CartIconStyled = styled(CartIcon)`
    fill: ${theme.colors.font};
    width: 22px;
    height: 20px;

    &:hover {
        cursor: pointer;
    }
`

export const Header: React.FC = () => {
    const [coords, setCoords] = useState<Pick<CartProps, "top" | "left">>({
        left: 0,
        top: 0,
    })
    const [isCartOn, setCartOn] = useState(false)
    const [delayHandler, setDelayHandler] = useState(0)
    const { productsInCart } = useAppSelector((state) => state.cartReducer)

    const handleMouseEnter = (e: MouseEvent<HTMLElement>): void => {
        const element = e.target as HTMLElement
        const rect = element.getBoundingClientRect()
        setCoords({
            left: rect.x + rect.width / 2,
            top: rect.y + scrollY + 50,
        })
        stopTimerAndOpenCart()
    }

    const handleMouseLeave = () => {
        setDelayHandler(
            window.setTimeout(() => {
                setCartOn(false)
            }, 500)
        )
    }

    const stopTimerAndOpenCart = () => {
        clearTimeout(delayHandler)
        setCartOn(true)
    }

    return (
        <HeaderStyle>
            <LogoIconStyled />
            <Nav />
            <Flex align="center" width="15%" justify="space-around">
                <CartWrapper
                    $sumincart={productsInCart[0].number}
                    handleMouseEnter={(e: MouseEvent<HTMLElement>) =>
                        handleMouseEnter(e)
                    }
                    handleMouseLeave={handleMouseLeave}
                >
                    <CartIconStyled />
                </CartWrapper>
                <User />
            </Flex>
            {isCartOn && (
                <Portal>
                    <Cart
                        left={coords.left}
                        top={coords.top}
                        handleMouseEnter={stopTimerAndOpenCart}
                        handleMouseLeave={handleMouseLeave}
                    />
                </Portal>
            )}
        </HeaderStyle>
    )
}
