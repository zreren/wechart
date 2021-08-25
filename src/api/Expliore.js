import { request } from './request'
export function getExpore() {
  return request({
    url: '/getExplore',
    method: 'post',
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

export function getExploreInfo () {
  return request({
    url: '/getExploreInfo',
    method: 'post'
  })
}
