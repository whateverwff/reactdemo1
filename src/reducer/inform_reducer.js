import actionType from "../actions/actionType"

const initState = {
    test: "我的通知列表",
    list: [
        {
            id: "1",
            title: 'Ant Design Title 1',
            isread: false
        },
        {
            id: "2",
            title: 'Ant Design Title 2',
            isread: true
        },
        {
            id: "3",
            title: 'Ant Design Title 3',
            isread: false
        },
        {
            id: "4",
            title: 'Ant Design Title 4',
            isread: false
        }
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
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
                    if(item.id === action.payload.id){
                        item.isread = true;
                    }
                    return item;
                })
            }
        default:
            return state;
    }
}