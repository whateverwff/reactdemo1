import actionType from "./actionType"

//改变标题
export const changeinformtitle = (title) => {
    return {
        type:actionType.CHANGE_INFORM_TITLE,
        payload:{
            title:title
        }
    }
}
//异步改变标题actions
export const changeinformtitleAsync = (title) => {
    return dispatch => {
        setTimeout(function(){
            dispatch(changeinformtitle(title))
        },2000)
    }
}
//全部已读
export const setAllRead = () => {
    return {
        type:actionType.SET_ALL_READ
    }
}
//通过id设置已读状态
export const setReadById = (id) => {
    return {
        type:actionType.SET_READ_BY_ID,
        payload:{
            id:id
        }
    }
}