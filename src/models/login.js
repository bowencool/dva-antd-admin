import { routerRedux } from 'dva/router';
import Cookie from '../utils/cookie';
import { login } from '../services/login';

const cookieCachedState = {
  roles: JSON.parse(Cookie.getItem('roles')),
  token: Cookie.getItem('token'),
}
window.store = { ...window.store, ...cookieCachedState }

export default {
  namespace: 'login',
  state: cookieCachedState,
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    clear() {
      return { roles: null, token: null }
    }
  },
  effects: {
    *login({ payload }, { call, put }) {
      const { roles, token } = yield call(login, payload)
      yield put({ type: 'save', payload: { roles, token } })
      Cookie.setItem('roles', JSON.stringify(roles))
      Cookie.setItem('token', token)
      window.store = { ...window.store, roles, token }
      yield put(routerRedux.push('/dashboard'))
    },
    *logout(action, { put }) {
      Cookie.removeItem('roles')
      Cookie.removeItem('token')
      window.store = { ...window.store, roles: null, token: null }
      yield put({ type: 'clear' })
      yield put(routerRedux.push('/login'))
    }
  },
};
