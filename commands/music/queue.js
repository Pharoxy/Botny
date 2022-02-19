module.exports = {
    name: 'getq',
    description: '',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(guildQueue && guildQueue.isPlaying){
            let songList = guildQueue.songs;
            songList.forEach(element => message.channel.send(`In queue: ${element.name} \n`));
        } else {
            console.log('There are no songs in queue~');
        }
    }
}