'use strict'

exports.game = require('./modules/game')
exports.release = require('./modules/release')
/** @property {string} version - lib-cemu version */
exports.version = process.env.npm_package_version
