import React from "react"
import { Header } from "./components/Header/Header"
import { Wrapper } from "./components/common/Wrapper/Wrapper"

export const App: React.FC = () => {
  return (
    <Wrapper direction="column" align="center" margin="20px 0 0 0">
      <Header />
    </Wrapper>
  )
}
