import React, { useState } from "react"
import { Flex } from "../common/Flex/Flex"
import { ProductImagesType } from "../../utils/types"
import styled, { css } from "styled-components"
import { theme } from "../../style/Theme.styled"

export const Gallery: React.FC<ProductImagesType> = ({ images }) => {
    const [currentIndex] = useState(0)

    type PhotoProps = {
        background: string
        $active?: number
    }

    const MainPhotoStyled = styled.div<PhotoProps>`
        width: 445px;
        height: 445px;
        margin: 0 0 32px;
        background-image: url(${({ background }) => background});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 15px;
    `

    const ThumbnailPhotoStyled = styled.div<PhotoProps>`
        width: 88px;
        height: 88px;
        background: url(${({ background }) => background});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;

        &:hover {
            opacity: 0.5;
        }

        ${(props) =>
            props.$active &&
            css`
                border: 2px solid ${theme.colors.secondary};
                opacity: 0.5;
            `}
    `

    return (
        <Flex direction="column" margin="0 48px">
            <MainPhotoStyled background={images[currentIndex].image} />
            <Flex justify="space-between">
                {images.map((image, idx) => (
                    <ThumbnailPhotoStyled
                        key={image.id}
                        background={image.thumbnail}
                        $active={+(currentIndex === idx)}
                    />
                ))}
            </Flex>
        </Flex>
    )
}
