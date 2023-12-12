import { createSlice } from "@reduxjs/toolkit"
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
            number: 1,
            image: image,
        },
    ],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
})

export default cartSlice.reducer
