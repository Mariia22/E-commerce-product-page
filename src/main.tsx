import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { GlobalStyles } from "./style/Global.styled"
import { ThemeProvider } from "styled-components"
import { theme } from "./style/Theme.styled"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
