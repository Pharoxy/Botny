const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'skip',
    aliases: ['nextsong', 'ns'],
    category: 'music',
    description: 'Skips current song',
    async execute(client, message, args){
    let guildQueue = client.player.getQueue(message.guild.id);
    if(!guildQueue || !guildQueue.isPlaying){
        message.channel.send(`<@${message.author.id}> there is no song to skip!`);
        return;
    }
        guildQueue.skip();
        const skip = new MessageEmbed()
            .setColor('0x00f9f9')
            .addField('<a:track_next:944416005793415199> Current song has been skipped!', `Skipped by: <@${message.author.id}>`)

        message.channel.send({embeds: [skip]});
    }
}

