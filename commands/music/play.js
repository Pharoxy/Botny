module.exports = {
    name: 'play',
    category: 'music',
    description: 'Queues a song in music player',
    async execute(client, message, args){
        let maxQueueSize = 3;
        if(!message.member.voice.channelId){
            message.reply('You are not in a voice channel!')
            return;
        } 
        if ((args.length < 1)) {
            message.reply('Please include song link or song name')
            return;
        }
        let queue = client.player.createQueue(message.guild.id);
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue.songs.length == maxQueueSize){
            message.reply('Queue limit has been reached!')
            return;
        }
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' ')).catch(_ => {
            if(!guildQueue){
                queue.stop();
            }
        })
        song.requestedBy = message.author.tag;
    }
}