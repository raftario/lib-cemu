'use strict'

const fs = require('fs')
const fetch = require('node-fetch')

/**
 * Download a Cemu release (zip) to a given path
 * @param {Release(2)} release - Release to download
 * @param {string} path - Download path
 * @param {function} [callback] - Callback, receives an error object if an error occurs
 * @return {Promise}
 * @memberOf module:release
 */
function download (release, path, callback) {
  function checkStatus (res) {
    if (res.ok) {
      return res
    } else {
      throw new Error(res.statusText)
    }
  }

  return new Promise((resolve, reject) => {
    fetch(release.download)
      .then(checkStatus)
      .then(res => {
        res.body.pipe(
          fs.createWriteStream(path)
            .on('finish', () => {
              if (callback) callback()
              resolve()
            })
            .on('error', err => {
              throw err
            })
        )
      })
      .catch(err => {
        if (callback) callback(err)
        reject(err)
      })
  })
}

module.exports = download
