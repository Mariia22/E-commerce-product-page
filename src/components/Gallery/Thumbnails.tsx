import React from "react"
import styled, { css } from "styled-components"
import { theme } from "../../style/Theme.styled"

type ThumbnailProps = {
    background: string
    $active?: number
    handleChange: (id: number) => void
    id: number
}

const ThumbnailPhotoStyled = styled.div<Partial<ThumbnailProps>>`
    width: 88px;
    height: 88px;
    background: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }

    ${(props) =>
        props.$active &&
        css`
            border: 2px solid ${theme.colors.secondary};
            opacity: 0.5;
        `}
`

export const Thumbnails: React.FC<ThumbnailProps> = ({
    handleChange,
    background,
    $active,
    id,
}) => {
    return (
        <ThumbnailPhotoStyled
            onClick={() => handleChange(id)}
            background={background}
            $active={$active}
        />
    )
}
