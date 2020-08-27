module.exports = {
  name: 'trump',
  execute(message, args) {
    message.delete();
    message.channel.send('<a:trump:639283458665086976>');
  },
};
