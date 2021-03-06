module.exports = {
  name: 'kick',
  description: 'kicks a member of the server',
  usage: '<member> [reason]',
  help: '1',
  execute(message, args) {
    if (!message.member.hasPermission('KICK_MEMBERS')) {
      message.channel.send('You do not have permission to use that!');
      return;
    }
    if (!message.mentions.users.size == 1) {
      return message.channel.send('Bruh mention someone (and only one person)! Jesus, I can\'t read your mind!');
    }
    const taggedUser = message.mentions.users.first();
    const toKick = message.mentions.members.first();

    if (message.member.roles.highest.position <= toKick.roles.highest.position) {
      return message.channel.send('You can not kick someone of equal or higher standing then you!')
    }

    toKick.kick(`${args[1]}`)
      .catch(error => message.channel.send(`Error: ${error}`));
    message.channel.send(`Kicked ${taggedUser.username}`);
  },
};
