const {join} = require('path')
const {
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} = require('fs')
const {transformFileSync} = require('@babel/core')

const travelDirSync = (dir, outdir, cb) => {
  readdirSync(dir).forEach(file => {
    const pathname = join(dir, file)
    const outname = join(outdir, file)
    if (statSync(pathname).isDirectory()) {
      mkdirSync(outname)
      travelDirSync(pathname, outname, cb)
    } else {
      cb(pathname, outname, file)
    }
  })
}

const transformFiles = file => {
  return transformFileSync(file, {
    babelrc: false,
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime'],
  }).code
}

module.exports = (source, output) => {
  if (!existsSync(output)) {
    mkdirSync(output)
  }
  travelDirSync(source, output, (pathname, outname, file) => {
    if (file.indexOf('.scss') === -1) {
      const result = transformFiles(pathname)
      writeFileSync(outname, result)
    } else {
      writeFileSync(outname, readFileSync(pathname))
    }
  })
}
