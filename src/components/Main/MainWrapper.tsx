import React from "react"
import styled from "styled-components"
import { device } from "../../style/mediaQueries.styled"

interface MainProps {
    children: React.ReactNode
}

const MainWrapperStyled = styled.div`
    display: flex;
    margin: 3.125rem 0 0 0;

    @media ${device.mobile} {
        flex-direction: column;
        margin: 1.75rem 0 5.5rem 0;
    }
`
export const MainWrapper: React.FC<MainProps> = ({ children }) => {
    return <MainWrapperStyled>{children}</MainWrapperStyled>
}
