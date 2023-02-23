const { MessageEmbed } = require("discord.js")
const yts = require('yt-search')

module.exports = client => {

  client.on("message", async message => {
    if (message.author.bot) return;

    const content = message.content;

    if (content.match("y!search")) {
      let search = content;
      search = search.replace(/n!search /g, "");

      const embed = new MessageEmbed()
        .setColor("GOLD")
        .setTitle(`検索中...`)
        .setDescription(`検索単語 | ${search}`)
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

      const time = await message.reply(embed)

      const r = await yts(search)
      const videos = r.videos.slice(0, 1)
      videos.forEach(function (v) {
        const embed = new MessageEmbed()
          .setColor("GOLD")
          .setAuthor(v.author.name)
          .setTitle(v.title)
          .setDescription("Video Id: " + v.videoId + "\nVideo URL: " + v.url + "\n 検索単語: " + search)
          .setURL(v.url)
          .setImage(v.image)
          .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()

        time.edit(embed)
      })
    }

    if (content.match("y!id_search")) {
      let search = content;
      search = search.replace(/n!id_search /g, "");

      const embed = new MessageEmbed()
        .setColor("GOLD")
        .setTitle("検索中...")
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

      const time = await message.reply(embed)

      const video = await yts({ videoId: `${search}` })
      const embede = new MessageEmbed()
        .setColor("GOLD")
        .setAuthor(video.author.name)
        .setTitle(video.title)
        .setURL(video.url)
        .setImage(video.image)
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

      time.edit(embede)
    }
  })
}
