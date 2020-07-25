import { initialOrderData } from '../../utils/initial-app-data'
import { faLiraSign, faStore } from '@fortawesome/free-solid-svg-icons'

type Action = {
    type: string,
    payload: any
}

type SideBarItemChild = {
    name:string,
    path:string
}

type SideBarItem = {
    id:number,
    sideBarItemTitle:string,
    icon:any,
    sideBarItemChildren: SideBarItemChild[]
}

const initialSideBarItems : SideBarItem[] = [
    {
        id:1,
        sideBarItemTitle: "Satışlar",
        icon:faLiraSign,
        sideBarItemChildren: [
            {
            name:"Pazaryeri",
            path:"/salesmarket",
            },
            {
            name:"Perakende",
            path:"/perakende",
            },
            {
            name:"Toptan Satışlar",
            path:"/toptan-satislar"
            },
            {
            name:"Hedefler",
            path:"/hedefler"
            }
        ]
    },
    {
        id:2,
        sideBarItemTitle: "Pazaryeri",
        icon:faStore,
        sideBarItemChildren: [
            {
            name:"Pazaryeri1",
            path:"/pazaryeri1"
            },
            {
            name:"Pazaryeri2",
            path:"/pazaryeri2"
            },
            {
            name:"Pazaryeri3",
            path:"/pazaryeri3"
            }
        ]
    },
]

const initialState = {
    userName:'EKIN',
    userFullName: 'Ekin Mert Temizkan',
    activeSideBarItemId:1,
    sideBarItems:initialSideBarItems,
    currencySymbol:'₺',
    orderDatas: initialOrderData
}

function addZero(i:any) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

const salesState = (state=initialState, action: Action) => {
    switch(action.type){
        case 'SET_ACTIVE_SIDEBAR_ITEM_ID':
            state.activeSideBarItemId = action.payload
            return {
                ...state
            }
        case 'ADD_ORDER_HISTORY_COMMENT':
            let date = new Date()
            state.orderDatas.filter(orderData => orderData.orderDetails.orderId === action.payload.id)[0].orderDetails.orderHistory.splice(0,0,{
                commentedPersonName:state.userFullName,
                orderHistoryEntry:action.payload.comment,
                commentedDate:addZero(date.getHours()).toString()+":"+addZero(date.getMinutes()).toString()
            })
            return {
                ...state
            }
        default:
            return {...state}
    }
} 

export default salesState