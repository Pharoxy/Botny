module.exports = {
    name: 'shuffle',
    description: 'Shuffles current queue',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            guildQueue.shuffle();
        }
    }
}  