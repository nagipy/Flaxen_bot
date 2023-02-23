module.exports = client => {
  const cid = process.env.clientId
  const { Client } = require("discord-rpc")
  const rpc = new Client({ transport: "ipc" })

  rpc.on("ready", () => {
    rpc.setActivity({
      state: "Angel",
      largeImageKey: "guild_icon",
      largeImageText: "Mahiru",
      partyId: "ae488379-351d-4a4f-ad32-2b9b01c91657",
      partySize: 7,
      partyMax: 12,
      instance: false,
      buttons: [
        {
          label: "Twitter",
          url: "https://twitter.com/_nagipoyo"
        }
      ]
    })
    console.log("rpc start")
  })

  rpc.login({ clientId: cid })
}
