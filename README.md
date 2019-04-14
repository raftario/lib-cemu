# lib-cemu
Node library to facilitate basic interactions with the Wii U emulator CEMU  
**THIS LIBRARY IS STILL IN EARLY DEVELOPMENT AND IS PUBLISHED ONLY FOR DEBUGGING PURPOSE. DO NOT USE IT.**

## Index
* [Classes](#Classes)
  * [Game](#Game)
  * [GameWiki](#GameWiki)
  * [Release](#Release)
* [Contributing](#Contributing)

## Classes
### Game
#### Properties
Name | Type | Description | Example
-----|------|-------------|--------
`name` | string | Name of the game
`version` | int | Version of the game
`id` | string | Game ID | '0005000010101D00'
`code` | string | Game code | 'WUP-P-ARPE'
`publisherCode` | string | Publisher code | '0001'
`publisher` | string | Publisher of the game
#### Constructor
Arguments | Optional arguments
----------|-------------------
`string name`, `int version`, `string id` | `string code = 'Unkwnown'`, `string publisherCode = 'Unkwnown'`, `string publisher = 'Unkwnown'`
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
#### Static methods
Name | Return | Arguments | Optional arguments | Description
-----|--------|-----------|--------------------|------------
`addWiki` | GameWiki | `Game game` | | Take a game and return a GameWiki
`code2id` | string | `string code`, `string publisherCode` | | Convert a code and a publisher code into a game ID
#### Methods
Name | Return | Arguments | Optional arguments | Description
-----|--------|-----------|--------------------|------------
`parse` | void | self | | Parse game information from the Cemu wiki
### Release
#### Properties
Name | Type | Description | Example
-----|------|-------------|--------
`version` | string | Version | '1.15.1'
`download` | string | Download URL
`changelog` | string | Changelog URL
## Contributing
Always run `standard --fix` before commiting.