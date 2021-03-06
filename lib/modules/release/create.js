'use strict'

const Release = require('../../classes').Release

/**
 * Create a Release
 * @param {string} version
 * @return {Release(2)}
 * @memberOf module:release
 */
function create (version) {
  return new Release(version)
}

module.exports = create
