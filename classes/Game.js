'use strict'

/**
 * Represents an installed game
 * @property {string} name - Name of the game
 * @property {path} path - Path to the game directory
 * @property {string} id - Game ID
 * @property {string} code - Game code
 * @property {string} publisherCode - Publisher code
 * @property {string} publisher - Publisher of the game
 * @property {int} version - Version of the game
 * @property {int} dlcVersion - Version of the DLC
 * @property {int} playTime - Seconds spent in game
 * @property {timestamp} lastPlayed - Last time the game was played
 */
class Game {
  /** @private */
  constructor (name, path, id, code, publisherCode, publisher, version = 0, dlcVersion = 0, playTime = 0, lastPlayed = 0) {
    this.name = name
    this.path = path
    this.id = id
    this.code = code
    this.publisherCode = publisherCode
    this.publisher = publisher
    this.version = version
    this.dlcVersion = dlcVersion
    this.playTime = playTime
    this.lastPlayed = lastPlayed
  }

  /**
   * Format the playtime in *h:mm* format
   * @return {string}
   */
  formatPlaytime () {
    let hours = ~~(this.playTime / 3600).toString()
    let minutes = ~~(this.playTime / 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })
    let seconds = (this.playTime % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })
    return `${hours}:${minutes}:${seconds}`
  }

  /**
   * Format the last played time
   * @param {string} [locale]
   * @param {boolean} [utc]
   * @return {string}
   */
  formatLastPlayed (locale = 'en-US', utc = false) {
    let date = new Date(this.lastPlayed * 1000)
    return utc ? date.toLocaleString(locale, { timeZone: 'UTC' }) : date.toLocaleString(locale)
  }
}

module.exports = Game
