const { DefaultPlayerOptions, DefaultPlayOptions } = require("discord-music-player");

module.exports = {
    name: 'play',
    category: 'music',
    description: 'Queues a song in music player',
    async execute(client, message, args){
        DefaultPlayOptions.requestedBy = message.author.tag;
        let maxQueueSize = 100;
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
            message.reply('Soft queue limit is 100! You are over now over the limit. Please remove songs or clear queue to have access to play/playlist commands!');
            return;
        }
        await queue.join(message.member.voice.channel);
        await queue.play(args.join(' ')).catch(_ => {
            if(!guildQueue){
                queue.stop();
            }
        })
    }
}