import request from '@/utils/request'
export function apiThanhtoan(data) {
    return request({
      url: '/order/payment',
      method: 'post',
      data
    })
  }
  export function apiThanhtoanSS(data) {
    return request({
      url: '/order/paymentSS',
      method: 'post',
      data
    })
  }