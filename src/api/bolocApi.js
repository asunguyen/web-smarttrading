import request from '@/utils/request'
import moment from 'moment'

export function bolocSearch(data) {
    return request({
      url: 'vimo/chiso-index-vn',
      methods: 'post',
      data: data
    })
  }