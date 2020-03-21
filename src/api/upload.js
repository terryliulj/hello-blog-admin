import { axios, apiBaseUrl } from '@/utils/request'

export const baseUrl = apiBaseUrl

export function uploadFile (data) {
  return axios({
    url: '/file/file/v1/upload',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: data
  })
}
