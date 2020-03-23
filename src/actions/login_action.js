import actionType from "./actionType"
import { httprequest } from "../service/httprequest"
import { message } from "antd"



const startlogin = () => {
    return {
        type: actionType.START_LOGIN,
        payload: {
            loginloading: true
        }
    }
}
const loginsuc = (userinfo) => {
    return {
        type: actionType.LOGIN_SUCCESS,
        payload: {
            userinfo
        }
    }
}
const loginerr = () => {
    return {
        type: actionType.LOGIN_ERR,
        payload: {
            loginloading: false
        }
    }
}

export const loginrequest = (userinfo) => {
    return dispath => {
        dispath(startlogin());
        httprequest.post("/login", userinfo).then(resp => {
            if (resp.data.code === 200) {
                dispath(loginsuc(userinfo))
                userinfo.islogin = true;
                if (userinfo.remember) {
                    window.localStorage.setItem("userinfo", JSON.stringify(userinfo))
                } else {
                    window.sessionStorage.setItem("userinfo", JSON.stringify(userinfo))
                }
            } else {
                dispath(loginerr())
                message.info(resp.data.errorMsg)
            }
        }, error => {
            dispath(loginerr())
            message.info(error.errorMsg)
        })
    }
}
export const loginexit = () => {
    return dispath => {
        window.localStorage.removeItem("userinfo");
        window.sessionStorage.removeItem("userinfo");
        dispath(loginerr())
    }
}