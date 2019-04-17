'use strict'

/**
 * Represents an installed game
 * @variation 2
 * @property {string} name - Name of the game
 * @property {string} path - Path to the game directory
 * @property {string} id - Game ID
 * @property {string} code - Game code
 * @property {string} publisherCode - Publisher code
 * @property {string} publisher - Publisher of the game
 * @property {int} version - Version of the game
 * @property {int} dlcVersion - Version of the DLC
 * @property {int} playTime - Seconds spent in game
 * @property {Date} lastPlayed - Last time the game was played
 */
class Game {
  /** @private */
  constructor (name, path, id, code, publisherCode, publisher, version, dlcVersion, playTime, lastPlayed) {
    this.name = name
    this.path = path
    this.id = id
    this.code = code
    this.publisherCode = publisherCode
    this.publisher = publisher
    this.version = version
    this.dlcVersion = dlcVersion
    this.playTime = playTime
    this.lastPlayed = new Date(lastPlayed * 1000)
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
}

module.exports = Game
