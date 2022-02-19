module.exports = {
    name: 'resume',
    description: 'Resumes currently paused song',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            guildQueue.setPaused(false);
        }
    }
}  