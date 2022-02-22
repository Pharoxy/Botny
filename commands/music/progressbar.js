const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'progressbar',
    aliases: ['pbar'],
    category: 'music',
    description: 'Displays progress bar of currents song',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(!guildQueue || !guildQueue.isPlaying){
            message.channel.send(`<@${message.author.id}> there is no song playing!`);
            return;
        }
        
        const ProgressBar = guildQueue.createProgressBar();
        const pBar = new MessageEmbed()
            .setColor('0x00f9f9')
            .addField('<a:level_slider:944414973772329061> Current Playback', `${ProgressBar.prettier}`)
            .setFooter({text: `Requested by <@${message.author.id}>`})
            
        message.channel.send({embeds: [pBar]});
    }
}
  