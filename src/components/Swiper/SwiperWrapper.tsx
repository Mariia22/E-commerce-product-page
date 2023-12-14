import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import CloseIcon from "../../assets/icons/icon-close.svg"
import { Flex } from "../common/Flex/Flex"
import { ImagesType } from "../../utils/types"
import { Thumbnails } from "../Gallery/Thumbnails"
import { PhotoProps } from "../Gallery/types"
import PreviousIcon from "../../assets/icons/icon-previous.svg"
import NextIcon from "../../assets/icons/icon-next.svg"

interface SwiperProps {
    handleClick: () => void
    images: ImagesType[]
}

const SwiperWrapperStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.overlayColor};
`

const CloseIconStyled = styled(CloseIcon)`
    fill: ${theme.colors.primary};
    width: 20px;
    height: 20px;
    &:hover {
        fill: ${theme.colors.secondary};
        cursor: pointer;
    }
`

const CloseIconWrapperStyled = styled.div`
    margin-left: auto;
`
const SwiperStyled = styled.div<PhotoProps>`
    width: 550px;
    height: 550px;
    position: relative;
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
    opacity: 1;

    &:hover {
        cursor: pointer;
    }
`

const PreviousButtonStyled = styled.div`
    position: absolute;
    top: 50%;
    left: -28px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: ${theme.colors.primary};
    stroke: ${theme.colors.title};
    &:hover {
        stroke: ${theme.colors.secondary};
        cursor: pointer;
    }
`

const NextButtonStyled = styled.div`
    position: absolute;
    top: 50%;
    right: -28px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: ${theme.colors.primary};
    stroke: ${theme.colors.title};
    &:hover {
        stroke: ${theme.colors.secondary};
        cursor: pointer;
    }
`

export const Swiper: React.FC<SwiperProps> = ({ images, handleClick }) => {
    const [currentIndex, setIndex] = useState(0)

    const handleChange = (id: number): void => {
        setIndex(id)
    }

    const handlePreviousButton = () => {
        if (currentIndex === 0) {
            setIndex(images.length - 1)
        } else {
            setIndex(currentIndex - 1)
        }
    }

    const handleNextButton = () => {
        if (currentIndex === images.length - 1) {
            setIndex(0)
        } else {
            setIndex(currentIndex + 1)
        }
    }

    return (
        <SwiperWrapperStyled>
            <Flex
                direction="column"
                justify="flex-end"
                align="center"
                width="550px"
            >
                <CloseIconWrapperStyled onClick={handleClick}>
                    <CloseIconStyled />
                </CloseIconWrapperStyled>
                <SwiperStyled background={images[currentIndex].image}>
                    <PreviousButtonStyled onClick={handlePreviousButton}>
                        <PreviousIcon />
                    </PreviousButtonStyled>
                    <NextButtonStyled onClick={handleNextButton}>
                        <NextIcon />
                    </NextButtonStyled>
                </SwiperStyled>
                <Flex
                    justify="space-between"
                    align="center"
                    width="90%"
                    margin="40px 0"
                >
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
            </Flex>
        </SwiperWrapperStyled>
    )
}
