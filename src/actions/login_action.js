import actionType from "./actionType";


const startlogin = () => {
    return {
        type:actionType.START_LOGIN,
        payload:{
            loginloading:true
        }
    }
}
const loginsuc = (userinfo) => {
    return {
        type:actionType.LOGIN_SUCCESS,
        payload:{
            userinfo
        }
    }
}
const loginerr = () => {
    return {
        type:actionType.LOGIN_ERR,
        payload:{
            loginloading:false
        }
    }
}

export const loginrequest = (userinfo) =>{
    return dispath =>{
        dispath(startlogin());
        setTimeout(function () {
            userinfo.islogin = true;
            if(userinfo.remember){
                window.localStorage.setItem("userinfo",JSON.stringify(userinfo))
            }else{
                window.sessionStorage.setItem("userinfo",JSON.stringify(userinfo))
            }
            dispath(loginsuc(userinfo))
        },2000)
    }
}
export const loginexit = () =>{
    return dispath => {
        window.localStorage.removeItem("userinfo");
        window.sessionStorage.removeItem("userinfo");
        dispath(loginerr())
    }
}