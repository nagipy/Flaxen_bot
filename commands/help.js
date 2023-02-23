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
    
   if (command === "dev/s") {
   const bot = client.user.id
   
   message.channel.send(`${bot} の開発状況...\n`<@${bot.id}> の開発状況...\n \n実装済み\n✅youtube search(id, word search)\n✅ボイスチャット参加/退出 通知\n✅サーバー参加/退出 通知\n🚫サーバーメンバー自動取得\n🚫サーバーBANユーザー取得\n✅サーバーアイコン取得\n✅ユーザーアイコン取得\n✅ユーザー情報取得\n🚫ユーザーBAN & Kick\n🚫ロール付与\n🚫招待リンク作成\n \n実装予定\n🚫指定ユーザーのダイレクトメッセージ`)
   }
   
   if (command === "owner") {
   const guild = message.guild
   const owner = guild.owner.user.
   
   const embed = new MessageEmbed()
   .setColor("GOLD")
   .setAuthor(owner.tag)
   .setImage(owner.displayAvatarURL({ dynamic: true, size: 512 }))
   }
 })
}
