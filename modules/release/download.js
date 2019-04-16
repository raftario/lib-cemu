'use strict'

const fs = require('fs')
const request = require('request')

/**
 * Download a Cemu release to a given path
 * @param {Release} release
 * @param {path} path
 * @param {function} [callback]
 * @return {Promise}
 * @memberOf module:release
 */
function download (release, path, callback) {
  return new Promise((resolve, reject) => {
    request(release.download).pipe(
      fs.createWriteStream(path)
        .on('finish', () => {
          if (callback) callback()
          resolve()
        })
        .on('error', (err) => {
          if (callback) callback(err)
          reject(err)
        })
    )
  })
}

module.exports = download
