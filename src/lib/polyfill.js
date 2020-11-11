/* eslint-disable babel/no-invalid-this */
/* eslint-disable func-names */
/* eslint-disable no-bitwise */
/* eslint-disable no-extend-native */
const _indexOf = function (obj) {
  return !!~this.indexOf(obj)
}
if (Array.prototype.have$ === undefined) {
  Object.defineProperty(Array.prototype, 'have$', {
    value: _indexOf,
    enumerable: false,
    writable: false,
    configurable: false,
  })
}
if (String.prototype.have$ === undefined) {
  Object.defineProperty(String.prototype, 'have$', {
    value: _indexOf,
    enumerable: false,
    writable: false,
    configurable: false,
  })
}
