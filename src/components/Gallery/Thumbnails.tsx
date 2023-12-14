import React from "react"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"

type ThumbnailProps = {
    background: string
    isActive: boolean
    handleChange: (id: number) => void
    id: number
}

const ThumbnailPhotoStyled = styled.div<Partial<ThumbnailProps>>`
    position: relative;
    width: 88px;
    height: 88px;
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;

    &:hover {
        background-image: linear-gradient(
                to top,
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0.5)
            ),
            url(${({ background }) => background});
        cursor: pointer;
    }
`

const OverlayThumbnailStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${theme.colors.primary};
    opacity: 0.5;
    border: 2px solid ${theme.colors.secondary};
    border-radius: 10px;
`

export const Thumbnails: React.FC<ThumbnailProps> = ({
    handleChange,
    background,
    isActive,
    id,
}) => {
    return (
        <ThumbnailPhotoStyled
            onClick={() => handleChange(id)}
            background={background}
        >
            {isActive && <OverlayThumbnailStyled />}
        </ThumbnailPhotoStyled>
    )
}
