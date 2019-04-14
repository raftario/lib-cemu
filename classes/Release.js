'use strict'

module.exports = class Release {
  // version
  // download
  // changelog

  constructor (version) {
    this.version = version
    this.download = `http://cemu.info/releases/cemu_${version}.zip`
    this.changelog = `http://cemu.info/changelog/cemu_${version}.txt`
  }
}
