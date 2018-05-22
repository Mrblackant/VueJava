import request from '@/utils/request.js'

export function inp(query) {//简单的input提交
  return request({
    url: '/simpleInp',
    method: 'post',
    data: query
  })
}