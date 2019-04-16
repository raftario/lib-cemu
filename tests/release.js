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
}
