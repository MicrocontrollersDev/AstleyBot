module.exports = {
  name: 'fine',
  execute(message, args) {
    message.delete();
    message.channel.send('<a:fine:712725070275018837>');
  },
};
