import React, { useState } from "react"
import { Flex } from "../common/Flex/Flex"
import { ContainerStyled } from "../common/Container/Container.styled"
import { ProductImagesType } from "../../utils/types"

export const Gallery: React.FC<ProductImagesType> = ({ images }) => {
    const [currentIndex] = useState(0)

    return (
        <Flex direction="column" margin="0 48px">
            <ContainerStyled
                width="445px"
                height="445px"
                background={images[currentIndex].image}
                $borderradius="15px"
                margin="0 0 32px"
            />
            <Flex justify="space-between">
                {images.map((image, idx) => (
                    <ContainerStyled
                        key={image.id}
                        width="88px"
                        height="88px"
                        background={image.thumbnail}
                        $borderradius="10px"
                        $active={+(currentIndex === idx)}
                    />
                ))}
            </Flex>
        </Flex>
    )
}
