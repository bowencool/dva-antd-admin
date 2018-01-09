import { API_PREFIX } from '../src/utils/constant'
const USERS_MAP = {
  'admin': {
    role: 'admin',
    password: 'admin',
  },
  'guest': {
    role: 'guest',
    password: 'guest',
  },
}
export default {
  [`POST ${API_PREFIX}/login`](req, res) {
    const { username, password } = req.body
    if (password === USERS_MAP[username].password) {
      console.log(USERS_MAP[username]);
      res.json({
        code: 1,
        data: { role: USERS_MAP[username].role, token: 'tttttt' },
        message: 'ok'
      })
    } else {
      res.json({ code: -1, message: '密码错误!' })
    }
  }
};
