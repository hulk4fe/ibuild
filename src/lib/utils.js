const typeOf = obj => {
  const toString$ = {}.toString
  return toString$.call(obj).slice(8, -1)
}
const isObject = obj => {
  return typeOf(obj) === 'Object'
}
const isArray = obj => {
  return typeOf(obj) === 'Array'
}
const isFuntion = obj => {
  return typeOf(obj) === 'Function'
}
const print = (module = '', ...msg) => {
  /* eslint no-console: ["error", { allow: ["info", "warn"] }] */
  msg = msg.map(el => {
    if (isObject(el) || isArray(el)) {
      return JSON.stringify(el)
    } else if (isFuntion(el)) {
      return el.toString()
    } else {
      return `${el}`
    }
  })
  console.info('ibuild', module, `${msg.join(' ')}`)
}

module.exports = {
  print,
  isObject,
  isArray,
  isFuntion,
}
