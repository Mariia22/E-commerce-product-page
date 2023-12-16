import React, { MouseEvent, useState } from "react"
import { User } from "./User/User"
import { Nav } from "./Nav/Nav"
import CartIcon from "../../assets/icons/icon-cart.svg"
import LogoIcon from "../../assets/icons/logo.svg"
import MenuIcon from "../../assets/icons/icon-menu.svg"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import { Portal } from "../Portal/Portal"
import { Cart, CartProps } from "../Cart/Cart"
import { CartWrapper } from "../Cart/CartWrapper"
import { useAppSelector, useMediaQuery } from "../../redux/hooks"
import { device } from "../../style/mediaQueries.styled"
import { NavMobile } from "./Nav/NavMobile"

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};

    @media ${device.mobile} {
        margin: 0 1.19rem 1.19rem 1.5rem;
        padding-top: 1.5rem;
        border-bottom: none;
    }
`

const LogoIconStyled = styled(LogoIcon)`
    margin-top: 0.5rem;
    &:hover {
        cursor: pointer;
    }

    @media ${device.mobile} {
        margin-top: 0;
    }
`

const MenuIconStyled = styled(MenuIcon)`
    display: none;

    @media ${device.mobile} {
        display: block;
        margin-top: 4px;
        &:hover {
            cursor: pointer;
        }
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

const MobileWrapper = styled.div`
    display: flex;

    @media ${device.mobile} {
        width: 50%;
        justify-content: space-between;
    }
`

const UserWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 15%;

    @media ${device.mobile} {
        width: 18%;
        justify-content: space-between;
        align-items: flex-start;
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
    const isDesktop = useMediaQuery("(min-width: 426px)")

    const handleMouseEnter = (e: MouseEvent<HTMLElement>): void => {
        const element = e.target as HTMLElement
        const rect = element.getBoundingClientRect()

        setCoords({
            left: rect.x + rect.width / 2 - 100,
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
            <MobileWrapper>
                <NavMobile>
                    <MenuIconStyled />
                </NavMobile>
                <LogoIconStyled />
            </MobileWrapper>
            {isDesktop && <Nav />}
            <UserWrapper>
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
            </UserWrapper>
            {isCartOn && (
                <Portal>
                    <Cart
                        left={isDesktop ? coords.left : undefined}
                        top={coords.top}
                        handleMouseEnter={stopTimerAndOpenCart}
                        handleMouseLeave={handleMouseLeave}
                    />
                </Portal>
            )}
        </HeaderStyle>
    )
}
