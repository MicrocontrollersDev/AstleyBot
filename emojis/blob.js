module.exports = {
  name: 'blob',
  execute(message, args) {
    message.delete();
    message.channel.send('<a:blob:638066919924039690>');
  },
};
