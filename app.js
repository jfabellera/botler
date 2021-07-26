const config = require('./config');
const { Client } = require('./src/client.js');
const { Intents } = require('discord.js');
require('dotenv').config();

global.__basedir = __dirname;

// Add intents
const intents = new Intents();
intents.add(
  'GUILD_PRESENCES',
  'GUILD_MEMBERS',
  'GUILDS',
  'GUILD_VOICE_STATES',
  'GUILD_MESSAGES',
  'GUILD_MESSAGE_REACTIONS'
);

// Create custom client
const client = new Client();

function initialize() {
    client.loadEvents('./src/events');
    client.loadCommands('./src/commands');
    client.login(process.env.BOT_TOKEN);
}

initialize();
