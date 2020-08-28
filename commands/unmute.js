module.exports = {
  name: 'unmute',
  description: 'unmutes a muted member of the server',
  usage: '<member>',
  execute(message, args) {
    if (message.guild.id != '464647384429756428') return;
    if (!message.member.hasPermission('MANAGE_ROLES')) {
      message.channel.send('You do not have permission to use that!');
      return;
    }
    if (!message.mentions.users.size == 1) {
      return message.channel.send('Bruh mention someone (and only one person)! Jesus, I can\'t read your mind!');
    }
    const taggedUser = message.mentions.users.first();
    const toUnmute = message.mentions.members.first();

    if (!toUnmute.roles.cache.has('507004459285610496')) {
      return message.channel.send(`${taggedUser.username} is not muted!`);
    }

    toUnmute.roles.remove('507004459285610496')
      .catch(error => message.channel.send(`Error: ${error}`));
    message.channel.send(`Unmuted ${taggedUser.username}`);
  },
};
