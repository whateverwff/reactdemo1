import actionType from "../actions/actionType"

const initState = {
    test: "我的通知列表",
    list: [
        
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_LIST:
            return {
                ...state,
                list:action.payload.list
            }
        case actionType.CHANGE_INFORM_TITLE:
            return {
                ...state,
                test: action.payload.title
            }
        case actionType.SET_ALL_READ:
            const newlist = state.list.map(item => {
                item.isread = true;
                return item;
            })
            return {
                ...state,
                list:newlist
            }
        case actionType.SET_READ_BY_ID:
            return {
                ...state,
                list:state.list.map(item => {
                    if(item.cid === action.payload.cid){
                        item.isread = 1;
                    }
                    return item;
                })
            }
        default:
            return state;
    }
}