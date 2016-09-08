'use strict'

const util = require('./lib/util')
const _ = require('lodash')
const through2 = require('through2')

function logfilter(options) {
  let me = this
  this.options = options
  
  let level = options.log.level || util.infer_alias(options.log.alias)
  
  let calculatedLevels = [] 
  if (_.endsWith(level, '+')) {
    calculatedLevels.concat(util.log_level_plus(level))
  } else {
    // If is not a real level... ignore.
    if (util.level_exists(level)) {
      calculatedLevels.push(level)
    }
  }
  
  return through2({objectMode: true}, function(chunk, enc, callback) {
    if (calculatedLevel.indexOf(chunk.level) !== -1) {
        this.push(chunk)
    }
    callback()
  })
}

module.exports = logfilter
