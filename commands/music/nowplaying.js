const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'np',
    description: 'Displays current song playing',
    async execute(client, message, args){
        // Obtaines player queue, and if available, returns an embeded response with information about the song currently playing
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            const progressBar = guildQueue.createProgressBar();
            let pBar = progressBar.prettier;
            let nextsong = '';
            if(typeof guildQueue.songs[1] == 'undefined'){
                nextsong = '<a:no_entry_sign:943698232754728990> Nothing next in queue'
            } else {
                nextsong = `<a:arrow_forward:943698121404334171> ${guildQueue.songs[1].name}`;
            }
            const nowPlayingEmbed = {
                color: 0x00f9f9,
                thumbnail: {
                    url: `${guildQueue.songs[0].thumbnail}`,
                },
                fields:[
                    {
                        name: '<a:musical_note:943698331346038865> Currently Playing ',
                        value: `[${guildQueue.songs[0].name}](${guildQueue.songs[0].url})`,
                    },
                    {
                        name: 'By',
                        value: `${guildQueue.songs[0].author}`,
                    },
                    {
                        name: 'Playback Position',
                        value: `<a:level_slider:943699387274633257> ${pBar}`,
                    },
                    {
                        name: 'Next Song:' ,
                        value: `${nextsong}`,
                    }
                ],
                footer: {  
                    text: `Requested by @${guildQueue.songs[0].requestedBy}`,
                }
            }
            message.channel.send({embeds: [nowPlayingEmbed]});
        }
    }
}  