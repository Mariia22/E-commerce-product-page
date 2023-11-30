import React from "react"
import { ContainerStyled } from "../common/Container/Container.styled"
import logo from "../../assets/icons/logo.svg"

export const Logo: React.FC = () => {
    return <ContainerStyled width={137.5} height={20} background={logo} />
}
