import request from '@/utils/request.js'

export function baseInfo() {//事先规定好对应的接口 页面一加载就进行的渲染
  return request({
    url: '/baseInfo',
    method: 'get'
  })
}
export function user() {//事先规定好对应的接口 简单的get请求
  return request({
    url: '/usermessage',
    method: 'get'
  })
}
export function users() {//事先规定好对应的接口 获取数据列表的get请求
  return request({
    url: '/userslist',
    method: 'get'
  })
}
