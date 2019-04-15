'use strict'

const rp = require('request-promise-native')

const Game = require('./Game')
const code2id = require('../functions/game/code2id')

module.exports = class GameWiki extends Game {
  // name
  // version
  // dlcVersion
  // path
  // id
  // code
  // publisherCode
  // publisher
  // playTime
  // lastPlayed
  // wiki

  constructor (name, version, dlcVersion, path, id, code, publisherCode, publisher, playTime, lastPlayed) {
    super(name, version, dlcVersion, path, id, code, publisherCode, publisher, playTime, lastPlayed)

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

  parse (callback) {
    return new Promise((resolve, reject) => {
      let rpOptions = {
        uri: 'http://compat.cemu.info/w/api.php',
        headers: {
          'User-Agent': `lib-cemu-${process.env.VERSION}`
        },
        json: true
      }

      // Get the wiki pageid from its id
      rpOptions.uri = `http://compat.cemu.info/w/api.php?action=query&format=json&formatversion=2&titles=${this.wiki.ids[0]}&redirects`
      rp(rpOptions)
        .then(data => {
          if (!data.query.pages[0].missing) {
            this.wiki.pageid = data.query.pages[0].pageid
          }

          // Get the title and other ids from the wiki page
          rpOptions.uri = `http://compat.cemu.info/w/api.php?action=query&format=json&formatversion=2&pageids=${this.wiki.pageid}&prop=redirects`
          return rp(rpOptions)
        })
        .then(data => {
          if (!data.query.pages[0].missing) {
            this.wiki.title = data.query.pages[0].title
            this.wiki.url += this.wiki.title.replace(/ /g, '_')

            let redirects = data.query.pages[0].redirects
            redirects.forEach(redirect => {
              if (!redirect.title.startsWith(this.wiki.title) && !this.wiki.ids.includes(redirect.title)) {
                this.wiki.ids.push(redirect.title)
              }
            })
          }

          // Get additional info from the wiki page
          rpOptions.uri = `http://compat.cemu.info/w/api.php?action=query&format=json&formatversion=2&pageids=${this.wiki.pageid}&prop=revisions&rvprop=content&rvsection=0`
          return rp(rpOptions)
        })
        .then(data => {
          if (!data.query.pages[0].missing) {
            let infobox = data.query.pages[0].revisions[0].content

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

            if (callback) {
              callback()
            }
            resolve()
          }
        })
        .catch(err => {
          if (callback) { callback(err) }
          reject(err)
        })
    })
  }
}
