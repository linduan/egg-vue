import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'pagoda-mobile'
Vue.use(Toast)

let accessInHead = 'AccessType'
let axioCount = 0 // 计数当前发送中的axioCount数量
const ticket = 'ticket' // 自定义鉴权信息字段
const axio = axios.create({
  // baseURL: 'http://192.168.0.101:7001/',
  baseURL: 'http://192.168.6.209:7001/api/v1'
})

// http发送请求前拦截器
axio.interceptors.request.use(config => {
  // 此处可以用于处理发送请求时的loading状态
  // loading start...
  axioCount++ // 计数http请求数量

  // 配置cookies信息
  config.headers.Accept = 'application/json'
  if (accessInHead) {
    // 将鉴权信息加在cookies头部
    config.headers.ticket = ticket
  } else {
    // 将鉴权信息作为data参数发送
    config.data || (config.data = {})
    Object.assign(config.data, {ticket})
  }
  return config
}, error => Promise.reject(error))

// http请求接受后拦截器
axio.interceptors.response.use(res => {
    axioCount--
    if (!axioCount) {
      // 全部请求回来时结束loading状态
      // loading close...
    }
    // 此处可根据状态做统一处理
    let {status} = res
    if (status === 200) {
        return Promise.resolve(res)
    }
    return Promise.reject(res)
}, error => Promise.reject(error))

// 发送http请求
function requestHandle (params, msg) {
  return new Promise((resolve, reject) => {
    console.log(params)
    axio(params).then(res => {
      let {resCode, data} = res // resCode一般为后台返回执行状态码
      if (resCode === -1000) {
        // 操作失败处理
        // alert('操作失败')
      }
      if (resCode === 0) {
        // 操作成功处理
        // alert('操作成功')
      }
      resolve(data)
    }).catch(err => {
      if (msg) {
        Toast.fail(msg)
        console.log(msg)
      }
      reject(err)
    })
  })
}

// 将url, params={key: val} 转化为 url?key=val的形式
// axios的params处理包含数组的键值对时存在问题：{key: [val, val2]}
function toQueryString (url = '', params = {}) {
  let keys = Object.keys(params)
  if (!keys.length) return url
  let query = keys.map(key => key + '=' + JSON.stringify(params[key]) ).join('&')
  url += url.includes('?') ? query : '?' + query
  return url
}

export default {
  post (url, data = {}, msg) {
    return requestHandle({
      url,
      data,
      method: 'post'
    }, msg)
  },
  get (url, params = {}, msg) {
    return requestHandle({
      url: toQueryString(url, params),
      method: 'get'
    }, msg)
  }
}