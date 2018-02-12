import request from '../utils/request';

export function login(data) {
  return request('/login', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
