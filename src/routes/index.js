const ALL_ROUTES = {}

function importAll(r) {
  r.keys().forEach((key) => {
    ALL_ROUTES[key.match(/^\.\/([A-Z]\w*)\.js$/)[1]] = r(key)
  })
}

importAll(require.context('', false, /[A-Z]\w*\.js$/))
// console.log(ALL_ROUTES);
export default ALL_ROUTES
