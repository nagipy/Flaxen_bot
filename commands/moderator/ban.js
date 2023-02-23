const { MessageEmbed } = require("discord.js")
const prefix = process.env.prefix

module.exports = client => {
  client.on("message", async message => {
    if (message.author.id == client.user.id || message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "ban") {
      message.delete()
      const guild = message.guild
      const author = message.author
      const role = guild.roles.cache.find(roles => roles.name === "Moderator")
      if (!message.member.roles.cache.has(role.id)) return
      if (message.mentions.members.size != 1) return
      const member = message.mentions.members.first()
      if (!member.bannable)
        return message.reply("指定したメンバーは 管理者 によって守られています")
      await member.ban()

      const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle(`${member.tag} がサーバーから BAN されました`)
        .setImage(memebr.displayAvatarURL({ dynamic: true, size: 512 }))
        .setFooter(`Requested by ${author}`, author.displayAvatarURL({ dynamic: true }))

      message.reply(embed)

      const channel = client.channels.cache.get(process.env.logs)
      const log = new MessageEmbed()
        .setColor("RED")
        .setTitle("Server member ban")
        .setDescription(`${author.tag} により ${memebr.tag} はサーバーから削除されました。`)

      const time = await channel.send(log)
      await time.delete({ timeout: 60000 })
    }
  })
}
