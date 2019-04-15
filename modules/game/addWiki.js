'use strict'

const GameWiki = require('../../classes').GameWiki

/**
 * Convert a Game into a GameWiki
 * @param {Game} game
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
    game.lastPlayed
  )
}

module.exports = addWiki
