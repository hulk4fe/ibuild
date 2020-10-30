const path = require('path')
const rimraf = require('rimraf')
const tansform = require('./transform')

const parseH5 = param => {
  const workDIr = process.cwd()
  const {filename = ''} = param
  const source = path.join(workDIr, filename || 'src')
  const output = path.join(workDIr, 'es')
  rimraf.sync(output)
  tansform(source, output)
}
const mapAction = {
  h5: parseH5,
}

const convertType = (type, param) => {
  switch (type) {
    case 'h5':
      mapAction.h5(param)
      break
    default:
  }
}

module.exports = {
  convertType,
}
