'use strict'

const cemu = require('../lib')

module.exports = () => {
  let cemu1154 = cemu.release.create('1.15.4')
  console.log(cemu1154)

  cemu.release.download(cemu1154, './temp/cemu.zip', err => {
    if (err) console.error(err)
    console.log('download callback')
  })
    .then(() => console.log('download promise'))
    .catch(err => console.error(err))

  cemu.release.install(cemu1154, './temp/install', (install, err) => {
    console.log('install callback')
    if (err) console.error(err)
    console.log(install)
  })
    .then(install => {
      console.log('install promise')
      console.log(install)
    })
    .catch(err => console.error(err))
}
