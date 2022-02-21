module.exports = {
    name: 'play',
    category: 'music',
    description: 'plays music through bot',
    async execute(client, message, args){
        let maxQueueSize = 3;
        if(!message.member.voice.channelId){
            console.log('You are not in a voice channel!');
            return;
        } 
        if ((args.length < 1)) {
            console.log('You need to put a link or song name!');
            return;
        }
        let queue = client.player.createQueue(message.guild.id);
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue.songs.length == maxQueueSize){
            console.log('The Queue limit has been reached!');
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