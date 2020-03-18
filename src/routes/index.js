import {
    Login,
    Register,
    Tables,
    List,
    Inform,
    Center
} from "../views"



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
},{
    pathname:"/admin/inform",
    component:Inform,
    subnavtitle:"我的通知"
},{
    pathname:"/admin/center",
    component:Center
}]