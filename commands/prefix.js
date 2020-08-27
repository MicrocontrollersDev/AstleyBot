module.exports = {
  name: 'prefix',
  description: 'sends a list of all prefixes',
  aliases: ['bots'],
  execute(message, args) {
    message.delete();
    message.channel.send('Corona: c!\nRick: $\nRythm: ~\nRythm 2: >\nTatsu: !');
  },
};
