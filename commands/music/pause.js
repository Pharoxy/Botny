const { ContextMenuInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pause',
    aliases: ['p'],
    category: 'music',
    description: 'Pauses current song',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(!guildQueue || !guildQueue.isPlaying){
            message.reply(`There is no song to pause!`);
            return;
        }
        if(guildQueue.paused){
            message.reply(`Song is already paused!`)
            return;
        }
        
        guildQueue.setPaused(true);
        const pause = new MessageEmbed()
            .setColor('0x00f9f9')
            .addField('<a:pause_button:944414921880371240> Music has been paused!', `Paused by: <@${message.author.id}>`)

        message.channel.send({embeds: [pause]}); 
    }
}  