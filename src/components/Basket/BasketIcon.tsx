import React from "react"
import { ContainerStyled } from "../common/Container/Container.styled"
import icon from "../../assets/icons/icon-cart.svg"

export const BasketIcon: React.FC = () => {
    return <ContainerStyled width={21.8} height={20} background={icon} />
}
