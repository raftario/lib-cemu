'use strict'

const Game = require('../../classes').Game

module.exports = (name, path, id, code, publisherCode, publisher, version, dlcVersion, playTime, lastPlayed) => {
  return new Game(name, path, id, code, publisherCode, publisher, version, dlcVersion, playTime, lastPlayed)
}
