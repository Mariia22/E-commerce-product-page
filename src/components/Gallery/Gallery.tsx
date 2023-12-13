import React, { useState } from "react"
import { Flex } from "../common/Flex/Flex"
import { ProductImagesType } from "../../utils/types"
import styled from "styled-components"
import { Portal } from "../Portal/Portal"
import { SwiperWrapper } from "../Swiper/SwiperWrapper"
import { Thumbnails } from "./Thumbnails"

export const Gallery: React.FC<ProductImagesType> = ({ images }) => {
    const [currentIndex, setIndex] = useState(0)
    const [isSwiper, setSwiper] = useState(false)
    console.log(currentIndex)

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
        <Flex direction="column" margin="0 48px">
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
                        $active={+(currentIndex === idx)}
                        handleChange={() => handleChange(idx)}
                    />
                ))}
            </Flex>
            {isSwiper && (
                <Portal>
                    <SwiperWrapper handleClick={handleClick} images={images} />
                </Portal>
            )}
        </Flex>
    )
}
