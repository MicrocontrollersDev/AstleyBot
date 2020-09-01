const fs = require('fs');

module.exports = {
  name: 'massupdate',
  description: 'Updates locally cached roles and nicknames for all users in the guild.',
  help: '1',
  execute(message, args) {
    if (!message.member.hasPermission('MANAGE_GUILD')) {
      message.channel.send('You do not have permission to use that!');
      return;
    }
    const member = message.guild.members.cache.array();
    for(x = 0; x < member.length; x++) {
      const facts = {
        id: member[x].id,
        nickname: member[x].nickname,
        roles: member[x].roles
      };
      const factsStr = JSON.stringify(facts);
      try {
        fs.writeFile(`./rolesaver/${member[x].id}-${member[x].guild.id}.json`, factsStr, (error) => {
          if (error) return;
          console.log('A member has been updated by mass update.')
        });
      }
      catch (error) {
        console.error(error);
      }
    };
  },
};