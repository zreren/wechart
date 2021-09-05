import { request } from '../api/request'


export default function signIn(data) {
  return request({
    url: '/signIn',
    method: 'post',
    data
  })
}