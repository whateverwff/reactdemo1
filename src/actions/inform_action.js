import actionType from "./actionType"

export const changeinformtitle = (title) => {
    return {
        type:actionType.CHANGE_INFORM_TITLE,
        payload:{
            title:title
        }
    }
}
//异步actions
export const changeinformtitleAsync = (title) => {
    return dispatch => {
        setTimeout(function(){
            dispatch(changeinformtitle(title))
        },2000)
    }
}