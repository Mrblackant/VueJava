import request from '@/utils/request.js'

export function table() {//事先规定好对应的接口
  return request({
    url: '/simpletable',
    method: 'get'
  })
}
