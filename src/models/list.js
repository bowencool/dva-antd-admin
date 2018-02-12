import listService from '../services/list'

export default {
  namespace: 'list',
  state: [],
  reducers: {
    save(state, { payload }) {
      return [...payload]
    },
  },
  effects: {
    *get(action, { call, put }) {
      const res = yield call(listService.getList)
      yield put({ type: 'save', payload: res })
    }
  }
}
