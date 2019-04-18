<h1 align="center">
    <a href="https://github.com/raftario/lib-cemu#readme"><img 
    	width="128" 
        alt="logo" 
        src="https://raw.githubusercontent.com/raftario/lib-cemu/master/assets/logo.svg?sanitize=true"></a>
    <br>
    lib-cemu
</h1>

<h3 align="center">
	Lightweight Node.js library for Cemu utils
</h3>

<p align="center">
	<strong>
		<a href="DOCS.md">Docs</a>
		-
		<a href="CHANGELOG.md">Changelog</a>
		-
		<a href="LICENSE">License</a>
		-
		<a href="#Features">Features</a>
		-
		<a href="#Installation">Installation</a>
		-
		<a href="#Usage">Usage</a>
		-
		<a href="#Contributing">Contributing</a>
	</strong>
</p>
<p align="center">
	<a href="https://www.npmjs.com/package/lib-cemu"><img
		alt="npm"
		src="https://img.shields.io/npm/v/lib-cemu.svg?color=00a2df"></a>
	<a href="https://bundlephobia.com/result?p=lib-cemu"><img
		alt="size"
		src="https://img.shields.io/bundlephobia/minzip/lib-cemu.svg?color=00a2df"></a>
	<a href="https://opensource.org/licenses/MIT"><img
		alt="license"
		src="https://img.shields.io/github/license/raftario/lib-cemu.svg?color=00a2df"></a>
	<a href="https://standardjs.com"><img
		alt="style"
		src="https://img.shields.io/badge/code_style-standard-00a2df.svg"></a>
    <br>
	<a href="https://david-dm.org/raftario/lib-cemu"><img
		alt="dependencies"
		src="https://img.shields.io/david/raftario/lib-cemu.svg"></a>
	<a href="https://snyk.io/test/npm/lib-cemu"><img
		alt="vulnerabilities"
		src="https://img.shields.io/snyk/vulnerabilities/npm/lib-cemu.svg"></a>
</p>


## Features
lib-cemu is meant to help create Cemu utilities without having to deal with all the annoying stuff or to include huge wrappers.  
I was originally planning to create a frontend with these capacities but decided to create a library instead. I think Cemu is here to stay and that the devs shouldn't have to work on these kind of features or build them into the emulator.  
And if it's our job, we should have good tools to do it.

lib-cemu is
* Lightweight. No useless dependencies, just what you need.
* Promise based. Every function performing async operations returns a Promise. (Or you can use callbacks (but you shouldn't (learn how to use promises (you'll thank me later.))))
* Well documented. The docs are generated automatically on every commit, so they are always complete and up-to-date.
### Profiles
Create different profiles to easily store and switch between savegames and settings.
- [ ] Create, edit and delete
- [ ] Save and load
- [ ] Upload and download from Google Drive
### Cemu Releases
Download, install, update, manage settings and more.
- [x] Download and install
- [ ] Update
- [ ] Manage settings
### Games
Manage games and get various information about them.
- [ ] Import games from `meta.xml` or `settings.xml`
- [ ] Launch games with a selected profile
- [x] Parse game information from the Cemu wiki
- [ ] Create custom Steam shortcuts
### Misc
- [ ] Save and load shader caches *(Sharing shader caches is **piracy**. Only use **yours** and do not share them.)*
### Suggestions
Have any suggestions or feature requests ? Just [open an issue](https://github.com/raftario/lib-cemu/issues/new).

## Installation
```console
# If you use npm >= 5
$ npm i lib-cemu

# If you use npm < 5
$ npm i -S lib-cemu

# If you use yarn (you should)
$ yarn add lib-cemu
```

## Usage
The library is not ready for production use yet. Check back when 1.0.0 comes out or read [the docs](DOCS.md).

## Contributing
**NO CONTRIBUTION RELATED TO PIRACY WILL BE ACCEPTED**
### Basic
* Test everything and add test scripts when possible.
### Formatting
* This library uses the [JavaScript Standard Style](https://standardjs.com). It is automatically applied when committing and checked when pushing. You can run the `lint` command to apply it or the `lint-test` command to check if it is applied.
* Everything you add should be documented using the [JSDoc format](http://usejsdoc.org/) and following the style already in use. You can run the `docs` command to automatically generate the docs. They are also automatically generated when committing.
* Wrap long lines when possible, this makes everything much more eye-pleasing.
### Logic
* Classes should not be accessible directly but only through functions.
* Functions containing async operations must return a Promise and accept a `callback(error)` function as an optional parameter for flexibility. If the function creates something that is not one of the arguments, return it with the promise and pass it to the callback (`callback(value, err)`).
* There should be as few dependencies as possible. Keep it small and simple.
### Contributors
[Raphaël Thériault](https://github.com/raftario)
