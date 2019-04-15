'use strict'

const cemu = require('..')

let nsmbu = cemu.game.create(
  'New SUPER MARIO BROS. U',
  64,
  16,
  'D:\\Games\\Cemu\\games\\New SUPER MARIO BROS. U [ARPE0101]\\',
  '0005000010101D00',
  'WUP-P-ARPE',
  '0001',
  'Nintendo',
  3581,
  1554768480
)

console.log(nsmbu)
console.log(nsmbu.formatPlaytime())
console.log(nsmbu.formatLastPlayed())
console.log(nsmbu.formatLastPlayed('fr-CA', true))

nsmbu = cemu.game.addWiki(nsmbu)

setTimeout(() => {
  console.log(nsmbu)
}, 4000)
