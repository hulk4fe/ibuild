const {convertType} = require('./lib/tool')
const {print} = require('./lib/utils')

// beta: local develop mode, default false
// type: h5 is runing h5 build
const ibuild = ({type = '', beta = false}) => {
  print('entry', type, beta)
  if (beta) {
    const env = process.argv.slice(2)
    convertType(env[0] || '', {filename: 'test'})
  } else {
    convertType(type || '')
  }
}

module.exports = ibuild
