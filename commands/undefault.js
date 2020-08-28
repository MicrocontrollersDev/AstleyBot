module.exports = {
  name: 'undefault',
  description: 'undefaults a defaulted member of the server',
  usage: '<member>',
  execute(message, args) {
    if (message.guild.id != '464647384429756428') return;
    if (!message.member.hasPermission('KICK_MEMBERS')) {
      message.channel.send('You do not have permission to use that!');
      return;
    }
    if (!message.mentions.users.size == 1) {
      return message.channel.send('Bruh mention someone (and only one person)! Jesus, I can\'t read your mind!');
    }
    const taggedUser = message.mentions.users.first();
    const toMute = message.mentions.members.first();

    if (!toMute.roles.cache.has('692861119315968060')) {
      return message.channel.send(`${taggedUser.username} is not defaulted!`);
    }

    toMute.roles.remove('692861119315968060')
      .catch(error => message.channel.send(`Error: ${error}`));
    message.channel.send(`Undefaulted ${taggedUser.username}`);
  },
};
