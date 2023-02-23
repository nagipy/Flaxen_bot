module.exports = client => {
  const cid = process.env.clientId
  const { Client } = require("discord-rpc")
  const rpc = new Client({ transport: "ipc" })

  rpc.on("ready", () => {
    rpc.setActivity({
      details: "Text 1",
      state: "Text 2",
      largeImageKey: "",
      largeImageText: "image text",
      smallImageKey: "",
      // smallImageText: "image text",
      partyId: "",
      partySize: 1,
      partyMax: 5,
      instance: false,
      buttons: [
        {
          label: "Youtube",
          url: "https://youtube.com/"
        }
      ]
    })
    console.log("rpc start")
  })

  rpc.login({ clientId: cid })
}
