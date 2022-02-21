const { MessageEmbed, MessageButton } = require("discord.js");
const paginationEmbed = require("discordjs-button-pagination");

module.exports = {
    name: 'getqueue',
    aliases: ['getq', 'queue', 'songlist'],
    category: 'music',
    description: 'Obtains current song queue',
    async execute(client, message, args){
        // Determines if queue is active or player exists. Failing so returns a bot reply
        let guildQueue = client.player.getQueue(message.guild.id);
        if(!guildQueue || !guildQueue.isPlaying){
            message.channel.send(`<@${message.author.id}> There is no queue currently!`);
            return;
        }

        // Obtain current song list (queue) and determine amount of songs we want per embed page
        let songList = guildQueue.songs;
        const embedList = [];
        let spliceCount = 6;
        let songsPerPage = 6;

        // For every amount of songs we want per embed page in the queue length, we splice and increment by that amount while mapping the information of the songs name and url
        // per song in the splice, then we push that information to a predefined empty array to hold the embeds. This loops until conditions are met. 
        for(let currentSong = 0; currentSong < songList.length;  currentSong += songsPerPage){
            const currentSplice = songList.slice(currentSong, spliceCount);
            let queuePos = currentSong;
            spliceCount += 6;
            const currentSongInfo = currentSplice.map(song => `${++queuePos}) [${song.name}](${song.url})`).join('\n');
            const embed = new MessageEmbed()
                .setDescription(`<a:musical_note:943698331346038865> ** [Current Song: ${songList[0].name}](${songList[0].url})** \n${currentSongInfo}`)
                .setColor('0x00f9f9')
            embedList.push(embed);
        }

        // Create our prev/next interactive buttons and place them in a list for pagination
        const backBtn = new MessageButton()
            .setCustomId('previousbtn')
            .setLabel('Previous')
            .setStyle('DANGER');

        const nextBtn = new MessageButton()
            .setCustomId('nextbtn')
            .setLabel('Next')
            .setStyle('SUCCESS');

        buttonList = [
            backBtn,
            nextBtn
        ]

        // Create embed with page support via pagination
        paginationEmbed(message, embedList, buttonList)
    }
}
