
export type Orders = {
    orderNumber: string,
    createdAt: string,
    totalPrice: number,
    paymentMethod: string,
    status: "done"| "in progress"| "canceled",
    paid: "cash" | "credit card";
    data: OrderItem[],
}
export type OrderItem = {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
    rating: number;
    reviews: number;
};