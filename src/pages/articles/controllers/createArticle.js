import { http } from '@/services'
import qs from 'qs'

export async function createArticle(data) {
  return http.post('/new-article', qs.stringify(data, { indices: false }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*'
    }
  }).then((res) => res.data)
}