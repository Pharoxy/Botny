const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'shuffle',
    aliases: ['mix'],
    category: 'music',
    description: 'Shuffles current queue',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(!guildQueue || !guildQueue.isPlaying){
            message.reply('There is no queue to shuffle');
            return;
        }

        guildQueue.shuffle();
        const shuffle = new MessageEmbed()
            .setColor('0x00f9f9')
            .addField('<a:twisted_rightwards_arrows:944416140367642644> Queue has been shuffled!', `Queue shuffled by: <@${message.author.id}>`)
            
        message.channel.send({embeds: [shuffle]});
    }
}

  