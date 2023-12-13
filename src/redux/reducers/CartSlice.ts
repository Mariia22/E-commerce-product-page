import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import image from "../../assets/images/image-product-1-thumbnail.jpg"
import { IProduct } from "../models/IProduct"

interface CartState {
    productsInCart: IProduct[]
}

const initialState: CartState = {
    productsInCart: [
        {
            id: 1,
            name: "Fall Limited Edition Sneakers",
            price: 125.0,
            number: 0,
            image: image,
            stock: 5,
        },
    ],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.productsInCart[0].number = action.payload
        },

        removeFromCart(state) {
            state.productsInCart[0].number = 0
        },
    },
})

export default cartSlice.reducer
