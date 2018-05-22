
import request from '@/utils/request.js'

export function inp(query) {//简单的input提交
  return request({
    url: '/simpleInp',
    method: 'post',
    data: query
  })
}
export function formpost(query) {//简单的表单提交
  return request({
    url: '/simpleform',
    method: 'post',
    data: query
  })
}
