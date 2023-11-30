import styled from "styled-components"
import { FlexProps } from "./types"

export const StyledFlex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction || "row"};
    align-items: ${({ align }) => align || "stretch"};
    justify-content: ${({ justify }) => justify || "stretch"};
    margin: ${({ margin }) => margin || "0"};
`
