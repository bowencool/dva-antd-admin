import { API_PREFIX } from '../src/utils/constant'
const USERS_MAP = {
  'admin': {
    roles: ['admin'],
    password: 'admin',
  },
  'guest': {
    roles: ['guest'],
    password: 'guest',
  },
  'pm': {
    roles: ['pm'],
    password: 'pm',
  },
  'ui': {
    roles: ['ui'],
    password: 'ui',
  },
  'dev': {
    roles: ['dev'],
    password: 'dev',
  },
  'qa': {
    roles: ['qa'],
    password: 'qa',
  },
  'bowen': {
    roles: ['dev', 'ui'],
    password: 'bowen',
  },
}
export default {
  [`POST ${API_PREFIX}/login`](req, res) {
    const { username, password } = req.body
    if (password === USERS_MAP[username].password) {
      console.log(USERS_MAP[username]);
      res.json({
        code: 1,
        data: { roles: USERS_MAP[username].roles, token: 'tttttt' },
        message: 'ok'
      })
    } else {
      res.json({ code: -1, message: '密码错误!' })
    }
  }
};
