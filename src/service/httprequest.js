import axios from "axios"
import {baseURL} from "./config"

export const httprequest = axios.create({
    baseURL
})


httprequest.interceptors.request.use(config => {
    return config;
})


httprequest.interceptors.response.use(
    resp => {
        return resp
    },
    error =>{
        return Promise.reject(error)
    }
)