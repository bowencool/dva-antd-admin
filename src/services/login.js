import request from '../utils/request';
// import { API_PREFIX } from '../utils/constant'

export function login(data) {
  // return request(`${API_PREFIX}/login`, {
  return request('/login', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
