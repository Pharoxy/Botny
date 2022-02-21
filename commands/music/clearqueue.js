module.exports = {
    name: 'clearqueue',
    aliases: ['clearq', 'deleteq', 'deletequeue', 'queuedelete'],
    category: 'music',
    description: 'Clears current song queue',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            guildQueue.clearQueue();
            const clearq = {
                color: 0x00f9f9,
                fields:[
                    {
                        name: '<a:x:944415752511971328> Queue has been cleared!',
                        value: `Queue Cleared by: <@${message.author.id}>`,
                    },
                ],
            }
            message.channel.send({embeds: [clearq]});
        }
        
    }
}  