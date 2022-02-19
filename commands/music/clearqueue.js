module.exports = {
    name: 'clearq',
    description: 'clears current song queue',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            guildQueue.clearQueue();
        }
    }
}  