import React from "react"
import { ContainerStyled } from "../../common/Container/Container.styled"
import avatar from "../../../assets/images/image-avatar.png"

export const User: React.FC = () => {
    return (
        <ContainerStyled
            width="50px"
            height="50px"
            background={avatar}
            $borderradius="50%"
        />
    )
}
