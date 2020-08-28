module.exports = {
  name: 'stoprickroll',
  description: 'stops rickroll and leaves vc',
  aliases: ['leave', 'stop'],
  async execute(message, args) {
    if (!message.member.voice.channel) {
      return message.reply('You need to join a voice channel first!');
    }
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play('./rick.mp3');

    connection.disconnect();
    dispatcher.on('error', console.error);
  },
};
