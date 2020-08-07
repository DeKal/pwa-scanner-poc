import axios, { AxiosResponse } from 'axios'

const get = (api: string) => {
  return axios.get(`${process.env.REACT_APP_API_END_POINT}${api}`)
}

export const fetchUser = <T>(userId: string): Promise<AxiosResponse<T>> => {
  return get(`/api/users/${userId}`)
}
export const fetchProduct = <T>(
  barcodeId: string
): Promise<AxiosResponse<T>> => {
  return get(`/api/products/${barcodeId}`)
}
