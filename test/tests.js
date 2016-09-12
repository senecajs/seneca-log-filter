'use strict'
const Lab = require('Lab')

const lab = exports.lab = Lab.script()
const describe = lab.describe
const it = lab.it
const expect = require('code').expect

const infoLevel = {level: 'info', test: 'works'}
const debugLevel = {level: 'debug', test: 'works'}
const warnLevel = {level: 'warn', test: 'works'}

const LogFilter = require('../seneca-log-filter')

describe('log levels', () => {
  it('gets the log level from the "level" property', (done) => {
    let filter = LogFilter({level: 'info'})

    expect(filter(infoLevel)).to.equal(infoLevel)
    expect(filter(debugLevel)).to.be.null
    done()
  })

  it('only logs in the expected levels using "+"', (done) => {
    let filter = LogFilter({level: 'warn+'})
    expect(filter(infoLevel)).to.be.null
    expect(filter(warnLevel)).to.equal(warnLevel)
    done()
  })

  it('should filter out omit array properties', (done) => {
    let testObj = { level: 'info', foo: 'test', bar: 'test', zed: 'test' }
    let filter = LogFilter({level: 'info', omit: ['foo', 'bar']})
    let output = filter(testObj)
    let expectedOutput = { level: 'info', zed: 'test' }

    expect(output).to.equal(expectedOutput)
    done()
  })

  it('should filter out seneca metadata when omit-metadata is true', (done) => {
    let testObj = { level: 'info', foo: 'test' }
    let filter = LogFilter({level: 'info', 'omit-metadata': true})
    let output = filter(testObj)
    let expectedOutput = { foo: 'test' }

    expect(output).to.equal(expectedOutput)
    done()
  })
})
