module.exports = {
    name: 'skip',
    description: 'skips current song',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            guildQueue.skip();
        }
    }

}