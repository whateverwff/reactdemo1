import { combineReducers } from "redux"
import infrom from "./inform_reducer"
import login_reducer from "./login_reducer";


export default combineReducers({
    infrom,
    login_reducer
})