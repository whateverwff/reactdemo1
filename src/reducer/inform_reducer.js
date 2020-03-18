import actionType from "../actions/actionType"

const initState = {
    test:"我的通知列表"
}

export default (state = initState,action) => {
    switch(action.type){
        case actionType.CHANGE_INFORM_TITLE:
            return {
                ...state,
                test:action.payload.title
            }
        default:
            return state;
    }
}