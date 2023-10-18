import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function signup(data) {
  return request({
    url: '/auth/register',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/get-info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function getListCustomer(query) {
  return request({
    url: '/user',
    method: 'get',
    params: query
  })
}

export function getListEmployee(query) {
  return request({
    url: '/user/get-employ',
    method: 'get',
    params: query
  })
}

export function getListLicense(query) {
  return request({
    url: '/license',
    method: 'get',
    params: query
  })
}
