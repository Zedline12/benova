import { ICourse } from "./ICourse"

export interface IOrder{
    orderId: string
    userId: string,
    courses: ICourse[]
    status: string
    amountSubtotal: number
    paymentIntent: string
    receiptUrl:string
}