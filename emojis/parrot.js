module.exports = {
  name: 'parrot',
  execute(message, args) {
    message.delete();
    message.channel.send('<a:PARROT:638088778728341504>');
  },
};
