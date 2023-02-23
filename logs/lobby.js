const { MessageEmbed } = require("discord.js")

module.exports = client => {

  client.on("guildMemberAdd", member => {
    const channel = member.guild.channels.cache.find((channel) => channel.name === "lobby")

    const embed = new MessageEmbed()
      .setColor("GREEN")
      .setAuthor(member.displayName, member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`**${member.displayName}** has Joined\nID: ${member.id}\nUser createdAt: ${member.user.createdAt}`)
      .setTimestamp()

    channel.send(embed)

    const guilds = client.guilds.cache.get(process.env.guild)
    const members = guilds.channels.cache.get(process.env.member)

    members.setName("Member: " + guilds.memberCount)
  })

  client.on("guildMemberRemove", member => {
    const channel = member.guild.channels.cache.find((channel) => channel.name === "lobby")

    const embed = new MessageEmbed()
      .setColor("RED")
      .setAuthor(member.displayName, member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`**${member.displayName}** has Left\nID: ${member.id}`)

    channel.send(embed)

    const guilds = client.guilds.cache.get(process.env.guild)
    const members = guilds.channels.cache.get(process.env.member)

    members.setName("Member: " + guilds.memberCount)
  })
}
