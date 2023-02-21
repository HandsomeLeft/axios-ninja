import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface axiosNinjaInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface axiosNinjaConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: axiosNinjaInterceptors<T>
  showLoading?: boolean
}
