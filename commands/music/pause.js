const { ContextMenuInteraction } = require("discord.js");

module.exports = {
    name: 'pause',
    description: 'Pauses current song',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying)
        {
                guildQueue.setPaused(true);
        }
    }
}  