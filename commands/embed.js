const { DiscordAPIError, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'Embed',
    description: "idk",
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle('StackNetwork')
        .setColor('#ff00ff')
        .setDescription('idk, i dont know, i really dont know')

        msg.channel.send(embed);

    }

}