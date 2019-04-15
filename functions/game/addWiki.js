'use strict'

const GameWiki = require('../../classes').GameWiki

module.exports = (game) => {
  return new GameWiki(
    game.name,
    game.version,
    game.dlcVersion,
    game.path,
    game.id,
    game.code,
    game.publisherCode,
    game.publisher,
    game.playTime,
    game.lastPlayed
  )
}
