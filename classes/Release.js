'use strict'

/**
 * Represents a Cemu release
 * @property {string} version - Version
 * @property {url} download - Download link
 * @property {url} changelog - Changelog link
 */
class Release {
  /** @private */
  constructor (version) {
    this.version = version
    this.download = `http://cemu.info/releases/cemu_${version}.zip`
    this.changelog = `http://cemu.info/changelog/cemu_${version}.txt`
  }
}

module.exports = Release
