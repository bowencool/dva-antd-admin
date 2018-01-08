import { login } from '../services/login';


export default {
  namespace: 'login',
  state: {
    role: null,
    token: null,
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *login({ payload }, { call, put }) {
      const res = yield call(login, payload)
      yield put({ type: 'save', payload: res.data.data })
    }
  },
};
