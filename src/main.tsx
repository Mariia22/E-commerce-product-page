import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { GlobalStyles } from "./style/Global.styled"
import { ThemeProvider } from "styled-components"
import { theme } from "./style/Theme.styled"
import { Provider } from "react-redux"
import { store } from "./redux/store"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
)
