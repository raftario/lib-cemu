'use strict'

module.exports = class Game {
  // name
  // version
  // dlcVersion
  // path
  // id
  // code
  // publisherCode
  // publisher
  // playTime
  // lastPlayed

  constructor (name, version, dlcVersion, path, id, code, publisherCode, publisher, playTime, lastPlayed) {
    this.name = name
    this.version = version
    this.dlcVersion = dlcVersion
    this.path = path
    this.id = id
    this.code = code
    this.publisherCode = publisherCode
    this.publisher = publisher
    this.playTime = playTime
    this.lastPlayed = lastPlayed
  }

  formatPlaytime () {
    let hours = ~~(this.playTime / 3600).toString()
    let minutes = ~~(this.playTime / 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })
    let seconds = (this.playTime % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })
    return `${hours}:${minutes}:${seconds}`
  }

  formatLastPlayed (locale = 'en-US', utc = false) {
    let date = new Date(this.lastPlayed * 1000)
    return utc ? date.toLocaleString(locale, { timeZone: 'UTC' }) : date.toLocaleString(locale)
  }
}
