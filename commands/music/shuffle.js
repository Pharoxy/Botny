module.exports = {
    name: 'shuffle',
    aliases: ['mix'],
    category: 'music',
    description: 'Shuffles current queue',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            guildQueue.shuffle();
            const shuffle = {
                color: 0x00f9f9,
                fields:[
                    {
                        name: '<a:twisted_rightwards_arrows:944416140367642644> Queue has been shuffled!',
                        value: `Queue shuffled by: <@${message.author.id}>`,
                    },
                ],
            }
            message.channel.send({embeds: [shuffle]});
        }
    }
}  