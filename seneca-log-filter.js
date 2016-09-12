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
      let ret = _.clone(data)
      if (options['omit-metadata']) {
        ret = _.omit(ret, ['seneca', 'level', 'when'])
      }
      if (options.omit && _.isArray(options.omit)) {
        ret = _.omit(ret, options.omit)
      }
      return ret
    }
    return null
  }
}

module.exports = logfilter
