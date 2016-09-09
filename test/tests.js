'use strict'
const Lab = require('Lab')

const lab = exports.lab = Lab.script()
const describe = lab.describe
const it = lab.it
const expect = require('code').expect

const infoLevel = {level: 'info', test: 'works'}
const debugLevel = {level: 'debug', test: 'works'}
const warnLevel = {level: 'warn', test: 'works'}
const errorLevel = {level: 'error', test: 'works'}

const LogFilter = require('../seneca-log-filter')

describe('log levels', () => {
  it('gets the log level from the "level" property', (done) => {
    let filter = LogFilter({level: 'info'})

    expect(filter(infoLevel)).to.equal(infoLevel)
    expect(filter(debugLevel)).to.be.null
    expect(filter(warnLevel)).to.be.null
    done()
  })

  it('only logs in the expected levels using "+"', (done) => {
    let filter = LogFilter({level: 'warn+'})
    expect(filter(infoLevel)).to.be.null
    expect(filter(warnLevel)).to.equal(warnLevel)
    expect(filter(errorLevel)).to.equal(errorLevel)
    done()
  })

  it('understand aliases matching the log level', (done) => {
    let filter = LogFilter({alias: {info: true}})
    expect(filter(infoLevel)).to.equal(infoLevel)
  })
})
