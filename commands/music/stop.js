module.exports = {
    name: 'stop',
    aliases: ['halt'],
    category: 'music',
    description: 'Disconnects music player and deletes its queue',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            guildQueue.stop();
            const stop = {
                color: 0x00f9f9,
                fields:[
                    {
                        name: '<a:stop_button:944415175614816297> Music has been stopped!',
                        value: `Stopped by: <@${message.author.id}>`,
                    },
                ],
            }
            message.channel.send({embeds: [stop]});
        }
    }
}