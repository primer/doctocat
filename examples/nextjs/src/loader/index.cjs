function loader(code) {
  const callback = this.async()
  import('./loader.js').then(module => {
    return module.loader.call(this, code, callback)
  }, callback)
}

module.exports = loader
