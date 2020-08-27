module.exports = {
  name: 'parrot',
  execute(message, args) {
    message.delete();
    message.channel.send('<a:parrot:695165669343232040>');
  },
};
