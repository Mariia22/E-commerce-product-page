import React, { useState } from "react"
import { Flex } from "../common/Flex/Flex"
import { ProductImagesType } from "../../utils/types"
import styled from "styled-components"
import { Portal } from "../Portal/Portal"
import { Swiper } from "../Swiper/SwiperWrapper"
import { Thumbnails } from "./Thumbnails"
import { PhotoProps } from "./types"
import { device } from "../../style/mediaQueries.styled"
import { SwiperButton } from "../Swiper/SwiperButton"
import PreviousIcon from "../../assets/icons/icon-previous-mobile.svg"
import NextIcon from "../../assets/icons/icon-next-mobile.svg"
import { useMediaQuery } from "../../redux/hooks"

export const Gallery: React.FC<ProductImagesType> = ({ images }) => {
  const [currentIndex, setIndex] = useState(0)
  const [isSwiper, setSwiper] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 426px)")

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

        @media ${device.tablet} {
            width: 355px;
            height: 355px;
        }

        @media ${device.mobile} {
            position: relative;
            width: 375px;
            height: 300px;
            border-radius: 0;
        }
    `
  const MainWrapper = styled.div`
        display: flex;
        flex-direction: column;
        margin: 0 3% 0 48px;

        @media ${device.tablet} {
            margin: 0 0 0 20px;
        }

        @media ${device.mobile} {
            margin: 0;
            align-items: center;
        }
    `

  const handleClick = () => {
    isDesktop && setSwiper(!isSwiper)
  }

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
    <MainWrapper>
      <MainPhotoStyled
        background={images[currentIndex].image}
        onClick={handleClick}
      >
        {!isDesktop && (
          <>
            <SwiperButton
              left="16px"
              width="40px"
              height="40px"
              handleClick={handlePreviousButton}
            >
              <PreviousIcon />
            </SwiperButton>
            <SwiperButton
              right="16px"
              width="40px"
              height="40px"
              handleClick={handleNextButton}
            >
              <NextIcon />
            </SwiperButton>
          </>
        )}
      </MainPhotoStyled>
      {isDesktop && (
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
      )}
      {isSwiper && (
        <Portal>
          <Swiper handleClick={handleClick} images={images} />
        </Portal>
      )}
    </MainWrapper>
  )
}
