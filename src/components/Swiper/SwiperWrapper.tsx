import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../style/Theme.styled"
import CloseIcon from "../../assets/icons/icon-close.svg"
import { Flex } from "../common/Flex/Flex"
import { Swiper } from "./Swiper"
import { ImagesType } from "../../utils/types"
import { Thumbnails } from "../Gallery/Thumbnails"

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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.overlayColor};
    opacity: 0.75;
`

const CloseIconStyled = styled(CloseIcon)`
    fill: ${theme.colors.secondary};
    width: 20px;
    height: 20px;
    &:hover {
        cursor: pointer;
    }
`

const CloseIconWrapperStyled = styled.div`
    margin-left: auto;
`

export const SwiperWrapper: React.FC<SwiperProps> = ({
    images,
    handleClick,
}) => {
    const [currentIndex, setIndex] = useState(0)

    const handleChange = (id: number): void => {
        setIndex(id)
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
                <Swiper />
                <Flex
                    justify="space-between"
                    align="center"
                    width="90%"
                    margin="40px 0"
                >
                    {images.map((image, idx) => (
                        <Thumbnails
                            key={image.id}
                            id={image.id}
                            background={image.thumbnail}
                            $active={+(currentIndex === idx)}
                            handleChange={() => handleChange(image.id)}
                        />
                    ))}
                </Flex>
            </Flex>
        </SwiperWrapperStyled>
    )
}
