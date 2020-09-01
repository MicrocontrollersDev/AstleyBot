const { version } = require('../config.json');

module.exports = {
  name: 'info',
  description: 'displays bot information',
  help: '0',
  execute(message, args) {
    message.delete();
    message.channel.send({
      embed: {
        "title": "AstleyBot",
        "url": "https://github.com/De-Snail/AstleyBot",
        "description": `General purpose Discord bot made by: Neptune\\🤠#2123\n[Support Discord Server](https://discord.gg/Z7RtYAb)\nCurrently running version ${version}, hosted with [Node](https://nodejs.org/) using the [Discord.js](https://discord.js.org/#/) Library.`,
        "author": {
          "name": "Neptune🤠#2123",
          "url": "https://github.com/De-Snail",
          "icon_url": "https://cdn.discordapp.com/attachments/750482199727439922/750482429399138435/0b20fc0e46123ea702a68bbf136d5add.png"
        },
        "color": 18091,
        "footer": {
          "text": "Opensource under the WTFPL; clone, fork, copy, or outright steal it at the GitHub page.",
          "icon_url": "https://cdn.discordapp.com/attachments/750482199727439922/750482217402368081/logo-220x1601.png"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/750482199727439922/750482524425158706/0fc499afd8b5fbcaf5a2d4fc1301a538.png"
        },
      }
    });
  },
};
