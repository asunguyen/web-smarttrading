import request from '@/utils/request'
import moment from 'moment'

export function bolocSearch(data) {
    return request({
      url: 'boloc/GetDataByFilter',
      method: 'post',
      data: data
    })
  }