module.exports = {
  name: 'nomnom',
  execute(message, args) {
    message.delete();
    message.channel.send('<a:nomnom:638066949871501322>');
  },
};
