module.exports = {
  name: 'ban',
  description: 'bans a member of the server',
  usage: '<member> [reason]',
  execute(message, args) {
    if (!message.member.hasPermission('BAN_MEMBERS')) {
      message.channel.send('You do not have permission to use that!');
      return;
    }
    if (!message.mentions.users.size == 1) {
      return message.channel.send('Bruh mention someone (and only one person)! Jesus, I can\'t read your mind!');
    }
    const taggedUser = message.mentions.users.first();
    const toBan = message.mentions.members.first();

    toBan.ban({ reason: `${args[1]}` })
      .catch(error => message.channel.send(`Error: ${error}`));
    message.channel.send(`Baned ${taggedUser.username}`);
  },
};
