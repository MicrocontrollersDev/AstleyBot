const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, version, welcome } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.emoteMessages = new Discord.Collection();
client.once('ready', () => {
  console.log(`Logged in with ${version}`);
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}
const emoteFiles = fs.readdirSync('./emojis').filter(file => file.endsWith('.js'));

for (const file of emoteFiles) {
  const emote = require(`./emojis/${file}`);
  client.emoteMessages.set(emote.name, emote);
}

//Commands and other text based scripts
client.on('message', message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (!command.whitelist || command.whitelist.includes(message.guild.id)) {
    try {
      command.execute(message, args, client);
    }
    catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
  }
  else return
});

//Role saver auto updater
client.on('guildMemberUpdate', (oldMember, newMember) => {
  const facts = {
    id: newMember.id,
    nickname: newMember.nickname,
    roles: newMember.roles.cache.array()
  };
  const factsStr = JSON.stringify(facts);
  try {
    fs.writeFile(`./rolesaver/${newMember.id}-${newMember.guild.id}.json`, factsStr, (err) => {
      if (err) throw err;
      console.log(`${newMember.displayName} has been updated for the server ${newMember.guild.name}`);
    });
  }
  catch (error) {
    console.error(error);
  }
});

//Role saver and welcome message
client.on('guildMemberAdd', GuildMember => {
  try {
    const data = fs.readFileSync(`./rolesaver/${GuildMember.id}-${GuildMember.guild.id}.json`);
    const facts = JSON.parse(data);

    if (!facts) return;

    if (facts.nickname) GuildMember.setNickname(facts.nickname)

    if (facts.roles) {
      for (x = 0; x < facts.roles.length; x++) {
        if (facts.roles[x].name != '@everyone') GuildMember.roles.add(facts.roles[x].id);
      };
    };
  }
  catch (error) {
    console.error(error);
  }
  const server = welcome.find(guild => guild.id && guild.id == GuildMember.guild.id);

  if (!server) return;

  const channel = server.channel;

  client.channels.cache.get(channel).send({
    embed: {
      "title": eval('`'+server.title+'`'),
      "url": server.url,
      "description": eval('`'+server.description+'`'),
      "color": eval(server.color),
      "footer": {
        "text": `${GuildMember.id}`
      },
      "thumbnail": {
        "url": `${GuildMember.user.displayAvatarURL()}`
      }
    }
  });
});

//goodbye message
client.on('guildMemberRemove', GuildMember => {
  const server = welcome.find(guild => guild.id && guild.id == GuildMember.guild.id);
  
  if (!server) return;

  const channel = server.channel;

  client.channels.cache.get(channel).send(eval('`'+server.goodbye+'`'));
});
client.login(token);
