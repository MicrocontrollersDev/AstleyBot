module.exports = {
  name: 'catlmao',
  execute(message, args) {
    message.delete();
    message.channel.send('<a:catlmao:638066524350840855>');
  },
};
