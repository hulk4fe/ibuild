const {convertType} = require('./tool')

const ibuild = ({type = ''}) => {
  const env = process.argv.slice(2)
  convertType(type || env[0] || '')
}

module.exports = ibuild
