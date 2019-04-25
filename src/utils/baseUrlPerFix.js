/**
 * BASE PER FIX URL
 */
const baseUrl = {
    mock: 'http://47.105.146.25:3000/mock/79',
    prod: 'http://47.105.146.25:6002',
    dev: 'http://192.168.0.188:5001'
  }
  //
  // export const BASE_PER_FIX_URL = process.env.NODE_ENV === 'production' ? baseUrl.prod : baseUrl.dev
  // export const BASE_PER_FIX_URL = baseUrl.tms
  
  export const BASE_PER_FIX_URL = baseUrl.prod
  