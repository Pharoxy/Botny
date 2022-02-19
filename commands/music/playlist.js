module.exports = {
    name: 'playlist',
    description: 'Lets you play a youtube playlist',
    async execute(client, message, args){
        let queue = client.player.createQueue(message.guild.id);
        let guildQueue = client.player.getQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        await queue.playlist(args.join(' ')).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });
    }  
}