const { Client } = require("discord.js")
require("dotenv").config()
const client = new Client()

const time = new Date().toLocaleString("jp-JP", { timeZone:  "Asia/Tokyo" })

client.on("ready", () =>  {
 console.log(`login bot: ${client.user.tag}\nstart: ${time}`)
  
 client.user.setPresence({ status: "idle" })
  
  const files = require("./files")
  files(client)
  
  console.log(`end: ${time}`)
})

client.login("Your bot token")
