module.exports = {
    name: 'stop',
    description: 'stops music player',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            guildQueue.stop();
        }
    }
}