const { Client, Intents } = require('discord.js');
const { RepeatMode } = require('discord-music-player');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const config = require('./config.json');
global.client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILDS] });
client.commands = new Discord.Collection();
client.events = new Discord.Collection();


// Initializes command and event handler
['commandHandler', 'eventHandler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord); 
})

//Initialzes Player
const { Player } = require("discord-music-player");
const player = new Player(client, {
    leaveOnEmpty: false, // This options are optional.
});
// You can define the Player as *client.player* to easily access it.
client.player = player;

client.login('config.token');