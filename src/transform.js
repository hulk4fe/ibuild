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
const sass = require('sass')

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

const transformSass = filename => {
  return sass.renderSync({
    file: filename,
    outputStyle: 'compressed',
  }).css
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
    // todo: scss parser & img parser & jsx parser & es parser ...
    if (file.indexOf('.scss') !== -1) {
      // sass
      const result = transformSass(pathname)
      return writeFileSync(outname.replace('.scss', '.css'), result)
    }
    if (file.indexOf('.js') !== -1) {
      // js
      const result = transformFiles(pathname)
      return writeFileSync(outname, result.replace('.scss', '.css'))
    }
    return writeFileSync(outname, readFileSync(pathname))
  })
}
