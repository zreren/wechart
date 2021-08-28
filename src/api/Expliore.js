import { request } from './request'
export function getExpore(data) {
  return request({
    url: '/getExplore',
    method: 'post',
    data
  })
}
//编辑一面的提交
export function SubEditor (data) {
  return request({
    url: '/subEditor',
    method: 'post',
    data
  })
}

export function getExploreInfo (data) {
  return request({
    url: '/getExploreInfo',
    method: 'post',
    data
  })
}
