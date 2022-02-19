const { ContextMenuInteraction } = require("discord.js");

module.exports = {
    name: 'pause',
    description: 'Pauses current song',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying)
        {
                guildQueue.setPaused(true);
                const pause = {
                    color: 0x00f9f9,
                    fields:[
                        {
                            name: '<a:pause_button:944414921880371240> Music has been paused!',
                            value: `Paused by: @${message.author.tag}`,
                        },
                    ],
                }
                message.channel.send({embeds: [pause]});
        }
    }
}  