import { http } from '@/services'

export async function newAccidentReport(data) {
  return http.post('/new-accident', JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.data)
}