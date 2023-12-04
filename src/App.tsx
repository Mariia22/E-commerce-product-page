import React, { useState } from "react"
import { Header } from "./components/Header/Header"
import { Flex } from "./components/common/Flex/Flex"
import { Description } from "./components/Description/Description"
import { Gallery } from "./components/Gallery/Gallery"
import { data } from "./utils/constants"
import { ProductType } from "./utils/types"

export const App: React.FC = () => {
    const [currentPage] = useState<ProductType>(data[0])
    return (
        <>
            <Header />
            <Flex margin="90px 0 0 0">
                <Gallery images={currentPage.images} />
                <Description
                    company={currentPage.company}
                    title={currentPage.title}
                    description={currentPage.description}
                    price={currentPage.price}
                    discount={currentPage.discount}
                    prevPrice={currentPage.prevPrice}
                />
            </Flex>
        </>
    )
}
