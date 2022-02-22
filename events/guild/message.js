const play = require("../../commands/music/play");

module.exports = (Discord, client, message) => {
    const prefix = '?';
    if(!message.content.startsWith(prefix) || message.author.bot) {return}
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(commandAlias => commandAlias.aliases && commandAlias.aliases.includes(cmd));
    if(command){
        switch(command.category){
            case 'music':
                if (cmd == 'play' || cmd == 'playlist') {command.execute(client, message, args, Discord); return;}
                if(!message.member.voice.channelId) {
                    message.reply('You are not in a voice channel!');
                    return;
                }
                if(message.member.voice.channelId != message.guild.me.voice.channelId){
                    message.reply('You are not in the same voice channel as the bot!');
                    return;
                }
                command.execute(client, message, args, Discord);
                break;
            default:
                command.execute(client, message, args, Discord);
        }

    }
}