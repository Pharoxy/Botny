const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'remove',
    aliases: ['removesong', 'rs'],
    category: 'music',
    description: 'Removes selected song from queue using its position in queue',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(!guildQueue || !guildQueue.isPlaying){
            message.reply('There is no queue!');
            return;
        }

        let songIndex = parseInt(args)
        if(!guildQueue.songs[args]){
            message.reply('Please input a valid track number in the queue!');
            return;
        } else if(songIndex == 0) {
            message.reply('Cannot remove current song playing!');
            return;
        }

        console.log(typeof args)
        const removeq = new MessageEmbed()
            .setColor('0x00f9f9')
            .addField(`<a:x:944415752511971328> ${guildQueue.songs[args].name} has been removed from the queue!`, `Song removed by: <@${message.author.id}>`)
        
        message.channel.send({embeds: [removeq]});
        guildQueue.remove(songIndex);
    }
}