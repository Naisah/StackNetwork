module.export = {
    name: 'Embed' ,
    description: "Embeds for the server",
    execute(message, args) {

    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ff00ff')
    .setTitle('StackNetwork')
    .setURL('store.stacknetwork.net')
    .setDescription('no desc yet')
    .setThumbnail('https://imgur.com/a/FrNooWN')
    .addFields(
         { name: 'Ranks', value: 'StackNetwork offers a selection of ranks to buy in order to enhance your experience in our server. We also offer crates and etc that will give you more advantage and perks'},
         { name: '\u200B', value: '\u200B' },
         { name: 'Prizes', value: 'We also offer our players rewards if u achieve the goal in being on one of the top 5 islands', inline: true },
         { name: 'Rewards', value: 'We offer our players rewards via paypal and monthly vouchers which can be used in our store at store.stacknetwork.net', inline: true },
         { name: 'Gamemodes', value: 'Currently we only have one gamemode called Skyblock this will soon multiply to more gamemodes that you can play for you to enjoy!', inline: true },

)
    .setImage('https://imgur.com/a/bVdS8k8')
    .setTimestamp()
    .setFooter('Join our server now! play.stacknetwork.net');
    
    channel.send(exampleEmbed);

}}