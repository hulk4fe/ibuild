const typeOf = obj => {
  return Object.prototype.toString.call(obj)
}
const isObject = obj => {
  return typeOf(obj) === '[object Object]'
}
const isArray = obj => {
  return typeOf(obj) === '[object Array]'
}
const isFuntion = obj => {
  return typeOf(obj) === '[object Function]'
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
