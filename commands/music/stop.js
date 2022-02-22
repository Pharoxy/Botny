const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stop',
    aliases: ['halt'],
    category: 'music',
    description: 'Disconnects music player and deletes its queue',
    async execute(client, message, args){
        let guildQueue = client.player.getQueue(message.guild.id);
        if(!guildQueue || !guildQueue.isPlaying){
            message.reply('There is no music player active!');
            return;
        }

        guildQueue.stop();
        const stop = new MessageEmbed()
            .setColor('0x00f9f9')
            .addField('<a:stop_button:944415175614816297> Music has been stopped!',`Stopped by: <@${message.author.id}>`)

        message.channel.send({embeds: [stop]});
    }
}
