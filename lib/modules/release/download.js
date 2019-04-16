'use strict'

const fs = require('fs')
const request = require('request')

/**
 * Download a Cemu release (zip) to a given path
 * @param {Release(2)} release - Release to download
 * @param {string} path - Download path
 * @param {function} [callback] - Callback, receives an error object if an error occurs
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
