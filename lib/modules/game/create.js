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
 * @return {Game(2)}
 * @memberOf module:game
 */
function create (name, path, id, code, publisherCode, publisher, version = 0, dlcVersion = 0, playTime = 0, lastPlayed = 0) {
  return new Game(name, path, id, code, publisherCode, publisher, version, dlcVersion, playTime, lastPlayed)
}

module.exports = create
