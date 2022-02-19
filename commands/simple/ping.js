module.exports = {
    name: 'ping',
    description: "This is a simple ping pong command",
    async execute(client, message, args){
        message.channel.send('pong!');
    }
}