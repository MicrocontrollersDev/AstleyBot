# AstleyBot
Shitty discord bot.

*requires discord.js, node, and discord.js-opus*

To start bot, run `index.js` in your command terminal.

### THIS WILL NOT WORK IN IT'S CURRENT STATE!!!!!!!!!

* Replace `<YOUR TOKEN HERE>` in config.json with your bot's token.
* None of the preincluded emojis will work for you. Bots can only send emojis that are on servers it is in.
  * To create emojis, use the template `example.js` and replace all text in `<>` with the appropriate values.
* The commands "accept", "birthday", "defualt", and "undefault" will not work unless you change the role ID and either remove the `whitelist` property or add your server's ID.
* The command "suggest" currently has my Discord ID and will not work unless you replace the ID with your user ID.
* the command "rickroll" will not work unless you upload an MP3 titled "rick.mp3" to the same folder as `index.js`.
  
