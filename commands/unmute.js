module.exports = {
  name: 'unmute',
  description: 'unmutes a muted member of the server',
  usage: '<member>',
  help: '1',
  execute(message, args) {
    if (message.guild.id != '464647384429756428') return;
    if (!message.member.hasPermission('MANAGE_ROLES')) {
      message.channel.send('You do not have permission to use that!');
      return;
    }

    const mute = message.guild.roles.cache.array().find(role => role.name.toLowerCase() == 'muted');
    if (!mute) return message.channel.send(`${message.guild.name} does not have a muted role.`);

    if (!message.mentions.users.size == 1) {
      return message.channel.send('Bruh mention someone (and only one person)! Jesus, I can\'t read your mind!');
    }
    const taggedUser = message.mentions.users.first();
    const toUnmute = message.mentions.members.first();

    if (message.member.roles.highest.position <= toUnmute.roles.highest.position) {
      return message.channel.send('You can not unmute someone of equal or higher standing then you!')
    }

    if (!toUnmute.roles.cache.has(mute.id)) {
      return message.channel.send(`${taggedUser.username} is not muted!`);
    }

    toUnmute.roles.remove(mute.id)
      .catch(error => message.channel.send(`Error: ${error}`));
    message.channel.send(`Unmuted ${taggedUser.username}`);
  },
};
