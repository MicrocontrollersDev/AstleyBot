const { prefix } = require('../config.json');

module.exports = {
  name: 'help',
  description: 'List all of my commands or info about a specific command.',
  aliases: ['commands'],
  usage: '[command name]',
  help: '0',
  execute(message, args) {
    const data = [];
    const { commands } = message.client;
    const { emoteMessages } = message.client;

    if (!args.length) {
      data.push('Here\'s a list of my commands:\n');
      const temp = commands.filter(regCom);
      data.push(temp.map(command => command.name).join(', '));
      data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
      data.push(`You can send \`${prefix}help admin\` to view a list of admin commands!`)

      return message.channel.send(data, { split: true });
    }
    const name = args[0].toLowerCase();

    if (name == 'admin') {
      data.push('Here\'s a list of my admin commands:\n');
      const temp = commands.filter(admCom);
      data.push(temp.map(command => command.name).join(', '));
      data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

      return message.channel.send(data, { split: true});
    }

    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) {
      return message.reply('that\'s not a valid command');
    }

    if (command.name == 'emoji') {
      data.push('**Name:** emoji');
      data.push('**Aliases:** emote');
      data.push('**Description:** Output\'s an emoji!');
      data.push('**Emojis:** ', emoteMessages.map(emote => emote.name).join(', '));
      data.push('**Usage:** $emoji <emojiName>');
      return message.channel.send(data);
    }

    data.push(`**Name:** ${command.name}`);

    if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
    if (command.description) data.push(`**Description:** ${command.description}`);
    if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

    message.channel.send(data, { split: true });

    function regCom(command) {
      if (command.help == 0) if(!command.whitelist || command.whitelist == message.guild.id) return true;
    }
    function admCom(command) {
      if (command.help == 1) if(!command.whitelist || command.whitelist == message.guild.id) return true;
    }
  },
};
