const { MessageEmbed } = require("discord.js")
const prefix = process.env.prefix;

module.exports = client => {
  client.on("message", async message => {
   if (message.author.id == client.user.id || message.author.bot ) return
   if (!message.content.startsWith(prefix)) return
   const args = message.content.slice(prefix.length).trim().split(/ +/g)
   const command = args.shift().toLowerCase()
   
   if (command === "help") {
   const owner = message.guild.owner.user
   
   const embed = new MessageEmbed()
   .setColor("BLUE")
   .setAuthor("Help Command", message.author.displayAvatar({ dynamic: true }))
   .setThumbnail(message.guild.iconURL({ dynamic:true }))
   .setDescription("コマンドのはじめに `"+ prefix +"` をつける必要があります")
   .addFields(
     {
       name: "info [option: mentions]",
       value: "ユーザー情報を表示するコマンド。\n簡易的な表示の為、既に Discord Update によって追加された情報も存在します。\nメンションがない場合は、実行者のアイコンを取得します。",
     },
     {
       name: "avatar [option: mentions]",
       value: "ユーザーアバター[アイコン]を表示するコマンドです。",
     },
     {
       name: "avatar_s",
       value: "サーバーアイコンを表示するコマンドです。",
     },
     {
       name: "bot",
       value: "creator info & bot info",
     },
     {
       name: "search [search contents]",
       value: "Youtube video search commands",
     }
   )
   .setFooter(`Guild owner ${owner.username}`)
   
   message.reply(embed)
   }
 })
}
