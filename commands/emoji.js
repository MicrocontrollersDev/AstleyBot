module.exports = {
  name: 'emoji',
  description: 'Outputs an emoji!\nCurrent emojis are: `blob, catlmao, egg, fine, nomnom, parrot, ricardo1, ricardo2, trump, whoasked, yes`',
  usage: '<emojiName>',
  aliases: ['emote'],
  execute(message, args, client) {
    if (!args[0]) {
      message.reply('please enter an emoji to send');
      return;
    }

    const emojiName = args[0];
    const emoji = client.emojiMessages.get(emojiName);

    if (!emoji) {
      message.reply('that is not an emoji that I know!');
      return;
    }

    try {
      emoji.execute(message, args);
    }
    catch (error) {
      console.error(error);
      message.reply('there was an error executing that command!');
    }
  },
};
