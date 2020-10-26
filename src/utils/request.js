import axios from 'axios'
import router from '../router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ ease: 'ease', speed: 1000 })
NProgress.configure({ showSpinner: false })
NProgress.configure({ minimum: 0.3 })

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const requestUtil = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: 'http://localhost:25000/',
  // 超时
  timeout: 10000,
  // 携带凭证
  withCredentials: true,
  // 返回值
  responseType: 'json'
})

requestUtil.interceptors.request.use(config => {
  NProgress.start()
  config.headers.common.token = localStorage.getItem('token')
  return config
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

// 配置返回未登录的时候，跳转登录页
requestUtil.interceptors.response.use(
  response => {
    if (response.data.code === 403) {
      router.push({
        path: '/login'
      })
    }
    NProgress.done()
    return response
  },
  error => {
    NProgress.done()
    return Promise.reject(error.response.data)
  }
)
export default requestUtil
