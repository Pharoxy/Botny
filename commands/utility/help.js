const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'help',
    category: 'utility',
    description: 'Displays all available commands/command aliases as well as their description',
    async execute(client, message, args){
        // Ensure if there is a user input
        if(args.length > 0){
            // Ensure if the user input coencides with the name of an existing command
            let command = args.join(' ')
            if(!client.commands.get(command))
            {
                message.reply('That command does not exist!')
                return;
            }

            // Obtain the information of the command the user requested
            let commandInfo = client.commands.get(command)
            let tempAlias = commandInfo.aliases
            if(!commandInfo.aliases){
                tempAlias = 'No Aliases'
            }
            let helpEmbed = new MessageEmbed()
                .setColor('0x00f9f9')
                .setTitle(`?${commandInfo.name}`)
                .addFields(
                    {name: 'Aliases:', value: '`'+`${tempAlias}` +'`'},
                    {name: 'Category:', value: '`'+`${commandInfo.category}`+'`'},
                    {name: 'Description:', value: '`'+`${commandInfo.description}`+'`'},
                )
            message.reply({embeds: [helpEmbed]})
            return;
            
        }

        // If the user only input the general help command, we execute this
        let musicCat = ''
        let simpleCat = ''
        let utilityCat = ''
        let commandList = client.commands;
        commandList.forEach(command =>{
            if(command.category == 'music'){
                musicCat = musicCat.concat(' `', command.name, '` ')
            } else if(command.category == 'simple'){
                simpleCat = simpleCat.concat(' `', command.name, '` ')
            } else if(command.category == 'utility'){
                utilityCat = utilityCat.concat(' `', command.name,'` ')
            }
        }) 

        const helpCommands = new MessageEmbed()
        .setColor('0x00f9f9')
        .setTitle('<a:scroll:945828631664545853> Command list and categories')
        .setDescription('Use ``?help [command]`` to get more info, like aliases, on a command!')
        .addFields(
        {name: '<a:musical_note:943698331346038865> Music Commands', value: `${musicCat}`},
        {name: '<a:game_die:945827949188350003> Simple Commands', value: `${simpleCat}`},
        {name: '<a:tools:945828107791777793> Utility Commands', value:`${utilityCat}`},
        )
        message.reply({embeds: [helpCommands]})        
    }
}

        
