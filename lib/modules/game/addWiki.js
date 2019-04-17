'use strict'

const GameWiki = require('../../classes').GameWiki

/**
 * Convert a Game into a GameWiki
 * @param {Game(2)} game - Game to convert
 * @return {GameWiki}
 * @memberOf module:game
 */
function addWiki (game) {
  return new GameWiki(
    game.name,
    game.path,
    game.id,
    game.code,
    game.publisherCode,
    game.publisher,
    game.version,
    game.dlcVersion,
    game.playTime,
    game.lastPlayed.getTime() / 1000
  )
}

module.exports = addWiki
