import request from '@/utils/request'

export function fetchTest() {
  return request({
    url: '/JSON',
    method: 'get'
  })
}
