import axios from 'axios'
export function request (config) {
  const instance = axios.create({
    baseURL: 'https://qc5abu.fn.thelarkcloud.com/',
    timeout: 6 * 1000
  })
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log('请求错误' + err)
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data ? res.data : res
  }, err => {
    console.log('响应错误' + err)
  })
  return instance(config)
}
