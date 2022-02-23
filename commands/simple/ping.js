module.exports = {
    name: 'ping',
    category: 'simple',
    description: "pong!",
    async execute(client, message, args){
        message.reply('pong!');
    }
}