'use strict'

const cemu = require('../lib')

module.exports = () => {
  let nsmbu = cemu.game.create(
    'New SUPER MARIO BROS. U',
    'D:\\Games\\Cemu\\games\\New SUPER MARIO BROS. U [ARPE0101]\\',
    '0005000010101D00',
    'WUP-P-ARPE',
    '0001',
    'Nintendo',
    64,
    16,
    3581,
    1554768480
  )

  console.log(nsmbu)
  console.log(nsmbu.formatPlaytime())

  nsmbu = cemu.game.addWiki(nsmbu)

  nsmbu.parse(err => {
    if (err) console.error(err)
    console.log('parse callback')
    console.log(nsmbu)
  })
    .then(() => {
      console.log('parse promise')
      console.log(nsmbu)
    })
    .catch(err => console.error(err))
}
