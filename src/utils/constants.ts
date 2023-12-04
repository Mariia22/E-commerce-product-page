import image1 from "../assets/images/image-product-1.jpg"
import image2 from "../assets/images/image-product-2.jpg"
import image3 from "../assets/images/image-product-3.jpg"
import image4 from "../assets/images/image-product-4.jpg"
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg"
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg"
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg"
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg"

export const menu = [
    {
        id: 1,
        name: "Collections",
    },
    {
        id: 2,
        name: "Men",
    },
    {
        id: 3,
        name: "Women",
    },
    {
        id: 4,
        name: "About",
    },
    {
        id: 5,
        name: "Contact",
    },
]

export const data = [
    {
        id: 1,
        company: "Sneaker Company",
        title: "Fall Limited Edition Sneakers",
        description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: "$125.00",
        discount: "50%",
        prevPrice: "$250.00",
        images: [
            {
                id: 1,
                image: image1,
                thumbnail: thumbnail1,
            },
            {
                id: 2,
                image: image2,
                thumbnail: thumbnail2,
            },
            {
                id: 3,
                image: image3,
                thumbnail: thumbnail3,
            },
            {
                id: 4,
                image: image4,
                thumbnail: thumbnail4,
            },
        ],
    },
]
