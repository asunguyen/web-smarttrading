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

export function getListValuation(query) {
  return request({
    url: `https://finfo-api.vndirect.com.vn/v4/ratios/latest?order=reportDate&where=code:${query.floor}&filter=itemCode:81007,81008,81013,81014,81016,81017,82005,82006,82007,82008,81001,81002,81004,81005`,
    method: 'get'
  })
}

export function getListValuationLastYear(query) {
  const lastYear = new Date().getFullYear() - 1
  return request({
    url: `https://finfo-api.vndirect.com.vn/v4/ratios/latest?order=reportDate&where=code:${query.floor}~reportDate:lte:${lastYear}-12-31&filter=itemCode:81007,81008,81013,81014,81016,81017,82005,82006,82007,82008,81001,81002,81004,81005`,
    method: 'get'
  })
}

export function getListForeigns(query) {
  return request({
    url: 'vimo/khoi-ngoai',
    method: 'get',
    params: query
  })
}

export function getChangePrices(period) {
  return request({
    url: `https://finfo-api.vndirect.com.vn/v4/change_prices?q=code:VNINDEX,HNX,UPCOM,VN30,VN30F1M~period:${period}`,
    method: 'get'
  })
}

export function getVnMarketPrices(floorCode, period) {
  let date
  const now = new Date()
  switch (period) {
    // case '1D': return ''
    case 'MTD': {
      const d = moment().startOf('month')
      date = moment(d).format('YYYY-MM-DD')
      break
    }
    case 'QTD': {
      const d = moment().startOf('quarter')
      date = moment(d).format('YYYY-MM-DD')
      break
    }
    case 'YTD': {
      const d = new Date(new Date().getFullYear(), 0, 1)
      date = moment(d).format('YYYY-MM-DD')
      break
    }
    case '5D': {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
      date = moment(d).format('YYYY-MM-DD')
      break
    }
    case '1M': {
      const d = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
      date = moment(d).format('YYYY-MM-DD')
      break
    }
    case '3M': {
      const d = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate())
      date = moment(d).format('YYYY-MM-DD')
      break
    }
    case '6M': {
      const d = new Date(now.getFullYear(), now.getMonth() - 6, now.getDate())
      date = moment(d).format('YYYY-MM-DD')
      break
    }
    case '1Y': {
      const d = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
      date = moment(d).format('YYYY-MM-DD')
      break
    }
    default: date = '2023-10-29'
  }
  return request({
    url: `https://finfo-api.vndirect.com.vn/v4/vnmarket_prices?sort=date:desc&size=300&q=code:${floorCode}~date:gte:${date}`,
    method: 'get'
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
    // url: `https://finfo-api.vndirect.com.vn/v4/indexes?q=code:SPOT_GOLDS,GEN1ST_BRENT_OIL,GEN1ST_COTTON2,GEN1ST_RUB_TCM,GEN1ST_SUGAR11,FW3M_COPPER,SPOT_IRON_QINGDAO,HRC_3MM_EXPORT`,
    method: 'get',
    params: query
  })
}

export function getChangePricesGoods() {
  return request({
    url: `https://finfo-api.vndirect.com.vn/v4/change_prices?q=period:1D~code:SPOT_GOLDS,GEN1ST_BRENT_OIL,GEN1ST_COTTON2,GEN1ST_RUB_TCM,GEN1ST_SUGAR11,FW3M_COPPER,SPOT_IRON_QINGDAO,HRC_3MM_EXPORT`,
    method: 'get'
  })
}

export function getCurrenciesRate() {
  return request({
    url: `https://finfo-api.vndirect.com.vn/v4/currencies/latest?order=tradingDate&where=locale:VN&filter=code:USD_VND,EUR_VND,CNY_VND,JPY_VND,EUR_USD,USD_JPY,USD_CNY`,
    method: 'get'
  })
}

export function getMarketWidth(floor) {
  return request({
    url: `https://mkw-socket-v2.vndirect.com.vn/mkwsocketv2/gainerslosers?index=${floor}`,
    method: 'get'
  })
}

export function getMarketLeader(query) {
  return request({
    url: 'vimo/dan-dat-thi-truong',
    method: 'get',
    params: query
  })
}

export function getForeign() {
  return request({
    url: `https://finfo-api.vndirect.com.vn/v4/foreigns?sort=tradingDate&q=code:VNINDEX&size=30`,
    method: 'get'
  })
}

export function getForeignChart() {
  return request({
    url: 'vimo/dienbien-khoingoai',
    method: 'get'
  })
}

