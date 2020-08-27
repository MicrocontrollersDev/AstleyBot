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
    const dev = message.client.users.cache.get('<YOUR DISCORD ID HERE>');

    dev.send(msgContent);
  },
};
