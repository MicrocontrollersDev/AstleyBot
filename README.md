# AstleyBot
Shitty discord bot.

*requires [discord.js](https://discord.js.org/#/), [node](https://nodejs.org/en/), and [discord.js-opus](https://github.com/discordjs/opus)*

To start bot, run `index.js` in your command terminal.

### THIS WILL NOT WORK IN IT'S CURRENT STATE!!!!!!!!!

* Replace `<YOUR TOKEN HERE>` in config.json with your bot's token.
* None of the preincluded emojis will work for you. Bots can only send emojis that are on servers it is in.
  * To create emojis, use the template `example.js` and replace all text in `<>` with the appropriate values.
* The commands "accept", "birthday", "defualt", and "undefault" will not work unless you change the role ID and either remove the `whitelist` property or add your server's ID.
* The command "suggest" currently has my Discord ID and will not work unless you replace the ID with your user ID.
* the command "rickroll" will not work unless you upload an MP3 titled "rick.mp3" to the same folder as `index.js`.
  
## Useful things

If you're looking at this chances are you want to set up a Discord bot. A good guide to follow is [this one provided by Discord.js](https://discordjs.guide/).

If you know some javascript and want to expand my bot, here's some information you may want to know:
* All commands need to have a name and a help value at their header.
  * `name`: the command name; can be any string you want.
  * `help`: the help ID; should be a string with a value of `0`(appears on the basic help command), `1`(appears on the admin help command), or `2`(does not appear on any help command).
* Other values that can be defined in a command's header are:
  * `aliases`: alternate ways to call on the command; can be any string or array of strings you want.
  * `description`: the description that will appear in the help command; can be any string you want.
  * `usage`: the usage that will appear in the help command; can be any string you want.
  * `whitelist`: A list of the servers that the command is allowed to be used in, if left undefined the command will work in all servers; should be the server ID as a string or server IDs as an array of strings of the server(s) you want the command to work.
