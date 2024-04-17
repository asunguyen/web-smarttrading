import request from '@/utils/request'
import moment from 'moment'

export function bolocSearch(data) {
  return request({
    url: 'boloc/GetDataByFilter',
    method: 'post',
    data: data
  })
}
export function GetLatestIndices(data) {
  return request({
    url: 'boloc/GetLatestIndices',
    method: 'get',
    params: data
  })
}
export function GetIndexSeries(data) {
  return request({
    url: 'boloc/GetIndexSeries',
    method: 'get',
    params: data
  })
}
