import actionType from "./actionType"
import {httprequest} from "../service/httprequest"

//改变标题
export const changeinformtitle = (title) => {
    return {
        type: actionType.CHANGE_INFORM_TITLE,
        payload: {
            title: title
        }
    }
}
//异步改变标题actions
export const changeinformtitleAsync = (title) => {
    return dispatch => {
        setTimeout(function () {
            dispatch(changeinformtitle(title))
        }, 2000)
    }
}
//全部已读
export const setAllRead = () => {
    return dispatch => {
        httprequest.get("/student/setreadstates?cid="+ '')
            .then(resp => {
                dispatch(getList())
            }, err => {

            })
    }
}
//通过id设置已读状态
export const setReadById = (cid) => {
    return dispatch => {
        httprequest.get("/student/setreadstates?cid=" + cid)
            .then(resp => {
                dispatch(getList())
            }, err => {

            })
    }
}

//获取列表
export const getList = () => {
    return dispatch => {
        httprequest.get("/student/query")
            .then(resp => {
                dispatch(setList(resp.data))
            }, err => {

            })
    }
}

//设置默认列表数据
const setList = (list) => {
    return {
        type: actionType.SET_LIST,
        payload: {
            list
        }
    }
}