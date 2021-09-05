import { request } from '../api/request'


export default function signUp(data) {
  return request({
    url: '/signUp',
    method: 'post',
    data
  })
}