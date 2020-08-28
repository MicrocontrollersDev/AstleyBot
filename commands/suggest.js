module.exports = {
  name: 'suggest',
  description: 'Send me ideas for commands, emojis, and other utilities to be added to the bot!',
  usage: '<message to me goes here>',
  execute(message, args) {
    if (!args[0]) {
      message.reply('please enter something.');
      return;
    }

    const msgContent = args.join(' ');
    const dev = message.client.users.cache.get('616119199609126932');

    dev.send(msgContent)
      .catch(error => message.channel.send(`Error: ${error}. Ignore that I just said \"Message sent\" it's fake news.`));
    message.reply('Message sent')
  },
};
