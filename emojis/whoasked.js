module.exports = {
  name: 'whoasked',
  execute(message, args) {
    message.delete();
    message.channel.send('<a:who_fucking_asked:727099433942253619>');
  },
};
