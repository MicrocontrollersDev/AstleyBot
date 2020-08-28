module.exports = {
  name: 'wall',
  execute(message, args) {
    message.delete();
    message.channel.send('https://cdn.discordapp.com/attachments/528750818166439937/748575194657849394/image0.jpg');
  },
};
