# axiosNinja

## 介绍

axiosNinja 包装了 axios 的拦截器,获得了更灵活的拦截器使用方式

## 特性

- 🚀 更轻量的拦截器使用方式
- 🚀 保留 axios 全局特性
- 💪 原生支持 element-plus 加载效果

## 快速上手

### 1.安装

```bash
npm i axios-ninja

```

### 2.引用

```typescript
import axiosNinja from 'axios-ninja'
const config = {
  baseURL: YOUR_URL,
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
}
const axiosNinja = new axiosNinja(config)
axiosNinja.get<any>(
  {
    url: YOUR_URL,
    showLoading: false
  }.then((res) => {
    console.log(res)
  })
)
```
