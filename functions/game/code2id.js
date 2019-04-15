'use strict'

module.exports = (code, publisherCode) => {
  let id = code.slice(-4)
  id += publisherCode.slice(-2)
  return id
}
