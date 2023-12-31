import request from '@/utils/request'
import moment from 'moment'

// const baseURL = process.env.VUE_APP_BASE_API_STOCK

export function getIndexVietnam(query) {
  return request({
    url: 'vimo/chiso-index-vn',
    methods: 'get',
    params: query
  })
}

export function getIndexWorld(query) {
  return request({
    url: 'vimo/chiso-thegioi',
    methods: 'get',
    params: query
  })
}

export function getListTopStocks(query) {
  return request({
    url: 'vimo/top-10-cophieu',
    methods: 'get',
    params: query
  })
}

export function getListTopAccess(query) {
  return request({
    url: 'vimo/top-10-truycap',
    methods: 'get',
    params: query
  })
}

export function getValuation() {
  return request({
    url: 'vimo/dinh-gia-index',
    methods: 'get'
  })
}

export function getListForeigns(query) {
  return request({
    url: 'vimo/khoi-ngoai',
    method: 'get',
    params: query
  })
}

export function getIndexIntradayHistories(floor) {
  const now = new Date()
  const day = now.getDay()
  let date
  if (day === 6 || day === 0) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2)
    date = moment(d).format('YYYY-MM-DD')
  } else {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
    date = moment(d).format('YYYY-MM-DD')
  }
  return request({
    url: `https://api-finfo.vndirect.com.vn/v4/index_intraday_histories?sort=time:asc&q=code:${floor}~tradingDate:${date}&fields=tradingDate_Time,accumulatedVal&size=100000`,
    method: 'get'
  })
}

export function getIndexIntradayLastest(floor) {
  return request({
    url: `https://api-finfo.vndirect.com.vn/v4/index_intraday_latest?sort=time:asc&q=code:${floor}&fields=tradingDate_Time,accumulatedVal&size=100000`,
    method: 'get'
  })
}

export function getGoods(query) {
  return request({
    url: 'vimo/hang-hoa',
    method: 'get',
    params: query
  })
}

export function getMarketWidth(query) {
  return request({
    url: 'vimo/dorong-thitruong',
    method: 'get',
    params: query
  })
}

export function getMarketLeader(query) {
  return request({
    url: 'vimo/dan-dat-thi-truong',
    method: 'get',
    params: query
  })
}

export function getForeignChart() {
  return request({
    url: 'vimo/dienbien-khoingoai',
    method: 'get'
  })
}

export function getMarketLiquidity(query) {
  return request({
    url: 'vimo/thanhkhoan-thitruong',
    method: 'get',
    params: query
  })
}

export function getPropTradingChart(query) {
  return request({
    url: 'vimo/giaodich-tudoanh',
    method: 'get',
    params: query
  })
}

export function getTopPropTrading(query) {
  return request({
    url: 'vimo/top-tudoanh',
    method: 'get',
    params: query
  })
}

export function getMapMarket(query) {
  return request({
    url: 'vimo/bando-thitruong',
    method: 'get',
    params: query
  })
}

export function getDataMacro(query) {
  return request({
    url: 'vimo/vietstock/dulieu-vimo',
    method: 'get',
    params: query
  })
}

export function getMacroOverviewChart(query) {
  return request({
    url: 'vimo/vietstock/macrooverviewchart',
    method: 'get',
    params: query
  })
}

export function getFinancialIndex(query) {
  return request({
    url: 'vimo/vietstock/dulieu-tigia',
    method: 'get',
    params: query
  })
}

export function getIndustryIndex(query) {
  return request({
    url: 'vimo/vietstock/chi-so-nganh',
    method: 'get',
    params: query
  })
}

export function getTradingResult(query) {
  return request({
    url: 'vimo/vietstock/thong-ke-gia',
    method: 'get',
    params: query
  })
}

export function getTradingResultStock(query) {
  return request({
    url: 'vimo/vietstock/KQGDThongKeGiaStockPaging',
    method: 'get',
    params: query
  })
}

export function getListStock(query) {
  return request({
    url: 'vimo/vietstock/stocklist',
    method: 'get',
    params: query
  })
}

export function getBusinessResult(query) {
  return request({
    url: 'vimo/vietstock/ketqua-kinhdoanh',
    method: 'get',
    params: query
  })
}

export function getTradingInternal(query) {
  return request({
    url: 'vimo/vietstock/giao-dich-noi-bo',
    method: 'get',
    params: query
  })
}

export function getNews(query) {
  return request({
    url: 'vimo/vietstock/moi-cap-nhat',
    method: 'get',
    params: query
  })
}
