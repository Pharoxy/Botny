module.exports = {
    name: 'playlist',
    category: 'music',
    description: 'Queues a song playlist/album via link',
    async execute(client, message, args){
        if(!message.member.voice.channelId){
            message.reply('You are not in a voice channel!')
            return;
        } 
        if ((args.length < 1)) {
            message.reply("Please include a playlist or album link!")
            return;
        }
        let queue = client.player.createQueue(message.guild.id);
        let guildQueue = client.player.getQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        await queue.playlist(args.join(' ')).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });
    }  
}