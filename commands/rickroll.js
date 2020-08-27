module.exports = {
  name: 'rickroll',
  description: 'Rick Rolls your current voice channel',
  aliases: ['rr', 'roll', 'r'],
  async execute(message, args) {
    if (!message.member.voice.channel) {
      return message.reply('You need to join a voice channel first!');
    }
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play('./rick.mp3');

    dispatcher.on('finish', () => {
      connection.disconnect();
    });
    dispatcher.on('error', console.error);
  },
};
