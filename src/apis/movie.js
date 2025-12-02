import authorizedAxiosInstance from '../utils/authorizedAxios'
import { API_ROOT } from '../utils/constants'

export const getMovieAPI = async (slug, query) => {
  return await authorizedAxiosInstance.get(`${API_ROOT}/v1/movies/${slug}?query=${query}`)
}