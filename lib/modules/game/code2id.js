'use strict'

/**
 * Convert a code and a publisher code into a game ID
 * @param {string} code
 * @param {string} publisherCode
 * @return {string}
 * @memberOf module:game
 */
function code2id (code, publisherCode) {
  let id = code.slice(-4)
  id += publisherCode.slice(-2)
  return id
}

module.exports = code2id
