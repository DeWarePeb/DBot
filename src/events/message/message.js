const discord = require('discord.js');
const config = require('../../config/config.json');

module.exports = (client, message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let cmdName = message.content.substring(message.content.indexOf(config.prefix) + 1).split(new RegExp(/\s+/)).shift();
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  if (client.commands.get(cmdName))
    client.commands.get(cmdName)(client, message, args);
  else
    message.channel.send("No command is named that way.");
    console.log("Command does not exist.");
};