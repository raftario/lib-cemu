'use strict'

module.exports = class Game {
  // name
  // version
  // id
  // code
  // publisherCode
  // publisher

  constructor (name, version, id, code = 'Unknown', publisherCode = 'Unknown', publisher = 'Unknown') {
    this.name = name
    this.version = version
    this.id = id
    this.code = code
    this.publisherCode = publisherCode
    this.publisher = publisher
  }
}
