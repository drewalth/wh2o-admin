import { http } from '@/services'
import * as types from '../mutations/mutationTypes'

export default {
  async getProperty(context, data) {
    try {
      context.commit(types.DATA_LOADING, true)

      let requestURL = ''

      if (data.url) {
        requestURL = data.url
      } else {
        requestURL = data
      }

      const result = await http.get(requestURL).then((res) => res.data)

      if (result) {
        context.commit(types.DATA_SUCCESS, result)
      }

    } catch (error) {
      context.commit(types.DATA_ERROR, error)
    } finally {
      context.commit(types.DATA_LOADING, false)
    }
  },
  setProperty(context, data) {
    context.commit(types.SET_DATA, data)
  }
}