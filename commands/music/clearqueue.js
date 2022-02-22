const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'clearqueue',
    aliases: ['clearq', 'deleteq', 'deletequeue', 'queuedelete'],
    category: 'music',
    description: 'Clears current song queue',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(!guildQueue || !guildQueue.isPlaying){
            message.reply('There is no queue!');
            return;
        }

        guildQueue.clearQueue();
        const clearq = new MessageEmbed()
            .setColor('0x00f9f9')
            .addField('<a:x:944415752511971328> Queue has been cleared!',`Queue Cleared by: <@${message.author.id}>`)
        
        message.channel.send({embeds: [clearq]});    
    }
}  