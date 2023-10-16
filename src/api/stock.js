import request from '@/utils/request'

const baseURL = process.env.VUE_APP_BASE_API_STOCK

export function getListSecurities(query) {
  return request({
    url: `${baseURL}/Securities`,
    method: 'get',
    params: query
  })
}

export function getSecuritiesDetail(query) {
  return request({
    url: `${baseURL}/SecuritiesDetails`,
    method: 'get',
    params: query
  })
}
