const config = require('./src/config/config.json');
const discord = require('discord.js');
const client = new discord.Client({ partials: ['MESSAGE', 'REACTION'] });
const { registerCommands, registerEvents } = require('./src/utils/registry');

(async () => {
    client.login(config.token);
    client.commands = new Map();
    client.cachedMessageReactions = new Map();
    await registerEvents(client, '../events');
    await registerCommands(client, '../commands');

})();