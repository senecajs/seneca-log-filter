'use strict'

const _ = require('lodash')
const log_levels = ['debug', 'info', 'warn', 'error', 'fatal']


/**
 * It returns the levels above the argument
 * @param  {String} logLevel the log level to calculate
 * @return {Array}           the list of logs above the argument
 */
function log_level_plus(logLevel) {
  let index = log_levels.indexOf(logLevel)
  if (index < 0) {
    return []
  } else {
    console.log(index)
    return log_levels.splice(index, log_levels.length - index)
  }
}

/**
 * Relates the name of an alias to a log level (if there is a match)
 * @param  {object} aliases the object containing the aliases on the logging
 * @return {String}         the first match with a log level. The rest are 
 *                          ignored as well as sub-objects.
 */
function infer_alias(aliases) {
  let keys = Object.keys(aliases)
  for (let key of keys) {
    if (aliases.hasOwnProperty(key) && log_levels.indexOf(key) > 0) {
      return key
    }
  }
}

function check_level_exists (level) {
  
}


module.exports.log_level_plus = log_level_plus
module.exports.infer_alias = infer_alias
