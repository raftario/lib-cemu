'use strict'

const cemu = require('..')

module.exports = () => {
  let cemu_1_15_4 = cemu.release.create('1.15.4')
  console.log(cemu_1_15_4)

  cemu.release.download(cemu_1_15_4, './temp/cemu.zip')
}
