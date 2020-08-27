module.exports = {
  name: 'clear',
  description: 'deletes mesages',
  aliases: ['purge'],
  usage: '<# of messages to clear>',
  execute(message, args) {
    async function purge() {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        message.channel.send('You do not have permission to use that!');
        return;
      }
      if (isNaN(args[0])) {
        message.channel.send('That\'s not even a number you casual.');
        return;
      }
      const del = parseInt(args[0]) + 1;
      if (del <= 1 || del > 100) {
        return message.channel.send('you can only delete 1-99 messages');
      }
      message.channel.bulkDelete(del, true)
        .catch(error => message.channel.send(`Error: ${error}`));
    }

    purge();

  },
};
