# lib-cemu
[![npm](https://img.shields.io/npm/v/lib-cemu.svg)](https://www.npmjs.com/package/lib-cemu)
![npm bundle size](https://img.shields.io/bundlephobia/min/lib-cemu.svg)
![GitHub](https://img.shields.io/github/license/raftario/lib-cemu.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![npm](https://img.shields.io/npm/dt/lib-cemu.svg)
![npm](https://img.shields.io/npm/dm/lib-cemu.svg)
[![GitHub stars](https://img.shields.io/github/stars/raftario/lib-cemu.svg?style=social)](https://github.com/raftario/lib-cemu)

![David](https://img.shields.io/david/raftario/lib-cemu.svg)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/lib-cemu.svg)
![GitHub issues](https://img.shields.io/github/issues/raftario/lib-cemu.svg)
![GitHub pull requests](https://img.shields.io/github/issues-pr/raftario/lib-cemu.svg)

Node library to facilitate basic interactions with the Wii U emulator CEMU  
**THIS LIBRARY IS STILL IN EARLY DEVELOPMENT AND IS PUBLISHED ONLY FOR DEBUGGING PURPOSE. DO NOT USE IT.**

## Installation
If you use npm >= 5 :
```console
$ npm i lib-cemu
```
If you use npm < 5 :
```console
$ npm i -S lib-cemu
```
If you use yarn :
```console
$ yarn add lib-cemu
```

## Docs
[Read the docs](DOCS.md), they should include pretty much anything you need.

## Contributing
**NO CONTRIBUTION RELATED TO PIRACY WILL BE ACCEPTED**
### Basic
* Test everything and add test scripts when possible.
### Formatting
* This library uses the [JavaScript Standard Style](https://standardjs.com). It is automatically applied to committed files, but I still recommend you get used to it.
* Everything you add should be documented using the JSDoc format and following the style already in use. You can run the `docs` command to automatically generate the docs. They are also automatically generated before commits.
* Wrap long lines when possible, this makes everything much more eye-pleasing.
### Logic
* Classes should not be accessible directly but only through functions.
* Functions containing async operations must return a Promise and accept a `callback(error)` function as an optional parameter for flexibility.
* There should be as few dependencies as possible. Keep it small and simple.

## License
This library is distributed under the [MIT License](LICENSE)