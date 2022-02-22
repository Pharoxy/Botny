const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'resume',
    aliases: ['r', 'start'],
    category: 'music',
    description: 'Resumes currently paused song',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(!guildQueue || !guildQueue.isPlaying){
            message.channel.send(`<@${message.author.id}> there is no song to resume!`);
            return;
        }
        if(guildQueue.paused == false){
            message.channel.send(`<@${message.author.id}> Song is already playing!`)
            return;
        }
        
        guildQueue.setPaused(false);
        const resume = new MessageEmbed()
            .setColor('0x00f9f9')
            .addField('<a:arrow_forward:944414908865466449> Music has been resumed!', `Resumed by: <@${message.author.id}>`)

        message.channel.send({embeds: [resume]});
    }
}
  