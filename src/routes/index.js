import {
    Login,
    Register
} from "../views"

import {
    Tables,
    List
} from "../components"


//主路由
export const mainRouter = [{
    pathname:"/login",
    component:Login
},{
    pathname:"/register",
    component:Register
}]


//用户路由
export const adminRouter = [{
    pathname:"/admin/list",
    component:List,
    subnavtitle:"列表"
},{
    pathname:"/admin/tables",
    component:Tables,
    subnavtitle:"表格"
}]