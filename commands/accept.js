module.exports = {
  name: 'accept',
  execute(message, args) {
    message.delete();
    if (message.guild.id != '464647384429756428') return;
    if (message.member.roles.cache.has('614301003977719810')) return;
    
    message.member.roles.add('614301003977719810')
      .catch(error => message.channel.send(`Error: ${error}`));
  },
};
