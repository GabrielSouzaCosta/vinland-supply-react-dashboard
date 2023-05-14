export interface Product {
    product: string,
    img: string,
    sold: string,
    ranking: number,
    data: {
        date: string,
        profits: number
    }[]
}