import axios, {AxiosRequestConfig, AxiosResponse} from "axios";


const onReqSuccess = (config: AxiosRequestConfig) => ({...config})

const onReqError = (error: Error) => Promise.reject(error);

const onResSuccess = (response: AxiosResponse) => (response.data);

const onResError = (error: Error) => Promise.reject(error);

const AuthApiConfig = axios.create({
    baseURL: 'http://localhost:8082/api/v1',
    withCredentials: true,
})

AuthApiConfig.interceptors.request.use(onReqSuccess, onReqError);
AuthApiConfig.interceptors.response.use(onResSuccess, onResError);

export {AuthApiConfig}