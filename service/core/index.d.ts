import { AxiosInstance } from 'axios'
import { axiosNinjaInterceptors, axiosNinjaConfig } from './type'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'
export default class AxiosNinja {
  instance: AxiosInstance
  interceptors?: axiosNinjaInterceptors
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: axiosNinjaConfig)
  request<T>(config: axiosNinjaConfig<T>): Promise<T>
  get<T>(config: axiosNinjaConfig<T>): Promise<T>
  post<T>(config: axiosNinjaConfig<T>): Promise<T>
  delete<T>(config: axiosNinjaConfig<T>): Promise<T>
  patch<T>(config: axiosNinjaConfig<T>): Promise<T>
}
