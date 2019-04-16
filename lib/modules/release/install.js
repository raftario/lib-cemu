'use strict'

const fs = require('fs')
const path = require('path')
const yauzl = require('yauzl')

const ReleaseInstall = require('../../classes').ReleaseInstall
const download = require('./download')

/**
 * Download and install a Cemu release
 * @param {Release(2)} release - Release to install
 * @param {string} dir - Install directory
 * @param {function} [callback] - Callback, receives a ReleaseInstall (or null) and error object if an error occurs
 * @return {Promise<ReleaseInstall>}
 * @memberOf module:release
 */
function install (release, dir, callback) {
  const zipPath = path.join(dir, 'cemu.zip')

  return new Promise((resolve, reject) => {
    fs.mkdir(dir, err => {
      if (err && err.code !== 'EEXIST') throw err

      download(release, zipPath)
        .then(() => {
          yauzl.open(zipPath, { lazyEntries: true }, (err, file) => {
            if (err) throw err

            file.readEntry()
            file.on('entry', entry => {
              const entryPath = path.join(dir, entry.fileName)

              if (/\/$/.test(entry.fileName)) {
                fs.mkdir(entryPath, { recursive: true }, err => {
                  if (err && err.code !== 'EEXIST') throw err

                  file.readEntry()
                })
              } else {
                file.openReadStream(entry, (err, readStream) => {
                  if (err) throw err

                  readStream.on('end', () => {
                    file.readEntry()
                  })
                  readStream.pipe(fs.createWriteStream(entryPath))
                })
              }
            })
            file.once('close', () => {
              fs.unlink(zipPath, err => {
                if (err) throw err
              })

              const install = new ReleaseInstall(release.version, path.resolve(dir), [])
              if (callback) callback(install, err)
              resolve(install)
            })
          })
        })
        .catch(err => {
          if (callback) callback(null, err)
          reject(err)
        })
    })
  })
}

module.exports = install
