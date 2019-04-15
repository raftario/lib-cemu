'use strict'

const Game = require('../../classes').Game

module.exports = (name, version, dlcVersion, path, id, code, publisherCode, publisher, playTime, lastPlayed) => {
  return new Game(name, version, dlcVersion, path, id, code, publisherCode, publisher, playTime, lastPlayed)
}
