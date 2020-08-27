module.exports = {
  name: 'yes',
  execute(message, args) {
    message.delete();
    message.channel.send('<:yes:712537648065019935>');
  },
};
