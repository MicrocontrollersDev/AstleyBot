module.exports = {
  name: 'birthday',
  description: 'wishes a happy birthday',
  execute(message, args) {
    message.delete();
    message.channel.send('hapoy birthadyt <@&635549941653176323>');
  },
};
