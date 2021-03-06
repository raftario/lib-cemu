'use strict'

const fetch = require('node-fetch')

const Game = require('./Game')
const code2id = require('../modules/game/code2id')

/**
 * Represents an installed game and its Cemu wiki entry
 * @extends Game(2)
 * @property {object} wiki - Cemu wiki information
 * @property {int} wiki.pageid - Cemu wiki information
 * @property {string} wiki.title - Cemu wiki page id
 * @property {array} wiki.ids - Game title
 * @property {string} wiki.developer - List of game IDs
 * @property {string} wiki.publisher - Game developer
 * @property {string} wiki.series - Game publisher
 * @property {object} wiki.released - Series the game is part of
 * @property {array} wiki.genre - Release dates of the game
 * @property {array} wiki.modes - Genres of the game
 * @property {array} wiki.input - Play modes of the game
 * @property {string} wiki.rating - Input devices accepted by the game
 */
class GameWiki extends Game {
  /** @private */
  constructor (name, path, id, code, publisherCode, publisher, version, dlcVersion, playTime, lastPlayed) {
    super(name, path, id, code, publisherCode, publisher, version, dlcVersion, playTime, lastPlayed)

    this.wiki = {
      pageid: 'Unknown',
      title: 'Unknown',
      url: 'http://compat.cemu.info/wiki/',
      ids: [code2id(this.code, this.publisherCode)],
      developer: 'Unknown',
      publisher: 'Unknown',
      series: 'Unknown',
      released: { unknown: 'Unknown' },
      genre: ['Unknown'],
      modes: ['Unknown'],
      input: ['Unknown'],
      rating: 'Unknown'
    }
  }

  /**
   * Parse game information from the wiki
   * @param {function} [callback] - Callback, receives an error object if an error occurs
   * @return {Promise}
   */
  parse (callback) {
    function checkStatus (res) {
      if (res.ok) {
        return res
      } else {
        throw new Error(res.statusText)
      }
    }

    return new Promise((resolve, reject) => {
      // Get the wiki pageid from its id
      fetch(`http://compat.cemu.info/w/api.php?action=query&format=json&formatversion=2&titles=${this.wiki.ids[0]}&redirects`)
        .then(checkStatus)
        .then(res => res.json())
        .then(json => {
          if (!json.query.pages[0].missing) {
            this.wiki.pageid = json.query.pages[0].pageid
          }

          // Get the title and other ids from the wiki page
          return fetch(`http://compat.cemu.info/w/api.php?action=query&format=json&formatversion=2&pageids=${this.wiki.pageid}&prop=redirects`)
        })
        .then(checkStatus)
        .then(res => res.json())
        .then(json => {
          if (!json.query.pages[0].missing) {
            this.wiki.title = json.query.pages[0].title
            this.wiki.url += this.wiki.title.replace(/ /g, '_')

            let redirects = json.query.pages[0].redirects
            redirects.forEach(redirect => {
              if (!redirect.title.startsWith(this.wiki.title) && !this.wiki.ids.includes(redirect.title)) {
                this.wiki.ids.push(redirect.title)
              }
            })
          }

          // Get additional info from the wiki page
          return fetch(`http://compat.cemu.info/w/api.php?action=query&format=json&formatversion=2&pageids=${this.wiki.pageid}&prop=revisions&rvprop=content&rvsection=0`)
        })
        .then(checkStatus)
        .then(res => res.json())
        .then(json => {
          if (!json.query.pages[0].missing) {
            let infobox = json.query.pages[0].revisions[0].content

            this.wiki.developer = /(?<=\|developer = ).+?(?=\n)/g.exec(infobox)[0] || this.wiki.developer
            this.wiki.publisher = /(?<=\|publisher = ).+?(?=\n)/g.exec(infobox)[0] || this.wiki.publisher
            this.wiki.series = /(?<=\|series = ).+?(?=\n)/g.exec(infobox)[0] || this.wiki.series

            let released = /(?<=\|released = ).+?(?=\n)/g.exec(infobox)[0]
              .replace(/{{vgrelease\||}}/g, '')
              .split('|') ||
              this.wiki.released
            if (released !== this.wiki.released) {
              this.wiki.released = {}
              released.forEach(rd => {
                rd = rd.split('=')
                if (rd[0] === 'WW') {
                  this.wiki.released.ww = rd[1]
                } else if (rd[0] === 'NA' || rd[0] === 'USA' || rd[0] === 'NTSC-U') {
                  this.wiki.released.na = rd[1]
                } else if (rd[0] === 'EU' || rd[0] === 'PAL') {
                  this.wiki.released.eu = rd[1]
                } else if (rd[0] === 'JP' || rd[0] === 'JAP' || rd[0] === 'NTSC-J') {
                  this.wiki.released.jp = rd[1]
                } else {
                  this.wiki.released.misc += `(${rd[0]}: ${rd[1]})`
                }
              })
            }

            this.wiki.genre = /(?<=\|genre = ).+?(?=\n)/g.exec(infobox)[0].split(', ') || this.wiki.genre
            this.wiki.modes = /(?<=\|modes = ).+?(?=\n)/g.exec(infobox)[0].split(', ') || this.wiki.modes
            this.wiki.input = /(?<=\|input = ).+?(?=\n)/g.exec(infobox)[0].split(', ') || this.wiki.input
            this.wiki.rating = /(?<=\|rating = ).+?(?=\n)/g.exec(infobox)[0] || this.wiki.rating

            if (callback) callback()
            resolve()
          }
        })
        .catch(err => {
          if (callback) callback(err)
          reject(err)
        })
    })
  }
}

module.exports = GameWiki
