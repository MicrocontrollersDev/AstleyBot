module.exports = {
  name: 'birthday',
  description: 'wishes a happy birthday',
  whitelist: '464647384429756428',
  help: '0',
  execute(message, args) {
    message.delete();
    message.channel.send('hapoy birthadyt <@&635549941653176323>');
  },
};
