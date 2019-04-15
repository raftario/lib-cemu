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

## Index
* [Functions](#Functions)
  * [game](#game)
* [Classes](#Classes)
  * [Game](#Game)
  * [GameWiki](#GameWiki)
  * [Release](#Release)
* [Contributing](#Contributing)

## Functions
### game
Name | Return | Arguments | Optional arguments | Description
-----|--------|-----------|--------------------|------------
`addWiki` | GameWiki | `Game game` | | Convert a Game into a GameWiki
`code2id` | string | `string code`, `string publisherCode` | | Convert a code and a publisher code into a game ID
`create` | Game | `string name`, `string path`, `string id`, `string code`, `string publisherCode`, `string publisher` | `int version = 0`, `int dlcVersion = 0`, `int playtime = 0`, `int lastPlayed = 0` | Create a Game

## Classes
### Game
#### Properties
Name | Type | Description | Example
-----|------|-------------|--------
`name` | string | Name of the game
`version` | int | Version of the game
`dlcVersion` | int | Version of the DLC
`path` | string *(Path)* | Path to the game directory
`id` | string | Game ID | '0005000010101D00'
`code` | string | Game code | 'WUP-P-ARPE'
`publisherCode` | string | Publisher code | '0001'
`publisher` | string | Publisher of the game
`playTime` | int | Seconds spent in game
`lastPlayed` | int *(Unix timestamp)* | Last time the game was played
#### Constructor
Arguments | Optional arguments
----------|-------------------
`string name`, `string path`, `string id`, `string code`, `string publisherCode`, `string publisher` | `int version = 0`, `int dlcVersion = 0`, `int playtime = 0`, `int lastPlayed = 0`
#### Methods
Name | Return | Arguments | Optional arguments | Description
-----|--------|-----------|--------------------|------------
`formatPlaytime` | string | self | | Format the playtime in *h:mm* format and return it
`formatLastPlayed` | string | self | `string locale = 'en-US`, `bool utc = false` | Format last played time and return it
### GameWiki
> (extends [Game](#Game))
#### Properties
Name | Type | Description | Example
-----|------|-------------|--------
`wiki` | object | Cemu wiki information
`wiki.pageid` | int | Cemu wiki page id
`wiki.title` | string | Game title
`wiki.ids` | string array | List of game IDs | [ 'ARPE01', 'ARPP01', 'ARPJ01' ]
`wiki.developer` | string | Game developer
`wiki.publisher` | string | Game publisher
`wiki.series` | string | Series the game is part of
`wiki.released` | object | Release dates of the game | { na: 'November 18, 2012', eu: 'November 30, 2012', jp: 'December 8, 2012' }
`wiki.genre` | string array | Genres of the game | [ 'Platform' ]
`wiki.modes` | string array | Play modes of the game | [ 'Single-player', 'Multiplayer (5)' ]
`wiki.input` | string array | Input devices accepted by the game | [ 'GamePad', 'Pro Controller', 'Wii Remote', 'Classic Controller Pro' ]
`wiki.rating` | string | How well the game runs on Cemu | 'Playable'
#### Methods
Name | Return | Arguments | Optional arguments | Description
-----|--------|-----------|--------------------|------------
`parse` | Promise | | `function callback(error)` | Parse game information from the Cemu wiki
### Release
#### Properties
Name | Type | Description | Example
-----|------|-------------|--------
`version` | string | Version | '1.15.1'
`download` | string *(URL)* | Download URL
`changelog` | string *(URL)* | Changelog URL
## Contributing
**NO CONTRIBUTION RELATED TO PIRACY WILL BE ACCEPTED**
### Important guidelines
* Always run `standard --fix` before commiting.
* Functions containing async operations must return a Promise and accept a `callback(error)` function as a parameter
* Everything you add should be documented following the style of the existing documentation