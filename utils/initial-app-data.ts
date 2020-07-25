import {Order} from '../interfaces'

export const initialOrderData: Order[] = [
    {
        orderDetails: {
            orderId:20533391,
            orderDate:"10 Tem '20 22:05",
            orderChannel:'n11.com',
            orderShippingCompany:'Yurtiçi Kargo',
            orderPaymentType:'Satıcı Öder',
            orderHistory: [
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"test",
                    commentedDate:"22.12"
                },
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"Kargo Hazırlandı",
                    commentedDate:"22.10"
                },
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"Kargo Etiketi Yazdırıldı",
                    commentedDate:"22.00"
                },
            ]
        },
        customer:"Hasan Taslak",
        products:{
                productName:"Bere",
                productCount:3
            },
        status:{
            type:'success',
            label:"ONAYLANDI"
        },
        price:1,
        deliveryInformation: {
            toBeDeliveredName:"Hasan Taslak",
            toBeDeliveredPhoneNumber:"5321234567",
            toBeDeliveredIdentityNumber:"12345678912",
            toBeDeliveredAddress:"Koru, No:4 North Star iş Merkezi Kat:6 Daire:11, Ahmet Taner Kışlalı Cd., 06810 Çankaya/Ankara"
        }
    },
    {
        orderDetails: {
            orderId:20533392,
            orderDate:"10 Tem '20 09:27",
            orderChannel:'n11.com',
            orderShippingCompany:'Yurtiçi Kargo',
            orderPaymentType:'Satıcı Öder',
            orderHistory: [
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"test",
                    commentedDate:"22.12"
                },
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"Kargo Hazırlandı",
                    commentedDate:"22.10"
                },
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"Kargo Etiketi Yazdırıldı",
                    commentedDate:"22.00"
                },
            ]
        },
        customer:"Seyit Orhan Kılıç",
        products:{
                productName:"Saat",
                productCount:1
            },
        status:{
            type:'success',
            label:"ONAYLANDI"
        },
        price:100,
        deliveryInformation: {
            toBeDeliveredName:"Seyit Orhan Kılıç",
            toBeDeliveredPhoneNumber:"5321234567",
            toBeDeliveredIdentityNumber:"12345678912",
            toBeDeliveredAddress:"Koru, No:4 North Star iş Merkezi Kat:6 Daire:11, Ahmet Taner Kışlalı Cd., 06810 Çankaya/Ankara"
        }
    },{
        orderDetails: {
            orderId:20533393,
            orderDate:"10 Tem '20 11:16",
            orderChannel:'n11.com',
            orderShippingCompany:'Yurtiçi Kargo',
            orderPaymentType:'Alıcı Öder',
            orderHistory: [
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"test",
                    commentedDate:"22.12"
                },
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"Kargo Hazırlandı",
                    commentedDate:"22.10"
                },
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"Kargo Etiketi Yazdırıldı",
                    commentedDate:"22.00"
                },
            ]
        },
        customer:"Melike Test",
        products:{
                productName:"Ayakkabı",
                productCount:1
            },
        status:{
            type:'success',
            label:"ONAYLANDI"
        },
        price:1,
        deliveryInformation: {
            toBeDeliveredName:"Melike Test",
            toBeDeliveredPhoneNumber:"5321234567",
            toBeDeliveredIdentityNumber:"12345678912",
            toBeDeliveredAddress:"Koru, No:4 North Star iş Merkezi Kat:6 Daire:11, Ahmet Taner Kışlalı Cd., 06810 Çankaya/Ankara"
        }
    },{
        orderDetails: {
            orderId:20533394,
            orderDate:"10 Tem '20 12:10",
            orderChannel:'trendyol.com',
            orderShippingCompany:'Yurtiçi Kargo',
            orderPaymentType:'Alıcı Öder',
            orderHistory: [
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"test",
                    commentedDate:"22.12"
                },
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"Kargo Hazırlandı",
                    commentedDate:"22.10"
                },
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"Kargo Etiketi Yazdırıldı",
                    commentedDate:"22.00"
                },
            ]
        },
        customer:"Melike Test",
        products:{
                productName:"Tanımsız",
                productCount:1
            },
        status:{
            type:'success',
            label:"TESLİM EDİLDİ"
        },
        price:1,
        deliveryInformation: {
            toBeDeliveredName:"Melike Test",
            toBeDeliveredPhoneNumber:"5321234567",
            toBeDeliveredIdentityNumber:"12345678912",
            toBeDeliveredAddress:"Koru, No:4 North Star iş Merkezi Kat:6 Daire:11, Ahmet Taner Kışlalı Cd., 06810 Çankaya/Ankara"
        }
    },{
        orderDetails: {
            orderId:20533395,
            orderDate:"10 Tem '20 14:07",
            orderChannel:'trendyol.com',
            orderShippingCompany:'Yurtiçi Kargo',
            orderPaymentType:'Satıcı Öder',
            orderHistory: [
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"test",
                    commentedDate:"22.12"
                },
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"Kargo Hazırlandı",
                    commentedDate:"22.10"
                },
                {
                    commentedPersonName:"Umut Ozan Yıldırım",
                    orderHistoryEntry:"Kargo Etiketi Yazdırıldı",
                    commentedDate:"22.00"
                },
            ]
        },
        customer: "Kerem AKA",
        products: {
            productName: "Tanımsız",
            productCount: 1
        },
        status:{
            type:'fail',
            label:"İPTAL EDİLDİ"
        },
        price:199,
        deliveryInformation: {
            toBeDeliveredName:"Kerem AKA",
            toBeDeliveredPhoneNumber:"5321234567",
            toBeDeliveredIdentityNumber:"12345678912",
            toBeDeliveredAddress:"Koru, No:4 North Star iş Merkezi Kat:6 Daire:11, Ahmet Taner Kışlalı Cd., 06810 Çankaya/Ankara"
        }
    },
]