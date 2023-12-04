import React from "react"
import { Header } from "./components/Header/Header"
import { Flex } from "./components/common/Flex/Flex"
import { Description } from "./components/Description/Description"
import { Gallery } from "./components/Gallery/Gallery"

export const App: React.FC = () => {
    return (
        <>
            <Header />
            <Flex margin="90px 0 0 0">
                <Gallery />
                <Description />
            </Flex>
        </>
    )
}
