import { http } from '@/services'

export async function getUser(uid) {
  return http.get(`/user?uid=${uid}`).then((res) => res.data)
}