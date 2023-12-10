import React from "react"

interface BasketItemProps {
    name: string
    price: number
    number: number
}

export const BasketItem: React.FC<BasketItemProps> = ({
    name,
    price,
    number,
}) => {
    return (
        <>
            <p>{name}</p>
            <p>{price}</p>
            <p>{number}</p>
        </>
    )
}
