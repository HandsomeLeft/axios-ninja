import axiosNinja from './core'
new axiosNinja({
  baseURL: '',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})
  .get<any>({
    url: 'http://123.207.32.32:8000/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res)
  })
