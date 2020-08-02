import axios, { AxiosResponse } from 'axios'

export const get = <T>(api: string): Promise<AxiosResponse<T>> => {
  return axios.get(`${process.env.REACT_APP_API_END_POINT}${api}`)
}
