import request from '../utils/request';

export default {
  getList() {
    return request('/getSomeList')
  },
  getDetail(account) {
    return request(`/getDetail?account=${account}`)
  }
}
