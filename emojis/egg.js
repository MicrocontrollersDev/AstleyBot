module.exports = {
  name: 'egg',
  execute(message, args) {
    message.delete();
    message.channel.send('<a:egg:638066852928684063>');
  },
};
