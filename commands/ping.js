module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('pong!');

        client.on('message', msg => {
            if (msg.content === 'ping') {
              msg.reply('pong');
            }
          });
          


    }
}


