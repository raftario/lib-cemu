'use strict'

const Game = require('../../classes').Game

/**
 * Create a Game
 * @param {string} name
 * @param {string} path
 * @param {string} id
 * @param {string} code
 * @param {string} publisherCode
 * @param {string} publisher
 * @param {int} [version=0]
 * @param {int} [dlcVersion=0]
 * @param {int} [playTime=0]
 * @param {int} [lastPlayed=0]
 * @return {Game}
 * @memberOf module:game
 */
function create (name, path, id, code, publisherCode, publisher, version, dlcVersion, playTime, lastPlayed) {
  return new Game(name, path, id, code, publisherCode, publisher, version, dlcVersion, playTime, lastPlayed)
}

module.exports = create
