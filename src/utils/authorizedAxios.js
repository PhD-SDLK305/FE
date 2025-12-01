import axios from 'axios'
import { handleToastMessage } from './toasts'
import { handleLogoutAPI, handleRefreshTokenAPI } from '../apis'

let authorizedAxiosInstance = axios.create()

authorizedAxiosInstance.defaults.timeout = 1000 * 60 * 10
authorizedAxiosInstance.defaults.withCredentials = true // tự động đính kèm gửi cookie mỗi lần gửi requests

// Add a request interceptor: can thiệp vào giữa các requests API
authorizedAxiosInstance.interceptors.request.use((config) => {
  // Do something before request is sent
  // const accessToken = localStorage.getItem('accessToken')
  // if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
},
{ synchronous: true, runWhen: () => true })

let refreshTokenPromise = null
// Add a response interceptor : can thiệp vào giữa các repsponse API
authorizedAxiosInstance.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (error.response.status == 401) handleLogoutAPI().then(() => {
    location.href = '/signin'
  })
  const originalRequests = error.config
  if (error.response.status === 410 && originalRequests) {
    if (!refreshTokenPromise) {
      refreshTokenPromise = handleRefreshTokenAPI().then(() => {
        /**
         * cho local storage
         *  */
        // localStorage.setItem('accessToken', res.data.accessToken)
        // authorizedAxiosInstance.defaults.headers.Authorization = `Bearer ${res.data.accessToken}`
        /**
         * cho local storage
         *  */
      }).catch(() => {
        handleLogoutAPI().then(() => {
          location.href = '/signin'
        })
        return Promise.reject(error)
      })
        .finally(() => refreshTokenPromise = null)
    }
    return refreshTokenPromise.then(() => {
      return authorizedAxiosInstance(originalRequests) // goi lai cac api ban dau bi loi
    })
  }
  handleToastMessage(error.response.data.message, 'error')
})

export default authorizedAxiosInstance