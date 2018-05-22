// 封装axios请求，官网：https://www.npmjs.com/package/axios,axios还可以同时处理多个接口请求，这里先不做介绍
// params是添加到url的请求字符串中的，用于get请求,例如shinyway.com?key=params
// 而data是添加到请求体（body）中的， 用于post请求,传递参数
import axios from 'axios'
// import store from '@/store/index'
import qs from 'qs' // node.js的产物,序列化请求数据，视服务端的要求需不需要,暂且先用
import router from '@/router' // 用于在判断错误时的重定向页面，例如404页面等
// import { getToken } from '@/utils/auth'
import { Message, Loading } from 'element-ui'

// baseurl
const BASE_URL="https://easy-mock.com/mock/5a5da330d9b48c260cb42ca8/example"
// 全局loadding
var loadingInstance

// axiso的一些基础参数配置,
const $http = axios.create({
  baseURL: BASE_URL, // 配置在config/prod.env里的baseurl
  timeout: 5000 // 超时时间
})
console.log(BASE_URL)
// 传参拦截器
$http.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    // }
    // 打开loadding
    loadingInstance = Loading.service({
      lock: true,
      text: '数据加载中，请稍后...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })

    // 判断为post请求，序列化传来的参数
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      config.data = qs.stringify(config.data)
    }
    return config
  }, error => {
    // 处理错误信息
    loadingInstance.close()
    Message.error('请求错误')
    return Promise.reject(error)
  })

// 响应拦截器
$http.interceptors.response.use(res => {
  // 请求成功时要做的处理,例如判空等
  loadingInstance.close()
  //   1.判空
  if (res.data === '' || res.data.length === 0 || res.data === 'undefined' || res.data === undefined) {
    Message.error('后台传来的data为空/为undefined')
  }
  return res.data
}, error => {
  // 请求错误时做些事(接口错误、超时等)
  // 关闭loadding
  loadingInstance.close()
  console.log(error) // 打开控制台，可以看到error包含了几个对象:message, config, code, request, response,可以拿来请求超时等问题

  //  1.判断请求超时
  if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
    Message.error('根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案')
    // return $http.request(originalRequest);//例如再重复请求一次
  }
  //  2.需要重定向到错误页面
  const errorInfo = error.response
  console.log(errorInfo)
  if (errorInfo) {
    // error =errorInfo.data//页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
    if (errorInfo.status === 403) {
      router.push({
        path: '/error/403'
      })
    }
    // if (errorInfo.status === 500) {
    //   router.push({
    //     path: "/error/500"
    //   });
    // }
    // if (errorInfo.status === 502) {
    //   router.push({
    //     path: "/error/502"
    //   });
    // }
    // if (errorInfo.status === 404) {
    //   router.push({
    //     path: "/error/404"
    //   });
    // }
  }
  return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
})
export default $http
