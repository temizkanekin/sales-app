type OrderDetail = {
  orderId:number,
  orderDate:string,
  orderChannel:string,
  orderShippingCompany:string,
  orderPaymentType:string,
  orderHistory: OrderHistory[]
}

type Product = {
  productName: string,
  productCount: number
}

type DeliveryInformation = {
  toBeDeliveredName:string,
  toBeDeliveredPhoneNumber:string,
  toBeDeliveredIdentityNumber:string,
  toBeDeliveredAddress:string
}

type Status = {
  type:string,
  label:string
}

type OrderHistory = {
  commentedPersonName:string,
  orderHistoryEntry:string,
  commentedDate:string
}

export type Order = {
  orderDetails: OrderDetail,
  customer:string,
  products:Product,
  status:Status,
  price:number,
  deliveryInformation: DeliveryInformation
}