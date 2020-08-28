module.exports = {
  name: 'birthday',
  description: 'wishes a happy birthday',
  execute(message, args) {
    message.delete();
    if (message.guild.id != '464647384429756428') return;
    message.channel.send('hapoy birthadyt <@&635549941653176323>');
  },
};
