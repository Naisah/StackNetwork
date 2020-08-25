const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/' ;
const fs = require('fs');
const embed = new Discord.MessageEmbed()

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const moment = require('moment')
const { MessageEmbed } = require('discord.js')
client.once('ready', () => {
    console.log('Stackbot is ready!');
    client.user.setActivity("play.stacknetwork.net", { type: 'PLAYING'});
    //ready will appear when procedure has been done correctly
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'store'){
        message.channel.send('http://store.stacknetwork.net/');
    }
    if(command === 'server')
        message.channel.send('play.stacknetwork.net');

    if (command === 'vote')
        message.channel.send(' 1.https://minecraft-server-list.com/server/465627/vote/ 2.https://www.planetminecraft.com/server/stacknetwork/vote/ 3.https://minecraft-mp.com/server/265382/vote/ 4.https://www.serverpact.com/vote-44084 5.https://minecraftservers.org/vote/591911 6.https://serverlist101.com/server/2003/vote/ 7.https://topg.org/Minecraft/in-612558' )

    if (command === 'Embed') {
        client.commands.get('Embed').execute(message, args);
    } 
    

})

client.login(process.env.token);

