module.exports = {
  name: 'emoji',
  description: 'Outputs an emoji!\nCurrent emojis are: `blob, catlmao, egg, fine, nomnom, parrot, ricardo1, ricardo2, trump, whoasked, yes`',
  usage: '<emojiName>',
  aliases: ['emote'],
  help: '0',
  execute(message, args, client) {
    if (!args[0]) {
      message.reply('please enter an emoji to send');
      return;
    }

    const emoteName = args[0];
    const emote = client.emoteMessages.get(emoteName);

    if (!emote) {
      message.reply('that is not an emoji that I know!');
      return;
    }

    try {
      emote.execute(message, args);
    }
    catch (error) {
      console.error(error);
      message.reply('there was an error executing that command!');
    }
  },
};
