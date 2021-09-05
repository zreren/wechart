import { request } from '../api/request'


export function shareSave(data) {
  return request({
    url: '/shareSave',
    method: 'post',
    data
  })
}