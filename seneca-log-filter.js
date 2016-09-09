'use strict'

const Util = require('./lib/util')
const _ = require('lodash')

function logfilter (options) {
  let level = options.level || Util.infer_alias(options.alias) || 'info+'

  let calculatedLevels = []
  if (_.endsWith(level, '+')) {
    calculatedLevels.concat(Util.log_level_plus(level))
  }
  else {
    // If is not a real level... ignore.
    if (Util.level_exists(level)) {
      calculatedLevels.push(level)
    }
  }

  return function filter (data) {
    if (calculatedLevels.indexOf(data.level) !== -1) {
      if (options['omit-metadata']) {
        return _.omit(data, ['seneca', 'level', 'when'])
      }
      return data
    }
    return null
  }
}

module.exports = logfilter
