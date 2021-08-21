import { request } from './request'
export function getExplioreInfo() {
  return request({
    url: '/getExplore',
    method: 'post',
  })
}
// export function login (data) {
//   return request({
//     url: '/test11111111111111',
//     method: 'post',
//     data
//   })
// }

// export function reguest () {
//   return request({
//     url: '/test11111111111111',
//     method: 'post'
//   })
// }
