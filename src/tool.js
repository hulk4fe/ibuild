const path = require('path')
const rimraf = require('rimraf')
const tansform = require('./transform')

const parseH5 = () => {
  const workDIr = process.cwd()
  const source = path.join(workDIr, 'src')
  const output = path.join(workDIr, 'es')
  rimraf.sync(output)
  tansform(source, output)
}
const mapAction = {
  h5: parseH5,
}

const convertType = type => {
  switch (type) {
    case 'h5':
      mapAction.h5()
      break
    default:
  }
}

module.exports = {
  convertType,
}
