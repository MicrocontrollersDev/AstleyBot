const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.emojiMessages = new Discord.Collection();
client.once('ready', () => {
  console.log('Logged in');
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}
const emojiFiles = fs.readdirSync('./emojis').filter(file => file.endsWith('.js'));

for (const file of emojiFiles) {
  const emoji = require(`./emojis/${file}`);
  client.emojiMessages.set(emoji.name, emoji);
}

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  try {
    command.execute(message, args, client);
  }
  catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});
client.login(token);
