import {
    service,
    service1
} from "./service"


const httpservice = (url,data = {},method = "POST") => {
    return service.post(url,data)
}
const post = (url,data) => {
    return service1.post(url,data);
}



//登录
export const login = (data) => {
    return  service1("/login",data);
}