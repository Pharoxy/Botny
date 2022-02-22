module.exports = {
    name: 'seek',
    aliases: ['forward', 'ff'],
    category: 'music',
    description: 'Seek current song via user input',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(!guildQueue || !guildQueue.isPlaying){
            message.reply('There is no song playing!');
            return;
        }

        const seek = new MessageEmbed()
            .setColor('0x00f9f9')
            .addField('<a:control_knobs:945465793762701352> Changing playback time...', `Seeked by: <@${message.author.id}>`)

        guildQueue.seek(parseInt(args[0])*1000);
        message.channel.send({embeds: [seek]});
    }
}
