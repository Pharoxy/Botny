module.exports = {
    name: 'resume',
    aliases: ['r', 'start'],
    category: 'music',
    description: 'Resumes currently paused song',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            guildQueue.setPaused(false);
            const resume = {
                color: 0x00f9f9,
                fields:[
                    {
                        name: '<a:arrow_forward:944414908865466449> Music has been resumed!',
                        value: `Resumed by: <@${message.author.id}>`,
                    },
                ],
            }
            message.channel.send({embeds: [resume]});
        }
    }
}  