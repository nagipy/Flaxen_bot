const { MessageEmbed } = require("discord.js");
const prefix = process.env.prefix

module.exports = client => {

  client.on("message", async message => {
    if (message.author.id == client.user.id || message.author.bot) return
    if (!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if (command === "bot_info") {
      const creator = client.users.cache.get("505288318372544522")
      const embed = new MessageEmbed()
        .setColor("GOLD")
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTitle("Info on this bot.")
        .addField("Creator", creator.tag)
        .addField("Twitter", "https://twitter.com/_nagipoyo")
        .addField("Source code", "https://github.com/nagipy/kotoha_source_code")
        .addField("Code rules", "ソースコードに関しては、御自身のボットに組み込んでも構いませんが、作成者が誰であるという表記をつけてくださると幸いです。\nまた、このコマンドはソースには載せていませんので、作る際は、ご自身で...")
        .setTimestamp()

      message.reply(embed)
    }

    if (command === "bot_size") {
      const size = client.guilds.cache.size
      const name = client.guilds.cache.map(guild => guild.name).join("\n")
      const bot = client.user

      const embed = new MessageEmbed()
        .setColor("GOLD")
        .setAuthor(`このボットは ${size}個 のサーバーに参加しています。`)
        .setDescription(name)
        .setThumbnail(bot.displayAvatarURL({ dynamic: true }))
        .setFooter(bot.tag)

      message.reply(embed)
    }

    if (command === "info") {
      const { guild, channel } = message
      const user = message.mentions.users.first() || message.member.user
      const member = guild.members.cache.get(user.id)

      const embed = new MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setAuthor(`${user.tag}`)
        .addFields(
          {
            name: "User tag",
            value: user.tag,
            inline: true,
          },
          {
            name: "User ID",
            value: user.id,
            inline: true,
          },
          {
            name: "Nickname",
            value: member.nickname || "未設定",
          },
          {
            name: "Joined Server",
            value: new Date(member.joinedTimestamp).toLocaleDateString(),
            inline: true,
          },
          {
            name: "Joined Discord",
            value: new Date(user.createdTimestamp).toLocaleDateString(),
            inline: true,
          },
          {
            name: "Roles",
            value: member.roles.cache.size - 1,
          },
          {
            name: "Is bot",
            value: user.bot,
          },
        )

      channel.send(embed)
    }
  })
}
