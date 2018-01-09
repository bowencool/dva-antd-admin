import Cookies from 'js-cookie';
import { routerRedux } from 'dva/router';
import { login } from '../services/login';

export default {
  namespace: 'login',
  state: {
    role: Cookies.get('role'),
    token: Cookies.get('token'),
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    clear() {
      return { role: null, token: null }
    }
  },
  effects: {
    *login({ payload }, { call, put }) {
      const res = yield call(login, payload)
      yield put({ type: 'save', payload: res })
      Cookies.set('role', res.role)
      Cookies.set('token', res.token)
      yield put(routerRedux.push('/dashboard'))
    },
    *logout(action, { put }) {
      Cookies.remove('role')
      Cookies.remove('token')
      yield put({ type: 'clear' })
      yield put(routerRedux.push('/login'))
    }
  },
};
