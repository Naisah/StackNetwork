const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/' ;
const fs = require('fs');

client.commands = new Discord.Collection();
const embed = new Discord.MessageEmbed()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
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
    
    if(command === 'store') {
        client.commands.get('store').execute(msg, args);   
      } else if(command == 'vote') {
        client.commands.get('vote').execute(msg, args);
      } 
    
      
})

client.login(process.env.token);

