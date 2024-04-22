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
export function GetHtml(data) {
  return request({
    url: 'vimo/get-html',
    method: 'get',
    params: data
  })
}
export function getListIndi(data) {
  return request({
    url: 'data/search-indicator',
    method: 'get',
    params: data
  })
}
export function getDetailIndi(data) {
  return request({
    url: 'data/get-detail-indicator',
    method: 'get',
    params: data
  })
}
export function convertIndi(data) {
  return request({
    url: 'data/convert-indicator',
    method: 'post',
    params: data
  })
}