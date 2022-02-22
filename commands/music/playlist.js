const { DefaultPlaylistOptions } = require("discord-music-player");

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
        DefaultPlaylistOptions.maxSongs = 33;
        DefaultPlaylistOptions.requestedBy = message.author.tag;
        let maxQueueSize = 100;
        let queue = client.player.createQueue(message.guild.id);
        let guildQueue = client.player.getQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        // /console.log(args)
        let length = queue.playlist.songs
        console.log(length)

        if(!guildQueue){
            queue.stop();
            return;
        }

        if(guildQueue.songs.length >= maxQueueSize){
            message.reply('Soft queue limit is 100! You are over now over the limit. Please remove songs or clear queue to have access to play/playlist commands!');
            return;
        }

        queue.playlist(args.join(' '));

    }  
}