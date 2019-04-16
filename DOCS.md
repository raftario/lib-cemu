## Modules

<dl>
<dt><a href="#module_game">game</a></dt>
<dd></dd>
<dt><a href="#module_release">release</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#Game">Game</a></dt>
<dd><p>Represents an installed game</p>
</dd>
<dt><a href="#GameWiki">GameWiki</a> ⇐ <code><a href="#Game">Game</a></code></dt>
<dd><p>Represents an installed game and its Cemu wiki entry</p>
</dd>
<dt><a href="#Release">Release</a></dt>
<dd><p>Represents a Cemu release</p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#version">version</a></dt>
<dd></dd>
</dl>

<a name="module_game"></a>

## game

* [game](#module_game)
    * [.addWiki(game)](#module_game.addWiki) ⇒ [<code>GameWiki</code>](#GameWiki)
    * [.code2id(code, publisherCode)](#module_game.code2id) ⇒ <code>string</code>
    * [.create(name, path, id, code, publisherCode, publisher, [version], [dlcVersion], [playTime], [lastPlayed])](#module_game.create) ⇒ [<code>Game</code>](#Game)

<a name="module_game.addWiki"></a>

### game.addWiki(game) ⇒ [<code>GameWiki</code>](#GameWiki)
Convert a Game into a GameWiki

**Kind**: static method of [<code>game</code>](#module_game)  

| Param | Type |
| --- | --- |
| game | [<code>Game</code>](#Game) | 

<a name="module_game.code2id"></a>

### game.code2id(code, publisherCode) ⇒ <code>string</code>
Convert a code and a publisher code into a game ID

**Kind**: static method of [<code>game</code>](#module_game)  

| Param | Type |
| --- | --- |
| code | <code>string</code> | 
| publisherCode | <code>string</code> | 

<a name="module_game.create"></a>

### game.create(name, path, id, code, publisherCode, publisher, [version], [dlcVersion], [playTime], [lastPlayed]) ⇒ [<code>Game</code>](#Game)
Create a Game

**Kind**: static method of [<code>game</code>](#module_game)  

| Param | Type | Default |
| --- | --- | --- |
| name | <code>string</code> |  | 
| path | <code>string</code> |  | 
| id | <code>string</code> |  | 
| code | <code>string</code> |  | 
| publisherCode | <code>string</code> |  | 
| publisher | <code>string</code> |  | 
| [version] | <code>int</code> | <code>0</code> | 
| [dlcVersion] | <code>int</code> | <code>0</code> | 
| [playTime] | <code>int</code> | <code>0</code> | 
| [lastPlayed] | <code>int</code> | <code>0</code> | 

<a name="module_release"></a>

## release

* [release](#module_release)
    * [.create(version)](#module_release.create) ⇒ [<code>Release</code>](#Release)
    * [.download(release, path, [callback])](#module_release.download) ⇒ <code>Promise</code>

<a name="module_release.create"></a>

### release.create(version) ⇒ [<code>Release</code>](#Release)
Create a Release

**Kind**: static method of [<code>release</code>](#module_release)  

| Param | Type |
| --- | --- |
| version | <code>string</code> | 

<a name="module_release.download"></a>

### release.download(release, path, [callback]) ⇒ <code>Promise</code>
Download a Cemu release (zip) to a given path

**Kind**: static method of [<code>release</code>](#module_release)  

| Param | Type |
| --- | --- |
| release | [<code>Release</code>](#Release) | 
| path | <code>path</code> | 
| [callback] | <code>function</code> | 

<a name="Game"></a>

## Game
Represents an installed game

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the game |
| path | <code>path</code> | Path to the game directory |
| id | <code>string</code> | Game ID |
| code | <code>string</code> | Game code |
| publisherCode | <code>string</code> | Publisher code |
| publisher | <code>string</code> | Publisher of the game |
| version | <code>int</code> | Version of the game |
| dlcVersion | <code>int</code> | Version of the DLC |
| playTime | <code>int</code> | Seconds spent in game |
| lastPlayed | <code>timestamp</code> | Last time the game was played |


* [Game](#Game)
    * [.formatPlaytime()](#Game+formatPlaytime) ⇒ <code>string</code>
    * [.formatLastPlayed([locale], [utc])](#Game+formatLastPlayed) ⇒ <code>string</code>

<a name="Game+formatPlaytime"></a>

### game.formatPlaytime() ⇒ <code>string</code>
Format the playtime in *h:mm* format

**Kind**: instance method of [<code>Game</code>](#Game)  
<a name="Game+formatLastPlayed"></a>

### game.formatLastPlayed([locale], [utc]) ⇒ <code>string</code>
Format the last played time

**Kind**: instance method of [<code>Game</code>](#Game)  

| Param | Type | Default |
| --- | --- | --- |
| [locale] | <code>string</code> | <code>&quot;en-US&quot;</code> | 
| [utc] | <code>boolean</code> | <code>false</code> | 

<a name="GameWiki"></a>

## GameWiki ⇐ [<code>Game</code>](#Game)
Represents an installed game and its Cemu wiki entry

**Kind**: global class  
**Extends**: [<code>Game</code>](#Game)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| wiki | <code>object</code> | Cemu wiki information |
| wiki.pageid | <code>int</code> | Cemu wiki information |
| wiki.title | <code>string</code> | Cemu wiki page id |
| wiki.ids | <code>array</code> | Game title |
| wiki.developer | <code>string</code> | List of game IDs |
| wiki.publisher | <code>string</code> | Game developer |
| wiki.series | <code>string</code> | Game publisher |
| wiki.released | <code>object</code> | Series the game is part of |
| wiki.genre | <code>array</code> | Release dates of the game |
| wiki.modes | <code>array</code> | Genres of the game |
| wiki.input | <code>array</code> | Play modes of the game |
| wiki.rating | <code>string</code> | Input devices accepted by the game |


* [GameWiki](#GameWiki) ⇐ [<code>Game</code>](#Game)
    * [.parse([callback])](#GameWiki+parse) ⇒ <code>Promise</code>
    * [.formatPlaytime()](#Game+formatPlaytime) ⇒ <code>string</code>
    * [.formatLastPlayed([locale], [utc])](#Game+formatLastPlayed) ⇒ <code>string</code>

<a name="GameWiki+parse"></a>

### gameWiki.parse([callback]) ⇒ <code>Promise</code>
Parse game information from the wiki

**Kind**: instance method of [<code>GameWiki</code>](#GameWiki)  

| Param | Type |
| --- | --- |
| [callback] | <code>function</code> | 

<a name="Game+formatPlaytime"></a>

### gameWiki.formatPlaytime() ⇒ <code>string</code>
Format the playtime in *h:mm* format

**Kind**: instance method of [<code>GameWiki</code>](#GameWiki)  
<a name="Game+formatLastPlayed"></a>

### gameWiki.formatLastPlayed([locale], [utc]) ⇒ <code>string</code>
Format the last played time

**Kind**: instance method of [<code>GameWiki</code>](#GameWiki)  

| Param | Type | Default |
| --- | --- | --- |
| [locale] | <code>string</code> | <code>&quot;en-US&quot;</code> | 
| [utc] | <code>boolean</code> | <code>false</code> | 

<a name="Release"></a>

## Release
Represents a Cemu release

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| version | <code>string</code> | Version |
| download | <code>url</code> | Download link |
| changelog | <code>url</code> | Changelog link |

<a name="version"></a>

## version
**Kind**: global variable  
**Properties**

| Name | Type |
| --- | --- |
| version | <code>string</code> | 

