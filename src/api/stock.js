import request from '@/utils/request'

// const baseURL = process.env.VUE_APP_BASE_API_STOCK

export function getListTopStocks(query) {
  return request({
    url: `https://finfo-api.vndirect.com.vn/v4/top_stocks?q=index:${query.typeStock}~nmVolumeAvgCr20D:gte:10000~priceChgPctCr1D:${query.type}:0&size=10&sort=${query.sort}`,
    methods: 'get'
  })
}

export function getListValuation(query) {
  return request({
    url: `https://finfo-api.vndirect.com.vn/v4/ratios/latest?order=reportDate&where=code:${query.typeStock}&filter=itemCode:81007,81008,81013,81014,81016,81017,82005,82006,82007,82008,81001,81002,81004,81005`,
    method: 'get'
  })
}

export function getListValuationLastYear(query) {
  const lastYear = new Date().getFullYear() - 1
  return request({
    url: `https://finfo-api.vndirect.com.vn/v4/ratios/latest?order=reportDate&where=code:${query.typeStock}~reportDate:lte:${lastYear}-12-31&filter=itemCode:81007,81008,81013,81014,81016,81017,82005,82006,82007,82008,81001,81002,81004,81005`,
    method: 'get'
  })
}

export function getListForeigns(typeForeign) {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const date = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate()
  return request({
    url: typeForeign === 'buy'
      ? `https://finfo-api.vndirect.com.vn/v4/foreigns?q=type:STOCK,IFC,ETF~netVal:gt:0~tradingDate:${year}-${month}-${date}&sort=tradingDate~netVal:desc&size=10&fields=code,netVal,tradingDate`
      : `https://finfo-api.vndirect.com.vn/v4/foreigns?q=type:STOCK,IFC,ETF~netVal:lt:0~tradingDate:${year}-${month}-${date}&sort=tradingDate~netVal:asc&size=10&fields=code,netVal,tradingDate`,
    method: 'get'
  })
}

