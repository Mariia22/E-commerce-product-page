import React from "react"
import styled from "styled-components"
import { device } from "../../style/mediaQueries.styled"

interface MainProps {
    children: React.ReactNode
}

const MainWrapperStyled = styled.div`
    display: flex;
    margin: 50px 0 0 0;

    @media ${device.tablet} {
        flex-direction: column;
        margin: 28px 0 0 0;
    }
`
export const MainWrapper: React.FC<MainProps> = ({ children }) => {
    return <MainWrapperStyled>{children}</MainWrapperStyled>
}
