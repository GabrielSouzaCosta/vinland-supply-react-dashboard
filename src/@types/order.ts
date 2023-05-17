export interface Order {
    id: string;
    product: string;
    quantity: number;
    unit_price: number;
    payment_method: 'PIX' | 'Credit Card' | 'BTC' | 'Cash';
    billing_date: string;
    status: 'processed' | 'shipped' | 'delivered';
    payment_date: string;
}