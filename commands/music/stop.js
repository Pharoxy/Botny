module.exports = {
    name: 'stop',
    description: 'stops music player',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            guildQueue.stop();
            const stop = {
                color: 0x00f9f9,
                fields:[
                    {
                        name: '<a:stop_button:944415175614816297> Music has been stopped!',
                        value: `Stopped by: @${message.author.tag}`,
                    },
                ],
            }
            message.channel.send({embeds: [stop]});
        }
    }
}