module.exports = {
  name: 'default',
  execute(message, args) {
    if (!message.member.hasPermission('KICK_MEMBERS')) {
      message.channel.send('You do not have permission to use that!');
      return;
    }
    if (!message.mentions.users.size == 1) {
      return message.channel.send('Bruh mention someone (and only one person)! Jesus, I can\'t read your mind!');
    }
    const taggedUser = message.mentions.users.first();
    const toMute = message.mentions.members.first();

    if (toMute.roles.cache.has('692861119315968060')) {
      return message.channel.send(`${taggedUser.username} is already defaulted!`);
    }

    toMute.roles.add('692861119315968060')
      .catch(error => message.channel.send(`Error: ${error}`));
    message.channel.send(`Defaulted ${taggedUser.username}`);
  },
};
