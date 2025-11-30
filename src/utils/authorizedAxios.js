import axios from 'axios'
import { handleToastMessage } from './toasts'

let authorizedAxiosInstance = axios.create()

authorizedAxiosInstance.defaults.timeout = 1000 * 60 * 10
authorizedAxiosInstance.defaults.withCredentials = true // tự động đính kèm gửi cookie mỗi lần gửi requests

// Add a request interceptor: can thiệp vào giữa các requests API
authorizedAxiosInstance.interceptors.request.use((config) => {
  // Do something before request is sent
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
},
{ synchronous: true, runWhen: () => true })

// Add a response interceptor : can thiệp vào giữa các repsponse API
authorizedAxiosInstance.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  handleToastMessage('Login Success', 'success')
  return response
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  handleToastMessage(error.response.data.message, 'error')
  return Promise.reject(error)
})

export default authorizedAxiosInstance