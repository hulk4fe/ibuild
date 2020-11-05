const path = require('path')
const rimraf = require('rimraf')
const tansform = require('./transform')

const parseH5 = (param = {}) => {
  const {input, output} = param
  const workDIr = process.cwd()
  const inp = path.join(workDIr, input)
  const oup = path.join(workDIr, output)
  rimraf.sync(oup)
  tansform(inp, oup)
}
const mapAction = {
  h5: parseH5,
}

const convertType = param => {
  const {mode} = param
  switch (mode) {
    case 'h5':
      mapAction.h5(param)
      break
    default:
  }
}

module.exports = {
  convertType,
}
