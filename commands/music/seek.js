module.exports = {
    name: 'seek',
    description: '',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            guildQueue.seek(parseInt(args[0])*1000);
        }
    }
}