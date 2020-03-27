import {
    Login,
    Register,
    Tables,
    List,
    Inform,
    Center,
    ChooseCourse
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
    pathname:"/admin/inform",
    component:Inform,
    subnavtitle:"我的课程"
},{
    pathname:"/admin/addcourse",
    component:ChooseCourse,
    subnavtitle:"选择课程"
},{
    pathname:"/admin/tables",
    component:Tables,
    subnavtitle:"表格"
},{
    pathname:"/admin/list",
    component:List,
    subnavtitle:"列表"
},{
    pathname:"/admin/center",
    component:Center
}]