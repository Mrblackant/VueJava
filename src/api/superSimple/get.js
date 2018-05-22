import request from '@/utils/request.js'

export function baseInfo(data) {//事先规定好对应的接口 页面一加载就进行的渲染
  console.log('你get请求所带的参数:')
  console.log(data)
  return request({
    url: '/baseInfo',
    method: 'get',
    params:data
  })
}