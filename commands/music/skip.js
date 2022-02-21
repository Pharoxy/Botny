module.exports = {
    name: 'skip',
    aliases: ['nextsong', 'ns'],
    category: 'music',
    description: 'Skips current song',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            guildQueue.skip();
            const skip = {
                color: 0x00f9f9,
                fields:[
                    {
                        name: '<a:track_next:944416005793415199> Current song has been skipped!',
                        value: `Skipped by: <@${message.author.id}>`,
                    },
                ],
            }
            message.channel.send({embeds: [skip]});
        }
    }

}