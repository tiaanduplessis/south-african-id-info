<h1 align="center">🇿🇦 south-african-id-info</h1>
<div align="center">
  <strong>Validate and decode information from an South African ID</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/south-african-id-info">
    <img src="https://img.shields.io/npm/v/south-african-id-info.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/south-african-id-info">
  <img src="https://img.shields.io/npm/dm/south-african-id-info.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/south-african-id-info">
    <img src="https://img.shields.io/travis/tiaanduplessis/south-african-id-info.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fsouth-african-id-info">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fsouth-african-id-info.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/south-african-id-info">
    <img src="https://dependencyci.com/github/tiaanduplessis/south-african-id-info/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/south-african-id-info/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/south-african-id-info.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/south-african-id-info/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/south-african-id-info.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/south-african-id-info/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/south-african-id-info.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20south-african-id-info!%20https://github.com/tiaanduplessis/south-african-id-info%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/south-african-id-info.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/south-african-id-info/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>


## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/south-african-id-info.svg)](https://greenkeeper.io/)

```sh
$ npm install --save south-african-id-info
# OR
$ yarn add south-african-id-info
```

## Usage

The module exports a single function that takes a number `string` as argument and returns an `object`.

```js
const southAfricanIdInfo = require('south-african-id-info')

console.log(southAfricanIdInfo('9301215029086'))
//	{ valid: true,
//  	birthDate: 1993-01-20T22:00:00.000Z,
//  	gender: 'male', // 'female' //
//  	citizenship: 'SA citizen' // 'permanent resident'
// 	}

console.log(info('9202204720082'))
// { valid: false }
```

## CLI

```sh
$ npm install --global south-african-id-info
# OR
$ yarn global add south-african-id-info
```

Then:

```sh
$ sa-id-info 9301215029086
# valid:       true
# birthDate:   Thu Jan 21 1993 00:00:00 GMT+0200 (SAST)
# gender:      male
# citizenship: SA citizen
```

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
