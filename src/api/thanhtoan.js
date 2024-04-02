import request from '@/utils/request'
export function apiThanhtoan(query) {
    return request({
      url: '/order',
      method: 'post',
      data: query
    })
  }