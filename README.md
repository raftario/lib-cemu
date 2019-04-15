# lib-cemu
[![npm](https://img.shields.io/npm/v/lib-cemu.svg)](https://www.npmjs.com/package/lib-cemu)
![GitHub](https://img.shields.io/github/license/raftario/lib-cemu.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![npm](https://img.shields.io/npm/dt/lib-cemu.svg)
[![GitHub stars](https://img.shields.io/github/stars/raftario/lib-cemu.svg?style=social)](https://github.com/raftario/lib-cemu)

![David](https://img.shields.io/david/raftario/lib-cemu.svg)
![GitHub issues](https://img.shields.io/github/issues/raftario/lib-cemu.svg)
![GitHub pull requests](https://img.shields.io/github/issues-pr/raftario/lib-cemu.svg)

Node library to facilitate basic interactions with the Wii U emulator CEMU  
**THIS LIBRARY IS STILL IN EARLY DEVELOPMENT AND IS PUBLISHED ONLY FOR DEBUGGING PURPOSE. DO NOT USE IT.**

## Docs
[Read the docs](DOCS.md), they should include pretty much anything you need.

## Contributing
**NO CONTRIBUTION RELATED TO PIRACY WILL BE ACCEPTED**
### Formatting
* Always run `standard --fix` before commiting.
* Everything you add should be documented using the JSDoc format and following the style already in use. You can run the `docs` command to automatically generate the docs.
### Logic
* Functions containing async operations must return a Promise and accept a `callback(error)` function as a parameter

## License
This library is distributed under the [MIT License](LICENSE)