'use strict'

const Util = require('./lib/util')
const _ = require('lodash')

function logfilter (options) {
  let level = options.level || Util.infer_alias(options.alias) || 'info+'

  let calculatedLevels = []
  if (_.endsWith(level, '+')) {
    calculatedLevels = Util.log_level_plus(level.substring(0, level.length - 1))
  }
  else {
    // If is not a real level... ignore.
    if (Util.level_exists(level)) {
      calculatedLevels.push(level)
    }
  }

  return function filter (data) {
    if (calculatedLevels.indexOf(data.level) !== -1) {
      let cloned = _.clone(data)
      if (options['omit-metadata']) {
        cloned = _.omit(cloned, ['seneca', 'level', 'when'])
      }
      if (options.omit && _.isArray(options.omit)) {
        cloned = _.omit(cloned, options.omit)
      }
      return cloned
    }
    return null
  }
}

module.exports = logfilter
