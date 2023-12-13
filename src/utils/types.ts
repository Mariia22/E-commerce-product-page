export type ProductType = {
    id: number
    company: string
    title: string
    description: string
    price: string
    discount: string
    prevPrice: string
    images: Array<ImagesType>
}

export type ImagesType = {
    id: number
    image: string
    thumbnail: string
}

export type ProductDescriptionType = Omit<ProductType, "id" | "images">

export type ProductImagesType = Pick<ProductType, "images">
