'use strict'

const Release = require('./Release')

/**
 * Represents an installed Cemu release
 * @extends Release(2)
 * @property {string} path - Installation folder path
 * @property {array} games - Installed games
 */
class ReleaseInstall extends Release {
  /** @private */
  constructor (version, path, games) {
    super(version)
    this.path = path
    this.games = games
  }
}

module.exports = ReleaseInstall
