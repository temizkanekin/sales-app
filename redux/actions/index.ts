export const setActiveSideBarItemId = ( sideBarItemId : number ) => {
    return {
        type: 'SET_ACTIVE_SIDEBAR_ITEM_ID',
        payload: sideBarItemId
    }
}

export const addOrderHistoryComment = ( id:number,comment:string ) => {
    return {
        type: 'ADD_ORDER_HISTORY_COMMENT',
        payload: {
            id:id,
            comment:comment
        }
    }
}