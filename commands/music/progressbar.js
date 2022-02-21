module.exports = {
    name: 'progressbar',
    aliases: ['pbar'],
    category: 'music',
    description: 'Displays progress bar of currents song',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            const ProgressBar = guildQueue.createProgressBar();
            const pBar = {
                color: 0x00f9f9,
                fields:[
                    {
                        name: '<a:level_slider:944414973772329061> Current Playback',
                        value: `${ProgressBar.prettier}`,
                    },
                ],
                footer: {
                    text: `Requested by <@${message.author.id}>`, 
                }
            }
            message.channel.send({embeds: [pBar]});
        }
    }
}  