import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartReducer from "./reducers/CartSlice"

const rootReducer = combineReducers({
    cartReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
