/**
 *
 * Instantiate and configure axios
 *
 * @note consider adding to prototype
 * Vue.prototype.$http = http
 *
 */
import qs from 'qs'
import axios from 'axios'
import { localStoreWorker } from './local-storage'
import { apiBaseUrl } from '@/environment'

const config = {
  baseURL: apiBaseUrl,
  // validateStatus: (status) => (status >= 200 && status < 300),
  paramsSerializer: (params) => qs.stringify(params, { indices: false })
}

const http = axios.create(config)

/**
 * user auth interceptor
 */
const authInterceptor = (config) => {
  const token = localStoreWorker.get('wh2o-admin-auth-token')

  if (token) {
    config.headers.Authorization = `${token}`
  }

  return config
}

http.interceptors.request.use(authInterceptor)
http.interceptors.response.use(
  (response) => response,
  (error) =>
    /** Do something with response error */
    Promise.reject(error)
)

export { http }