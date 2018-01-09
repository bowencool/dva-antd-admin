const prod = process.env.NODE_DEV === 'production'
// const sit = prod && npm_config_sit
// todo 这里好像不够清晰
export default {
  BASE_API: prod ? '' : '',
  API_PREFIX: '/api',
}
