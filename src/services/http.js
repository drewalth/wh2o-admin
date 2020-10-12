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
  const userData = JSON.parse(localStoreWorker.get('wh2o-admin-auth'))

  if (userData && userData.token) {
    config.headers.Authorization = `Bearer ${userData.token}`
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
