const {program} = require('commander')
const {print} = require('./lib/utils')
const {convertType} = require('./lib/tool')

// eslint-disable-next-line import/order
const _program = program
  .version(require('../package.json').version)
  .usage(
    `ibuild [options]
  Arguments:
    options  build options 
             -m mode
             -i input
             -o output`,
  )
  .option('-m, --mode <mode>', 'build mode')
  .option('-i, --input <input>', 'input source file entry')
  .option('-o, --output <output>', 'output of bundle')
  .parse(process.argv)

// eslint-disable-next-line consistent-return
const ibuild = () => {
  const {mode = 'h5', input, output} = _program
  print('entry', mode, input, output)
  if (!input || !output)
    return print('error', 'must have input and ouput option')
  convertType({mode, input, output})
}

module.exports = ibuild
