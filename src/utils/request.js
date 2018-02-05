import fetch from 'dva/fetch';
import { BASE_API, API_PREFIX } from './constant';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function responseInterceptor({ data, code, message }) {
  if (code === 1) {
    return data;
  }

  throw new Error(message);
  // return Promise.reject(new Error(message));
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  /**
   * Do something before send.
   */
  return fetch(BASE_API + API_PREFIX + url, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Token': window.store.token,
    },
    ...options,
  })
    .then(checkStatus)
    .then(response => response.json())
    .then(responseInterceptor)
}
