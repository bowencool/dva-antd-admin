import { API_PREFIX } from '../src/utils/constant'
import USERS from './USERS.json'

export default {
  [`GET ${API_PREFIX}/getSomeList`](req, res) {
    res.json({ code: 1, data: USERS })
  },
  [`GET ${API_PREFIX}/getDetail`](req, res) {
    // console.log(req.query);
    const user = USERS.find(u => u.account === req.query.account)
    if (user) {
      res.json({ code: 1, data: user })
    } else {
      res.json({ code: -1, message: '没有此用户' })
    }
  }
}
