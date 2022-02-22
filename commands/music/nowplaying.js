const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'nowplaying',
    aliases: ['np', 'currentsong', 'cs'],
    category: 'music',
    description: 'Displays song currently playing',
    async execute(client, message, args){
        // Obtaines player queue, and if available, returns an embeded response with information about the song currently playing
        let guildQueue = client.player.getQueue(message.guild.id);
        if(!guildQueue || !guildQueue.isPlaying){
            message.channel.send(`<@${message.author.id}> there is no song currently playing!`);
            return;
        }
        const progressBar = guildQueue.createProgressBar();
        let pBar = progressBar.prettier;
        let nextsong = '';
        if(typeof guildQueue.songs[1] == 'undefined'){
            nextsong = '<a:no_entry_sign:943698232754728990> Nothing next in queue'
        } else {
            nextsong = `<a:arrow_forward:943698121404334171> ${guildQueue.songs[1].name}`;
        }

        const nowPlayingEmbed = new MessageEmbed()
            .setColor('0x00f9f9')
            .setThumbnail(`${guildQueue.songs[0].thumbnail}`)
            .addFields(
                {name: '<a:musical_note:943698331346038865> Currently Playing ', value: `[${guildQueue.songs[0].name}](${guildQueue.songs[0].url})`},
                {name: 'By', value: `${guildQueue.songs[0].author}`},
                {name: 'Playback Position', value: `<a:level_slider:943699387274633257> ${pBar}`},
                {name: 'Next Song:', value: `${nextsong}`},
            )
            .setFooter({text: `Requested by @${guildQueue.songs[0].requestedBy}`});
            
        message.channel.send({embeds: [nowPlayingEmbed]});
    }
}
  