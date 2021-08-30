import { request } from '../api/request'
export default function judgeExpired(data) {
  return request({
    url: '/judgeExpired',
    method: 'post',
    data
  })
}