'use strict'

const util = require('./lib/util')
const _ = require('lodash')
const through2 = require('through2')

function logfilter(options) {
  let me = this
  
  let level = options.level || util.infer_alias(options.alias) || 'info+'
  
  let calculatedLevels = [] 
  if (_.endsWith(level, '+')) {
    calculatedLevels.concat(util.log_level_plus(level))
  } else {
    // If is not a real level... ignore.
    if (util.level_exists(level)) {
      calculatedLevels.push(level)
    }
  }
  
  return function filter(data) {
    if (calculatedLevel.indexOf(chunk.level) !== -1) {
      if(options['omit-metadata']) {
        return _.omit(data, ['seneca', 'level', 'when'])
      }
      return data
    }
  }
}

module.exports = logfilter
