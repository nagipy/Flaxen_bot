const { MessageEmbed } = require("discord.js");
const prefix = process.env.prefix

module.exports = client => {

  client.on("message", async message => {
    if (message.author.id == client.user.id || message.author.bot) return
    if (!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if (command === "avatar") {
      const target = message.mentions.users.first() || message.author

      const embed = new MessageEmbed()
        .setColor("BLUE")
        .setAuthor(target.tag)
        .setImage(target.displayAvatarURL({ dynamic: true, size: 512 }))
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

      message.reply(embed || "アイコンが取得できません。")
    }

    if (command === "avatar_s") {
      const target = message.guild

      const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(target.name)
        .setImage(target.iconURL({ dynamic: true, size: 512 }))
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

      message.reply(embed || "アイコンが取得できません。")
    }
  })
}
