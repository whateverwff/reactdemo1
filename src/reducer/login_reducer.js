import actionType from "../actions/actionType";

const userinfo = JSON.parse(window.localStorage.getItem("userinfo")) || JSON.parse(window.sessionStorage.getItem("userinfo"));
const initState = {
    remeberme:false,
    loginloading:false,
    ...userinfo
}

export default (state = initState ,action) => {
    switch (action.type) {
        case actionType.START_LOGIN:
            return {
                ...state,
                loginloading: action.payload.loginloading
            }
        case actionType.LOGIN_SUCCESS:
            return{
                ...state,
                ...action.payload.userinfo,
                loginloading: false,
                islogin:true
            }
        case actionType.LOGIN_ERR:
            return{
                islogin:false,
                username:'',
                psd:'',
                remeberme:false,
                loginloading: false
            }
        default:
            return state;
    }
}