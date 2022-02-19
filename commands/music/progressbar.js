module.exports = {
    name: 'pbar',
    description: 'Displays progress bar',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            const ProgressBar = guildQueue.createProgressBar();
            message.channel.send(ProgressBar.prettier)
        }
    }
}  