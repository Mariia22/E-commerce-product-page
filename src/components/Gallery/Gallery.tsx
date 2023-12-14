import React, { useState } from "react"
import { Flex } from "../common/Flex/Flex"
import { ProductImagesType } from "../../utils/types"
import styled from "styled-components"
import { Portal } from "../Portal/Portal"
import { Swiper } from "../Swiper/SwiperWrapper"
import { Thumbnails } from "./Thumbnails"
import { PhotoProps } from "./types"

export const Gallery: React.FC<ProductImagesType> = ({ images }) => {
    const [currentIndex, setIndex] = useState(0)
    const [isSwiper, setSwiper] = useState(false)

    const MainPhotoStyled = styled.div<PhotoProps>`
        width: 445px;
        height: 445px;
        margin: 0 0 32px;
        background-image: url(${({ background }) => background});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 15px;

        &:hover {
            cursor: pointer;
        }
    `

    const handleClick = () => {
        setSwiper(!isSwiper)
    }

    const handleChange = (id: number): void => {
        setIndex(id)
    }

    return (
        <Flex direction="column" margin="0 3% 0 48px">
            <MainPhotoStyled
                background={images[currentIndex].image}
                onClick={handleClick}
            />
            <Flex justify="space-between">
                {images.map((image, idx) => (
                    <Thumbnails
                        key={image.id}
                        id={idx}
                        background={image.thumbnail}
                        isActive={currentIndex === idx}
                        handleChange={() => handleChange(idx)}
                    />
                ))}
            </Flex>
            {isSwiper && (
                <Portal>
                    <Swiper handleClick={handleClick} images={images} />
                </Portal>
            )}
        </Flex>
    )
}
