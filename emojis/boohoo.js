module.exports = {
  name: 'boohoo',
  execute(message, args) {
    message.delete();
    message.channel.send('https://cdn.discordapp.com/attachments/494298326066528276/748234415339077682/image0.jpg');
  },
};
