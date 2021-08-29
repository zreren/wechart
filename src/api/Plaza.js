import { request } from './request'
export function getPlazaData(data) {
  return request({
    url: '/getPlazaData',
    method: 'post',
    data
  })
}
