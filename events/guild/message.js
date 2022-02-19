module.exports = (Discord, client, message) => {
    const prefix = '?';
    if(!message.content.startsWith(prefix) || message.author.bot) {return}
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
        //If command is play
        if(cmd == 'play'){
            //If the bot is in a channel
            if(message.guild.channels.cache.some(channel => (channel.type === 'GUILD_VOICE' && channel.members.has(client.user.id)))){
                //If bot is on, check if the user is in voice chat
                if(!message.member.voice.channelId){
                 console.log('You are not in a voice channel!');
                 return;
                }
                //If bot is on and user is in voice chat, check if they are both in the same voice chat
                if(message.member.voice.channelId != message.guild.me.voice.channelId){
                    console.log('You are not on the same voice channel as a bot!');
                    return;
                } 
            } else {
                // If bot is not in a voice channel and user is not in a voice channel
                if(!message.member.voice.channelId){
                    console.log('You are not in a voice channel!');
                    return;
                   }
            }
        } else {
            // If cmd is not play
            // Determines if bot is in a voice channel
            if(message.guild.channels.cache.some(channel => (channel.type === 'GUILD_VOICE' && channel.members.has(client.user.id)))){
                console.log('Bot is in channel!');
            } else {
                console.log('bot is not in channel');
                return;
            }
            // Determines if the user is in a voice channel
            if(!message.member.voice.channelId){
                console.log('You are not in a voice channel!');
                return;
            }
            // Determines if bot and user are on the same channel
            if(message.member.voice.channelId != message.guild.me.voice.channelId){
                console.log('You are not on the same voice channel as a bot!');
                return;
            }
        }
    const command = client.commands.get(cmd);
    if(command) command.execute(client, message, args, Discord);

}