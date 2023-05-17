export interface Product {
    name: string;
    image?: string;
    sold?: number;
    unit_price?: string;
    total_revenue?: number;
    total_profit?: number;
    rating?: number,
    ranking?: number;
    data?: {
        date: string,
        profits: number,
    }[];
}