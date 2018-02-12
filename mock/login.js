import { API_PREFIX } from '../src/utils/constant'
import USERS_MAP from './USERS.json'
export default {
  [`POST ${API_PREFIX}/login`](req, res) {
    const { username, password } = req.body
    const user = USERS_MAP.find(user => user.account === username)
    if (!user) {
      res.json({ code: -1, message: '此用户不存在' })
    } else if (password === user.password) {
      console.log(user);
      res.json({
        code: 1,
        data: { roles: user.roles, token: 'tttttt' },
        message: 'ok'
      })
    } else {
      res.json({ code: -1, message: '密码错误!' })
    }
  }
};
