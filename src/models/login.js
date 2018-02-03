import { routerRedux } from 'dva/router';
import { getItem, setItem, removeItem } from '../utils/cookie';
import { login } from '../services/login';

export default {
  namespace: 'login',
  state: {
    roles: JSON.parse(getItem('roles')),
    token: getItem('token'),
  },
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
      const res = yield call(login, payload)
      yield put({ type: 'save', payload: res })
      setItem('roles', JSON.stringify(res.roles))
      setItem('token', res.token)
      yield put(routerRedux.push('/dashboard'))
    },
    *logout(action, { put }) {
      removeItem('roles')
      removeItem('token')
      yield put({ type: 'clear' })
      yield put(routerRedux.push('/login'))
    }
  },
};
