import authorizedAxiosInstance from '../utils/authorizedAxios'
import { API_ROOT } from '../utils/constants'

export const handleLogoutAPI = async () => {
  localStorage.clear()
  return await authorizedAxiosInstance.delete(`${API_ROOT}/v1/users/logout`)
}

export const handleRefreshTokenAPI = async () => {
  return await authorizedAxiosInstance.get(`${API_ROOT}/v1/users/refresh_token`)
}


export const handleVerifyEmailAPI = async (payload) => {
  return await authorizedAxiosInstance.put(`${API_ROOT}/v1/users/verify`, payload)
}
