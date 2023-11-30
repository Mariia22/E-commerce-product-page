import styled from "styled-components"

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    width: 100%;
    padding: 8px 0 34px 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};

    @media ${(props) => props.theme.media.phone} {
        max-width: 100%;
    }
`
