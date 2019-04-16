'use strict'

const cemu = require('..')

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
  console.log(nsmbu.formatLastPlayed())
  console.log(nsmbu.formatLastPlayed('fr-CA', true))

  let nsmbu1 = cemu.game.addWiki(nsmbu)
  let nsmbu2 = cemu.game.addWiki(nsmbu)

  nsmbu1.parse(() => console.log(nsmbu1))
  nsmbu2.parse().then(() => console.log(nsmbu2))
}
