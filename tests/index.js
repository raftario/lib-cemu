'use strict'

const cemu = require('../lib')
console.log(cemu.version)

require('./game')()
require('./release')()
