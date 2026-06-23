![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js][] plugin

# @seneca/log-filter

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
|---|---|

## Install

```sh
npm install seneca-log-filter
```

## Quick Example

```js
require('seneca')({
  log: { map: [{level: 'error+'}] }
})
```

## More Examples

See [test/](test/) for usage examples.

## Motivation

Provides log filtering for Seneca microservices, allowing you to control which log entries are displayed.

## Support

If you're using this module and need help, you can:

- Post a [github issue][]
- Tweet to [@senecajs][]

## API

### `LogFilter(config)`
- `config` is an object which can take several properties which change the behaviour of the filter which are listed below.
  - `level` a required property which states the log level to filter out
  - `omit-metadata` a value which can be true or false, if true this omits the properties with the names `seneca`, `level` and `when` when filtering an object
  - `omit` an array of strings of names of properties to omit when filtering an object

#### Returns
A function which can be called on an object to filter properties out of it.

## Contributing

The [Senecajs org][] encourages open participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

### Running tests

```sh
npm run test
```

## Background

See [examples](https://github.com/senecajs/seneca-log-filter/tree/main/examples) for more usage.

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coveralls-badge]][coveralls-url]
[![Dependency Status][david-badge]][david-url]
[![Gitter chat][gitter-badge]][gitter-url]
[MIT]: ./LICENSE
[npm-badge]: https://badge.fury.io/js/seneca-log-filter.svg
[npm-url]: https://badge.fury.io/js/seneca-log-filter
[travis-badge]: https://api.travis-ci.org/senecajs/seneca-log-filter.svg
[travis-url]: https://travis-ci.org/senecajs/seneca-log-filter
[coveralls-badge]:https://coveralls.io/repos/senecajs/seneca-log-filter/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/senecajs/seneca-log-filter?branch=master
[david-badge]: https://david-dm.org/senecajs/seneca-log-filter.svg
[david-url]: https://david-dm.org/senecajs/seneca-log-filter
[gitter-badge]: https://badges.gitter.im/senecajs/seneca.svg
[gitter-url]: https://gitter.im/senecajs/seneca
[Senecajs org]: https://github.com/senecajs/
[issue]: https://github.com/senecajs/seneca-log-filter/issues
[pr]: https://github.com/senecajs/seneca-log-filter/pulls
[contrib]: ./CONTRIBUTING.md
[contribGuide]: http://senecajs.org/contribute/
[Sponsor]: http://nearform.com
