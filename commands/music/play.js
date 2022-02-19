module.exports = {
    name: 'play',
    description: 'plays music through bot',
    async execute(client, message, args){
        let queue = client.player.createQueue(message.guild.id);
        let guildQueue = client.player.getQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' ')).catch(_ => {
            if(!guildQueue){
                queue.stop();
            }
        })
        song.requestedBy = message.author.tag;
    }
}